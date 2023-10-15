'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card, { Media } from '../components/Card';

interface Article {
  id: number;
  webTitle: string;
  content?: string;
  media?: Media[];
  tags?: string[]; // Assuming each article has a tags property which is an array of strings
}

export default function Articles(selectedTag: any) {
  const [articles, setArticles] = useState<Article[]>([]);
  // const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  // const [selectedTag, setSelectedTag] = useState<string | null>(null);
  // const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8081/api/articles/nyt-articles/')
      .then((response) => {
        const fetchedArticles = response.data.response.results;
        setArticles(fetchedArticles);

        // Assuming tags are not duplicated and each article has a tags property
        // const allTags = fetchedArticles.flatMap((article: Article) => article.tags || []);
        // setTags(Array.from(new Set(allTags)));
      })
      .catch((error) => {
        console.error('Error fetching articles', error);
      });
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="container mx-auto p-4 flex">
        <ul className="ml-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles &&
            articles.map((article) => (
              <li key={article.id} className="bg-zinc-900 shadow">
                <Card title={article.webTitle} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
