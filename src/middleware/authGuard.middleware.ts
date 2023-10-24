import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { LoggerService } from '../services';

export default new class AuthGuardMiddleware {
  public async ensure(req: Request, res: Response, next: NextFunction) {
    const logger = new LoggerService();
    const authToken = req?.headers?.authorization;

    if(!authToken) {
      return res.status(401).json({message: 'Token Missing'});
    }
    const [, token] = authToken.split(' ');

    try {
      const payload = verify(token, `${process.env.HASH_TOKEN}`);
      logger.info(`AuthGuardMiddleware :: ensure :: valid token ${token} and payload ${payload}`);

      return next();
    } catch(err) {
      logger.error(`AuthGuardMiddleware :: ensure :: error payload ${err}`);
      return res.status(400).json({message: 'Error'});

    }
  }
}