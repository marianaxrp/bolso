'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Card, { Media } from '../components/Card';

interface Article {
  id: number;
  title: string;
  content: string;
  media: Media[];
}

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get<{ results: Article[] }>('http://localhost:3001/api/articles/nyt-articles/')
      .then((response) => {
        setArticles(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching articles', error);
      });
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="flex">
        <ul className="flex justify-between flex-wrap">
          {articles &&
            articles.map((article) => {
              return (
                <li className="bg-zinc-900 shadow " key={article.id}>
                  <Card media={article.media} title={article.title} content={article.content} />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
