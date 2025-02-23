import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, User } from "lucide-react";
import { Blog } from "@/app/types/blog";

// Badge component thay thế
const Badge = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium">
        {children}
    </span>
);

export function BlogPostCard({ title, excerpt, category, author, date, image, slug, className }: Blog) {
    return (
        <article className={`group rounded-lg border border-gray-200 shadow-sm  relative flex flex-col space-y-4 ${className || ""}`}>
            <Link href={`/blogs/${slug}`} className="overflow-hidden rounded-lg block">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={600}
                    height={400}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </Link>
            <div className="flex-1 space-y-3 p-2">
                <div className="flex items-center gap-3 justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <CalendarIcon className="h-4 w-4" />
                        <time dateTime={date}>{date}</time>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-800">
                        <User className="h-4 w-4" />
                        <span className="text-sm font-medium">{author}</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-bold leading-tight line-clamp-2">
                        <Link href={`/blogs/${slug}`} className="hover:underline">
                            {title}
                        </Link>
                    </h3>
                    <p className="text-gray-500 line-clamp-2">{excerpt}</p>
                </div>
            </div>
        </article>
    );
}
