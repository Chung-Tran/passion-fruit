'use client'
import { productsData } from "@/app/data/product"
import Image from "next/image"
import Link from "next/link"
import BusinessFields from "./businessFields"
import HeroSlider from "./hero-slider"
import WhyNotUs from "../section/whyNotUs"
import { blogData } from "@/app/data/blog"
import ProductItem from "../product/productItem"
import BlogPostCard from "../blog/BlogPostCard"
import { Blog } from "@/app/types/blog"
import { useLanguage } from "@/app/providers"
import { homeText } from "@/app/language/home"

export default function HomePage() {
    const { language } = useLanguage();
    const languageText = homeText[language as keyof typeof homeText];

    return (
        <>
            <HeroSlider />

            {/* Lĩnh vực kinh doanh */}
            <section className="container mt-10">
                <h2 className="textTitle mx-auto">{languageText.businessFields}</h2>
                <BusinessFields />
            </section>

            {/* Sản phẩm nổi bật */}
            <section className="container my-10">
                <h2 className="textTitle mx-auto">{languageText.featuredProducts}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {productsData.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
                <div className="mt-3 flex justify-end">
                    <Link
                        href="/products"
                        className="group inline-flex items-center text-green-700 font-semibold hover:text-green-900 transition-colors duration-300 mr-2"
                    >
                        {languageText.viewAll}
                        <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                            ➝
                        </span>
                    </Link>
                </div>
            </section>

            {/* Về chúng tôi */}
            <section className="bg-white mt-10 px-6 md:px-16">
                <h2 className="textTitle mx-auto">{languageText.aboutUs}</h2>

                <div className="container mx-auto flex flex-col md:flex-row items-center mt-8">
                    <div className="md:w-1/2 flex-1">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {languageText.aboutDescription}
                        </p>

                        <div className="mt-3">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {languageText.missionTitle}
                            </h3>
                            <ul className="text-lg text-gray-600 leading-relaxed space-y-1">
                                <li>{languageText.mission1}</li>
                                <li>{languageText.mission2}</li>
                                <li>{languageText.mission3}</li>
                                <li>{languageText.mission4}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[450px]">
                        <Image
                            src="/images/logo-bgwhite.jpg"
                            alt="Về chúng tôi"
                            className="rounded-2xl w-full h-auto object-contain max-h-[450px]"
                            fill
                        />
                    </div>
                </div>
            </section>

            <div className="container">
                <WhyNotUs />
            </div>

            {/* Blog */}
            <section className="w-full py-4 md:py-4 lg:py-4">
                <h2 className="textTitle mx-auto">{languageText.featuredArticles}</h2>

                <div className="container mt-8">
                    <div className="mx-auto grid gap-4 pt-12 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
                        {blogData.map((post: Blog, index: number) => {
                            if (index <= 3) {
                                return <BlogPostCard key={index} {...post} />;
                            }
                        })}
                    </div>
                    <div className="mt-3 flex justify-end">
                        <a
                            href="/blog"
                            className="group inline-flex items-center text-green-700 font-semibold hover:text-green-900 transition-colors duration-300"
                        >
                            {languageText.viewAll}
                            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                                ➝
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
