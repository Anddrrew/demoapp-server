import { NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export default function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: ReasonPhrases.INTERNAL_SERVER_ERROR,
  });
}
