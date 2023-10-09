export interface MediaMetadata {
  url: string;
}

export interface Media {
  'media-metadata': MediaMetadata[];
}

interface CardProps {
  title: string;
  content: string;
  media: Media[];
}

export default function Card({ title, content, media }: CardProps) {
  const mediaMetadata = media.length > 0 ? media[0]['media-metadata'] : [];
  return (
    <div className="bg-darkGray rounded max-w-min ">
      {mediaMetadata.length > 0 && <img src={mediaMetadata[0].url} alt={title} />}
      <span>{title}</span>
      <p>{content}</p>
      <div>
        <div>
          <span>Like</span>
          <span>Dislike</span>
        </div>
        <span>Salvar</span>
      </div>
    </div>
  );
}
