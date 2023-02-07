import express, { Express, Request, Response } from 'express';
import { port } from './config';
import OpenAIService from './services/OpenAIService';

const app: Express = express();

app.get('/', async (req: Request, res: Response) => {
  res.json(await OpenAIService.getModels());
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
