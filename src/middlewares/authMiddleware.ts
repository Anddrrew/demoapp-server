import {
  InsufficientScopeError,
  InvalidTokenError,
  UnauthorizedError,
  auth,
} from 'express-oauth2-jwt-bearer';
import { auth0 } from '../config';
import { NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const authMiddleware = auth({
  audience: auth0.audience,
  issuerBaseURL: auth0.issuerBaseURL,
});

export function authErrorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
  if (err instanceof InvalidTokenError) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ status: StatusCodes.BAD_REQUEST, message: ReasonPhrases.BAD_REQUEST });
  }

  if (err instanceof UnauthorizedError) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ status: StatusCodes.UNAUTHORIZED, message: ReasonPhrases.UNAUTHORIZED });
  }

  if (err instanceof InsufficientScopeError) {
    return res
      .status(StatusCodes.FORBIDDEN)
      .json({ status: StatusCodes.FORBIDDEN, message: ReasonPhrases.FORBIDDEN });
  }

  next(err);
}

export default authMiddleware;
