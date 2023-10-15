import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';
import Article from '../models/article.model';

dotenv.config();
const apiKey = process.env.NYT_API_KEY;

export async function fetchNYTArticles(): Promise<AxiosResponse> {
  try {
    const response = await axios.get(
      `https://content.guardianapis.com/search?q=12%20years%20a%20slave&api-key=${apiKey}`,
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function saveArticles(response: any) {
  for (const articleData of response) {
    try {
      const filter = { id: articleData.id };
      const update = articleData;
      const options = { upsert: true, new: true };

      const article = new Article({
        title: articleData.title,
        author: articleData.author,
        content: articleData.content,
        tags: articleData.tags,
        source: 'The Guardian',
      });

      await Article.findOneAndUpdate(filter, update, options);
      await article.save();
    } catch (error: any) {
      if (error.code === 11000) {
        console.error('Duplicate article detected: ' + articleData.id);
      } else {
        console.error('Error saving article ', error);
      }
    }
  }
}
