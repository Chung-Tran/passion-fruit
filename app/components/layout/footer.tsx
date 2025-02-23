import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between">
                    {/* Company Info */}
                    <div className="flex-1 text-center lg:text-left max-w-sm mx-auto lg:mx-0">
                        <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/images/logo.png"
                                width={120}
                                height={120}
                                alt="Logo"
                                className="mx-auto lg:mx-0"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-pink-400 mb-4">
                            CÔNG TY TNHH CHANH DÂY QUỐC CHUNG
                        </h2>
                        <div className="space-y-2 text-gray-300">
                            <p className="hover:text-pink-400 transition-colors">MST: 6001775561</p>
                            <p className="hover:text-pink-400 transition-colors">
                                Địa chỉ: Trung Hồ, Ea Hồ, Krông Năng, Đắk Lắk, Việt Nam
                            </p>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="flex-1 text-center max-w-md mx-auto">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:translate-y-1 transition-transform duration-300">
                            <h3 className="text-lg font-bold text-pink-400 mb-4">
                                DENTAL MARKETING INSIGHTS
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="YOUR E-MAIL"
                                    className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none"
                                />
                                <button className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-md transform hover:scale-105 transition-all duration-300">
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Social Media & Contact */}
                    <div className="flex-1 text-center lg:text-right max-w-sm mx-auto lg:mx-0">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-pink-400 mb-4">FOLLOW US</h3>
                                <div className="flex justify-center lg:justify-end space-x-4">
                                    {[
                                        { Icon: FaInstagram, href: "#" },
                                        { Icon: FaTwitter, href: "#" },
                                        { Icon: FaFacebookF, href: "#" },
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className="p-3 bg-gray-700 rounded-full hover:bg-pink-500 transform hover:scale-110 transition-all duration-300"
                                        >
                                            <social.Icon className="text-white text-xl" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-pink-400 mb-4">CALL US</h3>
                                <div className="space-y-2">
                                    <p className="text-xl font-bold hover:text-pink-400 transition-colors">
                                        (+84) 347 238 240
                                    </p>
                                    <p className="text-xl font-bold hover:text-pink-400 transition-colors">
                                        (+84) 914 616 956
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 hover:text-pink-400 transition-colors">
                            © {new Date().getFullYear()} Chanh dây Quốc Chung. All Rights Reserved
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-pink-400 transition-colors"
                            >
                                PRIVACY POLICY
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-pink-400 transition-colors"
                            >
                                TERMS AND CONDITIONS
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;