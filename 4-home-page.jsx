import Link from 'next/link';
import Counter from './components/Counter';

export default function HomePage() {
  return (
    <main>
      <h1>Next.js Warm-up</h1>
      <p>Build a small app, one piece at a time.</p>
      <nav>
        <Link href="/about">About</Link>
      </nav>
      <Counter />
    </main>
  );
}