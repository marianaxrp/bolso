import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import articlesRouter from './routes/articles';

dotenv.config();

const app = express();

// app.use(express.json());
app.use(cors({ origin: ['http://localhost:8080', 'https://localhost:8080'] }));

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to your Express API!');
});

app.use('/api/articles', articlesRouter);

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

mongoose
  .connect('mongodb://localhost:27017/articleApp', {})
  .then(() => console.log('connected to mongo'))
  .catch((error) => console.error('Failed to connect to MongoDB', error));
