// import { process } from "zod/v4/core";

export const globalMiddleWare = (err, req, res, next) => {
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

  console.log("ERROR", err);
  return res.status(500).json({
    status: "error",
    message: "something went wrong Internally",
  });
};
