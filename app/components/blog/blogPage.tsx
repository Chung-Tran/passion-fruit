'use client'
import { useLanguage } from "@/app/providers";
import TopSection from "../section/topSection";
import { blogText } from "@/app/language/blog";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/app/data/blog";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function BlogPage() {
    const { language } = useLanguage();
    const languageText = blogText[language as keyof typeof blogText];
    const blogFeatured = blogData.find(item => item.type === "featured");
    return (
        <div className="bg-gradient-to-b from-white to-green-50 text-green-900">
            <TopSection
                title={languageText.pageTitle}
                description={languageText.pageDescription}
            />

            {/* Featured Post */}
            <section className="w-full py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl font-bold mb-8">{languageText.featuredPost}</h2>
                    {blogFeatured && (
                        <Link href={`/blogs/${blogFeatured.slug}`} className="block">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row cursor-pointer">
                                <div className="relative w-full md:w-2/5 h-[200px] md:h-auto">
                                    <Image
                                        src={blogFeatured.image || "/images/placeholder.jpg"}
                                        alt={blogFeatured.title || "No title"}
                                        className="object-cover"
                                        fill
                                        priority
                                    />
                                </div>
                                <div className="flex-1 p-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full">
                                            {languageText.featuredLabel}
                                        </span>
                                        <span className="px-3 py-1 text-xs font-semibold bg-gray-200 text-gray-800 rounded-full">
                                            {blogFeatured.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold hover:text-blue-600">
                                        {blogFeatured.title}
                                    </h3>
                                    <p className="flex items-center gap-2 text-sm text-gray-500">
                                        <CalendarDays className="h-4 w-4" /> {blogFeatured.date}
                                    </p>
                                    <p className="mt-4 text-gray-700">{blogFeatured.excerpt}</p>
                                    <div className="mt-4 inline-flex items-center text-blue-600 hover:underline">
                                        {languageText.readMore} <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </section>

            {/* Latest Posts Grid */}
            <section className="w-full py-12 md:py-24 bg-gray-200">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl font-bold mb-8">{languageText.latestPosts}</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogData
                            .filter((item) => item.type !== "featured")
                            .map((post, index) => (
                                <Link key={index} href={`/blogs/${post.slug}`} className="block">
                                    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-full">
                                        <div className="relative w-full pt-[56.25%]">
                                            <Image src={post.image} alt={post.title} className="object-cover" fill />
                                        </div>
                                        <div className="p-6">
                                            <span className="px-3 py-1 text-xs font-semibold bg-gray-200 text-gray-800 rounded-full">
                                                {post.category}
                                            </span>
                                            <h3 className="mt-2 text-lg font-bold hover:text-blue-600">
                                                {post.title}
                                            </h3>
                                            <p className="flex items-center gap-2 text-sm text-gray-500">
                                                <CalendarDays className="h-4 w-4" /> {post.date}
                                            </p>
                                            <p className="mt-2 text-gray-700 line-clamp-3">{post.excerpt}</p>
                                            <div className="mt-4 inline-flex items-center text-blue-600 hover:underline">
                                                {languageText.readMore} <ArrowRight className="ml-2 h-4 w-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
