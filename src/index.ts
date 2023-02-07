import express, { Express, Request, Response } from 'express';
import authMiddleware, { authErrorHandler } from './middlewares/authMiddleware';
import errorHandler from './middlewares/errorHandler';
import OpenAIService from './services/OpenAIService';
import { port } from './config';

const app: Express = express();
app.use(authMiddleware);

app.get('/', async (req: Request, res: Response) => {
  res.json(await OpenAIService.getModels());
});

app.use(authErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`[INFO]: Server is running at http://localhost:${port}`);
});
