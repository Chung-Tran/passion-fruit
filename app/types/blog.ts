export interface Blog {
    title: string;
    excerpt: string;
    category: string;
    author: {
        name: string;
        image: string;
    };
    date: string;
    image: string;
    slug: string;
    className?: string;
}