'use client'
import Image from "next/image";
import { HeroSlider } from "./components/home/hero-slider";
import BusinessFields from "./components/home/businessFields";
import { productsData } from "./data/product";
import ProductItem from "./components/product/productItem";
import { motion } from 'framer-motion';
import { blogData } from "./data/blog";
import { BlogPostCard } from "./components/blog/BlogPostCard";
import { Leaf, RefreshCw, Shield, Truck } from "lucide-react";
import { Blog } from "./types/blog";
import WhyNotUs from "./components/section/whyNotUs";
export default function Home() {
  return (
    <div className="">
      <HeroSlider />

      {/* Lĩnh vực kinh doanh */}
      <section className="container mt-10">
        <h2 className="textTitle mx-auto">Lĩnh vực kinh doanh</h2>
        <BusinessFields />
      </section>

      {/* Sản phẩm nổi bật */}
      <section className="container my-10">
        <h2 className="textTitle mx-auto">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {productsData.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Về chúng tôi */}
      <section className="bg-white py-16 px-6 md:px-16">
        <h2 className="textTitle mx-auto">Về Chúng Tôi</h2>

        <div className="container mx-auto flex flex-col md:flex-row items-center mt-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Passion Fruit cam kết mang đến những sản phẩm chanh dây và sầu riêng chất lượng cao,
              đảm bảo nguồn gốc rõ ràng và quy trình sản xuất đạt tiêu chuẩn.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Chúng tôi không chỉ cung cấp trái cây tươi mà còn chia sẻ giá trị bền vững
              thông qua các phương pháp canh tác hiện đại và thân thiện với môi trường.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-10 md:mt-0 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/about-us.jpg"
              alt="Về chúng tôi"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US - Hexagon Design */}
      <WhyNotUs />

      {/* Blog */}
      <section className="w-full py-4 md:py-4 lg:py-4">
        <h2 className="textTitle mx-auto">Bài viết nổi bật</h2>

        <div className="container mt-8">
          <div className="mx-auto grid gap-8 pt-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
            {blogData.map((post: Blog, index: number) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href="/blog"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              View all articles
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
