'use client';
import { FC, useState } from 'react';
import Articles from './articles/page';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const Page: FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className="w-full bg-black">
      <Header />
      <div className="container mx-auto p-4 flex">
        <Sidebar selectedTag={selectedTag} onSelectTag={setSelectedTag} onUpdateTags={setTags} />
        <Articles selectedTag={selectedTag} />
      </div>
    </div>
  );
};

export default Page;
