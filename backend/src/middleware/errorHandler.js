// import { process } from "zod/v4/core";

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { ZodError } from "zod";

export const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.statusCode || "error";

  if (process.env.NODE_ENV === "development") {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      error: err,
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
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: err.flatten(),
    });
  }
  if (err instanceof PrismaClientKnownRequestError) {
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

  console.log("ERROR: ", err);
  return res.status(500).json({
    status: "error",
    message: "something went wrong Internally",
  });
};
