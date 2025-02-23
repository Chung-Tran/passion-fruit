'use client'
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Clock, Package, Thermometer, Palette, Apple, ChevronRight } from 'lucide-react';
import { Product } from "@/app/types/product";
import ProductItem from "./productItem";
import { productsData } from "@/app/data/product";
import WhyNotUs from "../section/whyNotUs";
import { BlogPostCard } from "../blog/BlogPostCard";
import { blogData } from "@/app/data/blog";
import { Blog } from "@/app/types/blog";

interface ProductDetailProps {
    product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedTab, setSelectedTab] = useState<'description' | 'process'>('description');

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
        setSelectedIndex(index);
    }, [emblaApi]);

    return (
        <div className="container my-10">
            {/* Product info */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6">
                <div className="grid grid-cols-1 lg:grid-cols-6 min-h-[600px] gap-8">
                    {/* Left Column - Images */}
                    <div className="lg:col-span-3 bg-gray-50 md:p-6 rounded-xl">
                        <div ref={emblaRef} className="overflow-hidden rounded-lg">
                            <div className="flex">
                                {product.image?.map((img, idx) => (
                                    <div key={idx} className="relative flex-[0_0_100%] min-w-0">
                                        <Image
                                            src={img || '/images/placeholder.jpg'}
                                            alt={product.name}
                                            width={600}
                                            height={600}
                                            className="w-full h-[400px] object-cover rounded-lg shadow-md"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                            {product.image?.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => scrollTo(idx)}
                                    className={`flex-shrink-0 relative w-16 h-16 rounded-lg overflow-hidden transition ring-2 
                                        ${selectedIndex === idx ? 'ring-green-500' : 'ring-gray-200'}`}
                                >
                                    <Image
                                        src={img || '/images/placeholder.jpg'}
                                        alt={`Thumbnail ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Product Info */}
                    <div className="lg:col-span-3 md:p-8 flex flex-col">
                        <span className="inline-block bg-green-100 text-green-700 text-sm rounded-full mb-4 w-fit px-6 py-1">
                            Mã SP: {product.code}
                        </span>
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">{product.name}</h1>

                        {/* Product Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[{
                                icon: Package, label: "Đơn vị tính", value: product.unit
                            }, {
                                icon: Apple, label: "Loại", value: product.type
                            }, {
                                icon: Thermometer, label: "Nhiệt độ bảo quản", value: product.storageTemp
                            }, {
                                icon: Clock, label: "Hạn sử dụng", value: product.expiry
                            }, {
                                icon: Package, label: "Xuất xứ", value: product.origin
                            }, {
                                icon: Palette, label: "Màu sắc", value: product.color
                            }].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-3 text-gray-700">
                                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center shadow">
                                        <item.icon className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{item.label}</p>
                                        <p className="font-medium">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact Button */}
                        <button className="mt-8 w-full bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition-all flex items-center justify-center space-x-2 shadow-md">
                            <a href={`tel:0347238240`} className="font-medium">Liên hệ đặt hàng</a>
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="border-t mt-6">
                    <div className="container p-6">
                        <div className="flex space-x-8 border-b">
                            {[{
                                key: 'description', label: 'Mô tả sản phẩm'
                            }, {
                                key: 'process', label: 'Quy trình sản xuất'
                            }].map(tab => (
                                <button
                                    key={tab.key}
                                    onClick={() => setSelectedTab(tab.key as any)}
                                    className={`pb-4 relative transition-all ${selectedTab === tab.key
                                        ? 'text-green-600 font-medium'
                                        : 'text-gray-500'}`}
                                >
                                    {tab.label}
                                    {selectedTab === tab.key && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600" />
                                    )}
                                </button>
                            ))}
                        </div>
                        <div className="py-6 prose max-w-none text-gray-700">
                            {selectedTab === 'description' ? (
                                <p>{product.description}</p>
                            ) : (
                                <ul className="space-y-2">
                                    {product.processing.map((step, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <span className="flex-shrink-0 w-6 h-6 bg-green-50 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                                                {idx + 1}
                                            </span>
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Related products section */}
            <section className="mx-auto py-8">
                <div className="text-center mb-12">
                    <h2 className="textTitle mx-auto">Sản phẩm liên quan</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {productsData.map((product: Product, index: number) => (
                        <ProductItem key={index} product={product} />
                    ))}
                </div>
            </section>

            <WhyNotUs />

            {/* Blog section */}
            <section className="w-full py-4 md:py-4 lg:py-4">
                <h2 className="textTitle mx-auto">Bài viết nổi bật</h2>
                <div className="container mt-8">
                    <div className="mx-auto grid gap-8 pt-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
                        {blogData.slice(0, 4).map((post: Blog, index: number) => (
                            <BlogPostCard key={index} {...post} />
                        ))}
                    </div>
                    <div className="mt-3 flex justify-end">
                        <a
                            href="/blog"
                            className="group inline-flex items-center text-green-700 font-semibold hover:text-green-900 transition-colors duration-300"
                        >
                            Xem tất cả
                            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                                ➝
                            </span>
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ProductDetail;