import Articles from './articles/page';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="bg-black">
      <Header />

      <Articles />
    </div>
  );
}
