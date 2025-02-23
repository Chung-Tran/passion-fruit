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
    <div className="max-w-[100vw] overflow-hidden">
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
        <div className="mt-3 flex justify-end">
          <a
            href="/products"
            className="group inline-flex items-center text-green-700 font-semibold hover:text-green-900 transition-colors duration-300 mr-2"
          >
            Xem tất cả
            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
              ➝
            </span>
          </a>
        </div>
      </section>

      {/* Về chúng tôi */}
      <section className="bg-white mt-10 px-6 md:px-16">
        <h2 className="textTitle mx-auto ">Về Chúng Tôi</h2>

        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              <span className="font-semibold">Chanh dây Quốc Chung</span> là đơn vị cung cấp chanh dây và sầu riêng chất lượng cao,
              đáp ứng tiêu chuẩn an toàn thực phẩm và yêu cầu khắt khe của thị trường trong và ngoài nước.
              Chúng tôi cam kết mang đến sản phẩm tươi ngon, nguồn gốc rõ ràng với quy trình sản xuất hiện đại,
              đảm bảo giá trị dinh dưỡng và hương vị tự nhiên.
            </p>

            <div className="mt-3">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sứ Mệnh</h3>
              <ul className="text-lg text-gray-600 leading-relaxed space-y-1">
                <li>
                  <span className="font-semibold">Sản phẩm chất lượng:</span> Chọn giống tốt, canh tác tiên tiến, đảm bảo sạch và an toàn.
                </li>
                <li>
                  <span className="font-semibold">Nông nghiệp bền vững:</span> Hợp tác nhà vườn, hỗ trợ kỹ thuật, nâng cao đời sống nông dân.
                </li>
                <li>
                  <span className="font-semibold">Thị trường quốc tế:</span> Xuất khẩu đạt chuẩn Mỹ, Châu Âu, Nhật Bản, Hàn Quốc.
                </li>
                <li>
                  <span className="font-semibold">Đồng hành khách hàng:</span> Phân phối chuyên nghiệp, phục vụ nhanh, giá cạnh tranh.
                </li>
              </ul>
            </div>

          </motion.div>

          <motion.div
            className="md:w-auto md:pl-12 max-h-[400px] order-first  md:order-last"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/logo-bgwhite.jpg"
              alt="Về chúng tôi"
              className="rounded-2xl w-full h-auto object-contain max-h-[450px]"
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
          <div className="mx-auto grid gap-4 pt-12 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {blogData.map((post: Blog, index: number) => {
              if (index <= 3) {
                return <BlogPostCard key={index} {...post} />

              }
            })}
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
}
