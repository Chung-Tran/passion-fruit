'use client'
import Image from "next/image";
import { useState } from "react";
import { productsData } from "../data/product";
import ProductItem from "../components/product/productItem";
import { Search, Filter, Truck, RefreshCw, Shield, Leaf } from "lucide-react";
import TopSection from "../components/section/topSection";

export default function Products() {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("Tất cả");

    const categories = ["Tất cả", "Chanh Dây", "Sầu Riêng"];

    const filteredProducts = productsData.filter((product) =>
        (category === "Tất cả" || product.name === category) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gradient-to-b from-white to-green-50 text-green-900">
            <TopSection
                title='Sản Phẩm Của Chúng Tôi'
                description='Khám phá những sản phẩm tươi ngon, chất lượng cao từ vườn trái cây của chúng tôi'

            />

            {/* Redesigned Filter & Search section */}
            <section className="container mx-auto py-10 px-4">
                <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 relative z-20 max-w-4xl mx-auto">
                    <h3 className="font-medium text-xl mb-4 text-green-800">Tìm kiếm sản phẩm</h3>
                    <div className="flex flex-col md:flex-row items-stretch gap-4">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Search size={20} className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Tìm kiếm sản phẩm..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 w-full h-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                            />
                        </div>
                        <div className="relative min-w-[180px]">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Filter size={20} className="text-gray-400" />
                            </div>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="pl-10 w-full h-12 appearance-none bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Enhanced Product List Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-green-800 mb-2">Danh sách sản phẩm</h2>
                    <div className="w-20 h-1 bg-green-600 mx-auto"></div>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-md mx-auto">
                        <Image
                            src="/empty-search.svg"
                            width={120}
                            height={120}
                            alt="Không tìm thấy"
                            className="mx-auto mb-4"
                        />
                        <p className="text-gray-600 text-lg">Không tìm thấy sản phẩm phù hợp.</p>
                        <button
                            onClick={() => { setSearchTerm(""); setCategory("Tất cả"); }}
                            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
                        >
                            Xóa bộ lọc
                        </button>
                    </div>
                )}
            </section>

            {/* Quality Guarantee & Return Policy - Card Flip Design */}
            <section className="bg-green-900 py-16 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                    <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-white"></div>
                    <div className="absolute top-1/2 -right-12 w-48 h-48 rounded-full bg-white"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-white"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-2">Chính Sách & Cam Kết</h2>
                        <div className="w-20 h-1 bg-green-400 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 - Flip Card */}
                        <div className="h-64 perspective-1000">
                            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180 cursor-pointer">
                                {/* Front */}
                                <div className="absolute inset-0 bg-white rounded-xl p-6 shadow-xl flex flex-col items-center justify-center backface-hidden">
                                    <Shield size={48} className="text-green-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-green-800">Đảm Bảo Chất Lượng</h3>
                                    <p className="text-green-700">Xem chi tiết →</p>
                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 shadow-xl text-white backface-hidden rotate-y-180">
                                    <h3 className="text-xl font-semibold mb-3 border-b border-green-400 pb-2">Cam Kết Chất Lượng</h3>
                                    <ul className="text-sm space-y-2">
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>100% trái cây tươi ngon</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Kiểm tra nghiêm ngặt dư lượng thuốc bảo vệ thực vật</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Nguồn gốc rõ ràng, có thể truy xuất</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Flip Card */}
                        <div className="h-64 perspective-1000">
                            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180 cursor-pointer">
                                {/* Front */}
                                <div className="absolute inset-0 bg-white rounded-xl p-6 shadow-xl flex flex-col items-center justify-center backface-hidden">
                                    <RefreshCw size={48} className="text-green-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-green-800">Chính Sách Đổi Trả</h3>
                                    <p className="text-green-700">Xem chi tiết →</p>
                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 shadow-xl text-white backface-hidden rotate-y-180">
                                    <h3 className="text-xl font-semibold mb-3 border-b border-green-400 pb-2">Đổi Trả Dễ Dàng</h3>
                                    <ul className="text-sm space-y-2">
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Đổi trả trong vòng 24h kể từ khi nhận hàng</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Hoàn tiền 100% nếu sản phẩm không đạt yêu cầu</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Miễn phí đổi trả tận nơi</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 - Flip Card */}
                        <div className="h-64 perspective-1000">
                            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180 cursor-pointer">
                                {/* Front */}
                                <div className="absolute inset-0 bg-white rounded-xl p-6 shadow-xl flex flex-col items-center justify-center backface-hidden">
                                    <Truck size={48} className="text-green-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-green-800">Vận Chuyển</h3>
                                    <p className="text-green-700">Xem chi tiết →</p>
                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 shadow-xl text-white backface-hidden rotate-y-180">
                                    <h3 className="text-xl font-semibold mb-3 border-b border-green-400 pb-2">Chính Sách Vận Chuyển</h3>
                                    <ul className="text-sm space-y-2">
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Giao hàng nhanh trong vòng 24h</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Miễn phí vận chuyển cho đơn hàng trên 500.000đ</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Đóng gói cẩn thận, giữ độ tươi ngon</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom CSS for flip card effects */}
            <style jsx global>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .transform-style-preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
                .hover\\:rotate-y-180:hover {
                    transform: rotateY(180deg);
                }
            `}</style>
        </div>
    );
}