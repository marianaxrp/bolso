import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const apiKey = process.env.NYT_API_KEY;

export async function fetchNYTArticles(): Promise<AxiosResponse> {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${apiKey}`,
    );

    console.log('res', response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
