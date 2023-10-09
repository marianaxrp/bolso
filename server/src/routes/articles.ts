import express, { Request, Response } from 'express';
import { ArticleModel } from '../models/ArticleModel';
import { fetchNYTArticles } from '../utils/nytApi';

const articlesRouter = express.Router();

articlesRouter.get('/', async (req: Request, res: Response) => {
  console.log('Received request for /api/articles/nyt-articles');
  try {
    const articles = await ArticleModel.find();
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

articlesRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const article = await ArticleModel.findByIdAndRemove(req.params.id);

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.json({ message: 'Article deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

articlesRouter.get('/nyt-articles', async (req: Request, res: Response) => {
  try {
    const response = await fetchNYTArticles();

    // const articles = await ArticleModel.find();
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

export default articlesRouter;
