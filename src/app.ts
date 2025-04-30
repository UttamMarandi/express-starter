import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import { userRoutes } from '@routes/user';
import { loggerMiddleware } from '@middlewares/logs/logs';
import { shouldCompress } from '@utils/compression/should-compress';

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

// Built in
app.use(cors()); // to implement cors
app.use(helmet()); // safe for building apis and if your backend app is not serving
app.use(morgan('dev')); // small 'dev' format logger

app.use(
  compression({
    filter: shouldCompress,
    threshold: 1024, // Optional: Only compress if response > 1kb
  }),
);

app.use('/api/users', userRoutes);

export default app;
