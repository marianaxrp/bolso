'use client';
import { FC, useEffect, useState } from 'react';

type SidebarProps = {
  // tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
  onUpdateTags: (tags: string[]) => void;
};

const Sidebar: FC<SidebarProps> = ({ onUpdateTags, selectedTag, onSelectTag }) => {
  const [tags, setTags] = useState<string[]>([]);

  const fetchTags = async () => {
    const fetchedTags = ['Politics', 'Technology', 'Health', 'Science', 'Sports'];
    onUpdateTags(fetchedTags); // Update tags in the parent component
  };

  useEffect(() => {
    fetchTags();
  }, []);

  // console.log('tag', tags);
  return (
    <div className="w-64 bg-gray-800 text-white p-4 shadow-md">
      <nav className="mb-4">
        <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
          Home
        </a>
        <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
          Explore
        </a>
        <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
          Lists
        </a>
      </nav>
      <div className="border-t border-gray-700 pt-4">
        <h2 className="text-lg font-semibold mb-2">Tags</h2>
        <div className="space-y-2">
          {tags &&
            tags.map((tag: string) => (
              <button
                key={tag}
                className={`block w-full text-left py-2 px-4 rounded ${
                  selectedTag === tag ? 'bg-indigo-500' : 'hover:bg-gray-700'
                }`}
                onClick={() => onSelectTag(tag)}
              >
                {tag}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
