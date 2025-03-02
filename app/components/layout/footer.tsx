'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react"
import { layoutText } from "@/app/language/layout";
import { useLanguage } from "@/app/providers";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { language } = useLanguage();
    const languageText = layoutText[language as keyof typeof layoutText];
    return (
        // <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        //         {/* Main Footer Content */}
        //         <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between">
        //             {/* Company Info */}
        //             <div className="flex-1 text-center lg:text-left max-w-sm mx-auto lg:mx-0">
        //                 <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
        //                     <Image
        //                         src="/images/logo.png"
        //                         width={120}
        //                         height={120}
        //                         alt="Logo"
        //                         className="mx-auto lg:mx-0"
        //                     />
        //                 </div>
        //                 <h2 className="text-xl font-bold text-pink-400 mb-4">
        //                     CÔNG TY TNHH CHANH DÂY QUỐC CHUNG
        //                 </h2>
        //                 <div className="space-y-2 text-gray-300">
        //                     <p className="hover:text-pink-400 transition-colors">MST: 6001775561</p>
        //                     <p className="hover:text-pink-400 transition-colors">
        //                         Địa chỉ: Trung Hồ, Ea Hồ, Krông Năng, Đắk Lắk, Việt Nam
        //                     </p>
        //                 </div>
        //             </div>

        //             {/* Newsletter Signup */}
        //             <div className="flex-1 text-center max-w-md mx-auto">
        //                 <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:translate-y-1 transition-transform duration-300">
        //                     <h3 className="text-lg font-bold text-pink-400 mb-4">
        //                         DENTAL MARKETING INSIGHTS
        //                     </h3>
        //                     <div className="flex flex-col sm:flex-row gap-4">
        //                         <input
        //                             type="email"
        //                             placeholder="YOUR E-MAIL"
        //                             className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none"
        //                         />
        //                         <button className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-md transform hover:scale-105 transition-all duration-300">
        //                             SUBSCRIBE
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>

        //             {/* Social Media & Contact */}
        //             <div className="flex-1 text-center lg:text-right max-w-sm mx-auto lg:mx-0">
        //                 <div className="space-y-6">
        //                     <div>
        //                         <h3 className="text-lg font-bold text-pink-400 mb-4">FOLLOW US</h3>
        //                         <div className="flex justify-center lg:justify-end space-x-4">
        //                             {[
        //                                 { Icon: FaInstagram, href: "#" },
        //                                 { Icon: FaTwitter, href: "#" },
        //                                 { Icon: FaFacebookF, href: "#" },
        //                             ].map((social, index) => (
        //                                 <a
        //                                     key={index}
        //                                     href={social.href}
        //                                     className="p-3 bg-gray-700 rounded-full hover:bg-pink-500 transform hover:scale-110 transition-all duration-300"
        //                                 >
        //                                     <social.Icon className="text-white text-xl" />
        //                                 </a>
        //                             ))}
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <h3 className="text-lg font-bold text-pink-400 mb-4">CALL US</h3>
        //                         <div className="space-y-2">
        //                             <p className="text-xl font-bold hover:text-pink-400 transition-colors">
        //                                 (+84) 347 238 240
        //                             </p>
        //                             <p className="text-xl font-bold hover:text-pink-400 transition-colors">
        //                                 (+84) 914 616 956
        //                             </p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Bottom Footer */}
        //         <div className="mt-12 pt-8 border-t border-gray-700">
        //             <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        //                 <p className="text-gray-400 hover:text-pink-400 transition-colors">
        //                     © {new Date().getFullYear()} Chanh dây Quốc Chung. All Rights Reserved
        //                 </p>
        //                 <div className="flex flex-wrap justify-center gap-4">
        //                     <Link
        //                         href="#"
        //                         className="text-gray-400 hover:text-pink-400 transition-colors"
        //                     >
        //                         PRIVACY POLICY
        //                     </Link>
        //                     <Link
        //                         href="#"
        //                         className="text-gray-400 hover:text-pink-400 transition-colors"
        //                     >
        //                         TERMS AND CONDITIONS
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Logo và thông tin công ty */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                            <div className="relative w-16 h-16 mb-2 md:mb-0">
                                <Image
                                    src="/images/logo.png"
                                    alt="Logo Công ty TNHH Chanh Dây Quốc Chung"
                                    fill
                                    className="object-contain drop-shadow-md"
                                />
                            </div>
                            <h2 className="text-xl font-bold text-center md:text-left tracking-wide">
                                CÔNG TY TNHH<br className="hidden md:block" /> CHANH DÂY QUỐC CHUNG
                            </h2>
                        </div>
                        <p className="text-base text-center md:text-left text-gray-300 leading-relaxed max-w-md">
                            Cung cấp sản phẩm chanh dây, sầu riêng các loại với chất lượng cao nhất.
                            Đảm bảo vệ sinh an toàn thực phẩm và giá trị dinh dưỡng tới người tiêu dùng.
                        </p>
                    </div>

                    {/* Liên kết nhanh */}
                    <div className="mt-6 md:mt-0">
                        <h3 className="text-lg font-semibold mb-5 text-center md:text-left border-b border-gray-700 pb-2">
                            {languageText.quickLinks}
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            <Link href="/" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                                {languageText.home}
                            </Link>
                            <Link href="/about" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                                {languageText.about}
                            </Link>
                            <Link href="/products" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                                {languageText.products}
                            </Link>
                            <Link href="/contact" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                                {languageText.contact}
                            </Link>
                            <Link href="/blog" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                                {languageText.blog}
                            </Link>
                            <Link href="/careers" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                                {languageText.careers}
                            </Link>
                        </div>
                    </div>

                    {/* Thông tin liên hệ */}
                    <div className="mt-6 md:mt-0">
                        <h3 className="text-lg font-semibold mb-5 text-center md:text-left border-b border-gray-700 pb-2">
                            {languageText.contactUs}
                        </h3>
                        <div className="space-y-4">
                            <div className="flex flex-col items-center md:items-start gap-1">
                                <div className="flex items-center gap-2 text-green-400">
                                    <Phone className="h-4 w-4" />
                                    <span className="font-medium">{languageText.phoneNumber}:</span>
                                </div>
                                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                    <a href="tel:0347238240" className="text-gray-300 hover:text-white transition-colors">
                                        +84 347 238 240
                                    </a>
                                    <span className="text-gray-500">|</span>
                                    <a href="tel:0914616956" className="text-gray-300 hover:text-white transition-colors">
                                        +84 914 616 956
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center md:items-start gap-1">
                                <div className="flex items-center gap-2 text-green-400">
                                    <MapPin className="h-4 w-4" />
                                    <span className="font-medium">{languageText.address}:</span>
                                </div>
                                <address className="text-gray-300 not-italic text-center md:text-left">
                                    Ea Hồ, Krông Năng, Đắk Lắk, Việt Nam
                                </address>
                            </div>

                            {/* Mạng xã hội */}
                            {/* <div className="flex justify-center md:justify-start gap-5 mt-4 pt-2 border-t border-gray-700">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Zalo">
                                    <div className="relative w-5 h-5 flex items-center justify-center rounded-full bg-gray-400 text-gray-900 font-bold text-xs">Z</div>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                                    <Youtube className="h-5 w-5" />
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Bản quyền */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center">
                    <p className="text-sm text-gray-400">
                        © {currentYear} Chanh dây Quốc Chung. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;