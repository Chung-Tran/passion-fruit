'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import dichchanh from '../../../public/images/dichchanh.jpg'
import chanhdaytrai from '../../../public/images/chanh-day-trai.jpg'
interface Field {
    title: string;
    description: string;
    image: string;
}

const BusinessFields = () => {
    const fields: Field[] = [
        {
            title: "Cung cấp trái chanh dây trái",
            description: "Cung cấp chanh dây tươi, tuyển chọn từ những vườn đạt chuẩn, đảm bảo chất lượng và độ chín tối ưu. Sản phẩm phù hợp để tiêu thụ trong nước và xuất khẩu. Hỗ trợ giao hàng số lượng lớn, đáp ứng nhu cầu kinh doanh.",
            image: "../../../public/images/chanh-day-trai.jpg"
        },
        {
            title: "Cung cấp dịch chanh dây",
            description: "Dịch chanh dây nguyên chất 100%, đã làm sạch, giữ nguyên hương vị tự nhiên. Phù hợp pha chế đồ uống, làm bánh và chế biến thực phẩm. Sản phẩm đạt tiêu chuẩn an toàn vệ sinh thực phẩm, tiện lợi cho sử dụng.",
            image: "/images/dich-chanh-day.jpg"
        },
        {
            title: "Cung cấp giống cây chanh dây",
            description: "Cung cấp giống cây chanh dây khỏe mạnh, sinh trưởng nhanh, kháng bệnh tốt. Giống được tuyển chọn kỹ lưỡng, phù hợp với nhiều vùng khí hậu. Hỗ trợ tư vấn kỹ thuật trồng trọt để đảm bảo năng suất cao.",
            image: "/images/giong-cay-chanh-day.jpg"
        },
        {
            title: "Cung cấp sầu riêng cấp đông",
            description: "Sầu riêng được cấp đông nhanh, giữ nguyên hương vị và chất dinh dưỡng. Tiện lợi, dễ bảo quản và sử dụng quanh năm mà không ảnh hưởng đến chất lượng. Phù hợp cho tiêu thụ nội địa và xuất khẩu.",
            image: "/images/sau-rieng-cap-dong.jpg"
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="py-12 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {fields.map((field, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
                        >
                            {/* Nội dung */}
                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                <motion.div className="p-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                                        {field.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {field.description}
                                    </p>
                                    <button className="relative mt-2 px-5 py-3 font-bold text-white bgmain-color border-2 border-transparent overflow-hidden transition-all duration-500 group">
                                        <span className="absolute inset-0 w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                                        <span className="relative z-10 text-white group-hover:text-[#ffd700]">Tìm hiểu thêm</span>
                                    </button>
                                </motion.div>
                            </div>

                            {/* Hình ảnh */}
                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                <motion.div whileHover={{ scale: 1.05 }} className="relative group">
                                    <div className="relative w-full h-[320px]">
                                        <Image
                                            src={chanhdaytrai}
                                            alt={field.title}
                                            fill
                                            className="object-cover rounded-xl shadow-lg"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority={index === 0}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BusinessFields;
