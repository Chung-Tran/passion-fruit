import Image from 'next/image';
import TopSection from '../../components/section/topSection';
import { CalendarDays, User } from 'lucide-react';
import { Blog } from '@/app/types/blog';
import { blogData } from '@/app/data/blog';
import type { Metadata } from 'next'

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const { slug } = await params

    // fetch data
    const blog = blogData.find((item => item.slug == slug));
    if (!blog) {
        return {
            title: "Bài viết không tồn tại",
        }
    }

    return {
        title: blog?.title,
        // openGraph: {
        //     images: ['/some-specific-page-image.jpg', ...previousImages],
        // },
    }
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const post: Blog | undefined = blogData.find((p) => p.slug === slug);
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
                    </div>
                </div>
            </div>
        </article>
    );
}
