import { Express, Request, Response } from 'express';
import summarizationRoutes from './summarizationRoutes';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export default function RootRouter(app: Express) {
  app.get('/', (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).json({ status: StatusCodes.OK, message: ReasonPhrases.OK });
  });

  app.use('/summarization', summarizationRoutes);
}
