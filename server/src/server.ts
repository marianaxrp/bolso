import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import articlesRouter from './routes/articles';

dotenv.config();

const app = express();

// app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000', 'https://localhost:3000'] }));

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to your Express API!');
});

app.use('/api/articles', articlesRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
