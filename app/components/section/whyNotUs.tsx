'use client'
import React from 'react'
import { Award } from "lucide-react";
import { FaLeaf, FaSyncAlt, FaShieldAlt } from 'react-icons/fa';
const WhyNotUs = () => {
    return (
        <section className="container mx-auto px-4 py-16 overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="textTitle mx-auto">Tại Sao Chọn Chúng Tôi</h2>
            </div>

            <div className="relative">
                {/* Background honeycomb pattern */}
                <div className="absolute inset-0 opacity-5 z-0">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="honeycomb" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                            <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66Z" fill="currentColor" />
                            <path d="M28 0L56 16L56 50L28 66L0 50L0 16L28 0Z M28 8.4L8.4 19.6L8.4 46.4L28 57.6L47.6 46.4L47.6 19.6L28 8.4Z" fillRule="evenodd" fill="currentColor" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb)" />
                    </svg>
                </div>

                {/* Hexagon feature grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {/* Feature 1 */}
                    <div className="group">
                        <div className="bg-white relative overflow-hidden rounded-xl transition-all duration-300 shadow-md group-hover:shadow-xl flex flex-col items-center p-6 h-full">
                            {/* Hexagon shape behind icon */}
                            <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-green-50 -mr-6 -mt-6 transition-all duration-300 group-hover:bg-green-100"></div>

                            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 text-white rounded-xl mb-4 relative z-10 transform transition duration-300 group-hover:scale-110">
                                <FaLeaf size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-green-800">Trái Cây Hữu Cơ</h3>
                            <p className="text-gray-600 text-center">Tất cả sản phẩm đều được trồng tự nhiên, không hóa chất và thuốc trừ sâu độc hại.</p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="group">
                        <div className="bg-white relative overflow-hidden rounded-xl transition-all duration-300 shadow-md group-hover:shadow-xl flex flex-col items-center p-6 h-full">
                            <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-green-50 -mr-6 -mt-6 transition-all duration-300 group-hover:bg-green-100"></div>

                            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 text-white rounded-xl mb-4 relative z-10 transform transition duration-300 group-hover:scale-110">
                                <Award size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-green-800">Đảm bảo chất lượng</h3>
                            <p className="text-gray-600 text-center">Sản phẩm được kiểm tra nghiêm ngặt, đảm bảo chất lượng cao nhất trước khi đến tay khách hàng.</p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="group">
                        <div className="bg-white relative overflow-hidden rounded-xl transition-all duration-300 shadow-md group-hover:shadow-xl flex flex-col items-center p-6 h-full">
                            <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-green-50 -mr-6 -mt-6 transition-all duration-300 group-hover:bg-green-100"></div>

                            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 text-white rounded-xl mb-4 relative z-10 transform transition duration-300 group-hover:scale-110">
                                <FaSyncAlt size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-green-800">Đảm Bảo Quy Trình</h3>
                            <p className="text-gray-600 text-center">Sản phẩm được kiểm tra kỹ lưỡng, đảm bảo đáp ứng tiêu chuẩn chất lượng cao nhất.</p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="group">
                        <div className="bg-white relative overflow-hidden rounded-xl transition-all duration-300 shadow-md group-hover:shadow-xl flex flex-col items-center p-6 h-full">
                            <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-green-50 -mr-6 -mt-6 transition-all duration-300 group-hover:bg-green-100"></div>

                            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 text-white rounded-xl mb-4 relative z-10 transform transition duration-300 group-hover:scale-110">
                                <FaShieldAlt size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-green-800">Minh Bạch & Uy Tín</h3>
                            <p className="text-gray-600 text-center">Chúng tôi luôn đặt chữ tín lên hàng đầu, làm việc minh bạch, đúng hẹn và tận tâm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyNotUs
