import { useState } from 'react';

export interface MediaMetadata {
  url: string;
}

export interface Media {
  'media-metadata': MediaMetadata[];
}

interface CardProps {
  title: string;
  content?: string;
  media?: Media[];
}

export default function Card({ title, content, media }: CardProps) {
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleSave = () => {
    setSaved(!saved);
  };

  // const mediaMetadata = media.length > 0 ? media[0]['media-metadata'] : [];
  return (
    <div className="bg-darkGray rounded  ">
      {/* {mediaMetadata.length > 0 && <img src={mediaMetadata[0].url} alt={title} />} */}
      <img src="" className="h-32 bg-slate-500" />
      <span>{title}</span>
      {/* <p>{content}</p> */}
      <div>
        <div className="mt-4">
          <button className="text-indigo-500 hover:text-indigo-400" onClick={handleSave}>
            {saved ? 'Unsave' : 'Save'}
          </button>
          <button
            className="text-green-500 hover:text-green-400 ml-4"
            onClick={() => setLikes(likes + 1)}
          >
            Like {likes}
          </button>
          <button
            className="text-red-500 hover:text-red-400 ml-4"
            onClick={() => setDislikes(dislikes + 1)}
          >
            Dislike {dislikes}
          </button>
        </div>
      </div>
    </div>
  );
}
