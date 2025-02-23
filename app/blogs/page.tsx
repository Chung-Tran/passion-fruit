'use client'
import Image from "next/image";
import { useState } from "react";
import TopSection from "../components/section/topSection";
import { CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { blogData } from "../data/blog";
import { Blog } from "../types/blog";

export default function Blogs() {
  const router = useRouter();
  const blogFeatured = blogData.find(item => item.type === "featured");

  return (
    <div className="bg-gradient-to-b from-white to-green-50 text-green-900">
      <TopSection
        title='Danh sách bài viết'
        description=' Discover stories, thinking, and expertise from writers on any topic.'
      />

      {/* Featured Post */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row cursor-pointer"
            onClick={() => blogFeatured && router.push(`/blogs/${blogFeatured.slug}`)}
          >
            <div className="relative w-full md:w-2/5 h-[200px] md:h-auto">
              <Image
                src={blogFeatured?.image || "/images/placeholder.jpg"}
                alt={blogFeatured?.title || "No title"}
                className="object-cover"
                fill
                priority
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full">Featured</span>
                <span className="px-3 py-1 text-xs font-semibold bg-gray-200 text-gray-800 rounded-full">{blogFeatured?.category}</span>
              </div>
              <h3
                className="text-2xl font-bold hover:text-blue-600 cursor-pointer"
                onClick={() => blogFeatured && router.push(`/blogs/${blogFeatured.slug}`)}
              >
                {blogFeatured?.title}
              </h3>
              <p className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarDays className="h-4 w-4" /> {blogFeatured?.date}
              </p>
              <p className="mt-4 text-gray-700">{blogFeatured?.excerpt}</p>
              <div className="mt-4">
                <Link href={`/blogs/${blogFeatured?.slug}`} className="inline-flex items-center text-blue-600 hover:underline">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Grid */}
      <section className="w-full py-12 md:py-24 bg-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Latest Posts</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogData.filter(item => item.type !== "featured").map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => router.push(`/blogs/${post.slug}`)}
              >
                <div className="relative w-full pt-[56.25%]">
                  <Image src={post.image} alt={post.title} className="object-cover" fill />
                </div>
                <div className="p-6">
                  <span className="px-3 py-1 text-xs font-semibold bg-gray-200 text-gray-800 rounded-full">{post.category}</span>
                  <h3
                    className="mt-2 text-lg font-bold hover:text-blue-600 cursor-pointer"
                    onClick={(e) => { e.stopPropagation(); router.push(`/blogs/${post.slug}`); }}
                  >
                    {post.title}
                  </h3>
                  <p className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarDays className="h-4 w-4" /> {post.date}
                  </p>
                  <p className="mt-2 text-gray-700 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4">
                    <Link href={`/blogs/${post.slug}`} className="inline-flex items-center text-blue-600 hover:underline">
                      Đọc thêm <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
