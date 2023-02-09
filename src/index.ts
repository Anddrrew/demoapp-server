import express from 'express';
import authMiddleware, { authErrorHandler } from './middlewares/authMiddleware';
import errorHandler from './middlewares/errorHandler';
import { port } from './config';
import RootRouter from './routes';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(authMiddleware);

RootRouter(app);

app.use(authErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`[INFO]: Server is running at http://localhost:${port}`);
});
