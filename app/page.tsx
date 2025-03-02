import type { Metadata } from 'next'
import HomePage from './components/home/homePage';

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Trang chủ',
}

export default function Home() {
  return (
    <div className="max-w-[100vw] overflow-hidden">
     <HomePage />
    </div>
  );
}
