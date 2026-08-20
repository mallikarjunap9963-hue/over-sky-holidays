import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'An unexpected error occurred. Please try again later.';
  const code = err.code || 'INTERNAL_SERVER_ERROR';

  // Do not expose internal stack traces or secrets to frontend
  res.status(status).json({
    success: false,
    message,
    code,
    ...(err.errors ? { errors: err.errors } : {}),
  });
}
