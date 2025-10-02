import logger from '#config/logger.js';
import express from 'express';
import helmet from "helmet"; //Help secure Express apps with various HTTP headers
import morgan from 'morgan'; // help to log the req time, payload, and others
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from '#routes/auth.routes.js';
<<<<<<< HEAD
import securityMiddleware from '#middleware/security.middleware.js';
=======
>>>>>>> 94d3345eb6afec4453bd7fc000aa0f472843577c

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  morgan('combined', {
    stream: { write: message => logger.info(message.trim()) },
  })
);

app.use(securityMiddleware);

app.get('/', (req, res) => {
  logger.info('Hello from Acquisitions!');

  res.status(200).send('Hello from Acquisitions!');
});

<<<<<<< HEAD
=======
// app.get('/health', (req, res) => {
//   res.status(200).json({ status: 'OK', timestamp: new Date().toISOString, uptime: process.uptime() });
// })

>>>>>>> 94d3345eb6afec4453bd7fc000aa0f472843577c
app.get('/health', (req, res) => {
  res
    .status(200)
    .json({
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
});

app.get('/api', (req,res) => {
  res.status(200).json({ message: "Acquisitions API is running!" });
});

app.use('/api/auth', authRoutes);

export default app;
