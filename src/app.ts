import express from 'express';
import { userRoutes } from '@routes/user';
import { loggerMiddleware } from '@middlewares/logs/logs';

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.use('/api/users', userRoutes);

export default app;
