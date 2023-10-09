import Link from 'next/link';

export default function Header() {
  return (
    <div className=" border-b flex justify-between p-8">
      <h1>Bolso</h1>
      <nav className="flex  ">
        <Link className="px-2" href="">
          Salvos
        </Link>
        <Link className="px-2" href="">
          Descubra
        </Link>
        <Link className="px-2" href="">
          Listas
        </Link>
        <span className="px-2">User</span>
      </nav>
    </div>
  );
}
