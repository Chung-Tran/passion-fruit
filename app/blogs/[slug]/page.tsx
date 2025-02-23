'use client'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import TopSection from '../../components/section/topSection';
import { CalendarDays, User } from 'lucide-react';

import { Blog } from '@/app/types/blog';
import { blogData } from '@/app/data/blog';

export default function BlogDetail() {
    const { slug } = useParams(); // ✅ Sử dụng useParams để lấy slug
    const [post, setPost] = useState<Blog | null>(null);

    useEffect(() => {
        if (slug) {
            const blog = blogData.find((item: Blog) => item.slug === slug);
            setPost(blog || null);
        }
    }, [slug]);

    if (!post) {
        return <p className="text-center py-10">Bài viết không tồn tại.</p>;
    }

    return (
        <article className="min-h-screen bg-gray-50">
            <TopSection title={post.title} description={post.excerpt} />

            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative aspect-[16/9] w-full">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-8">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <User size={17} />
                                <div className="font-medium text-gray-900">{post.author}</div>
                            </div>

                            <div className="flex items-center gap-4 ml-auto text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4" />
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString('vi-VN', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </time>
                                </div>
                                <span>•</span>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            {post.desc}
                        </div>


                        <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Về tác giả</h3>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
