import type { Metadata } from 'next'
import BlogPage from "../components/blog/blogPage";

export const metadata: Metadata = {
  title: 'Danh sách bài viết',
  description: 'Blog in news',
}

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-white to-green-50 text-green-900">
      <BlogPage />
    </div>
  );
}
