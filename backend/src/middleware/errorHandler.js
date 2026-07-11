import { Prisma } from "@prisma/client";
import { ZodError } from "zod";

export const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      error: err,
    });
  }

  // zod error
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: err.flatten(),
    });
  }

  // prisma error
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        return res.status(409).json({
          success: false,
          message: "Record already exists.",
          target: err.meta?.target,
        });

      case "P2025":
        return res.status(404).json({
          success: false,
          message: "Record not found.",
        });

      case "P2003":
        return res.status(400).json({
          success: false,
          message: "Foreign key constraint failed.",
        });

      case "P2014":
        return res.status(400).json({
          success: false,
          message: "Invalid relation.",
        });

      default:
        return res.status(400).json({
          success: false,
          message: err.message,
          code: err.code,
        });
    }
  }
  if (err instanceof Prisma.PrismaClientValidationError) {
    return res.status(400).json({
      success: false,
      message: "Invalid query.",
    });
  }
  if (err instanceof Prisma.PrismaClientInitializationError) {
    return res.status(500).json({
      success: false,
      message: "Database connection failed.",
    });
  }

  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      error: err,
    });
  }

  console.log("ERROR: ", err);
  return res.status(500).json({
    status: "error",
    message: "something went wrong Internally",
  });
};
