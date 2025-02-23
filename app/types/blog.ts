import { ReactNode } from "react";

export interface Blog {
    title: string;
    excerpt: string;
    category: string;
    type?: string;
    author: string;
    date: string;
    image: string;
    slug: string;
    className?: string;
    content?: string;
    desc?: ReactNode
}