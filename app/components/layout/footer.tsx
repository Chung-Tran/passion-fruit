import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from '../../../public/images/logo.png';

export const Footer = () => {
    return (
        <footer className="bg-[#242329] text-white pt-[4vw] px-[4vw] pb-[2vw]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex justify-between gap-4 items-center">
                    {/* Company Info */}
                    <div className="col-span-1 max-w-[30%]">
                        <Image src={logo} width={120} height={120} alt="Logo" className="mx-auto" />
                        <p className="mt-4 text-center text-lg text-[#fcfcfc]">CÔNG TY TNHH CHANH DÂY QUỐC CHUNG</p>
                        <p className="mt-2 text-gray-400 text-base">MST: 6001775561 </p>
                        <p className="mt-2 text-gray-400 text-base">Địa chỉ: Trung Hồ, Ea Hồ, Krông Năng, Đắk Lắk, Việt Nam </p>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="flex-1 items-center flex flex-col ">
                        <h3 className="text-md font-semibold text-gray-300 text-center mb-2">DENTAL MARKETING INSIGHTS FOR CLEVER DENTISTS</h3>
                        <div className="flex justify-center">
                            <input
                                type="email"
                                placeholder="YOUR E-MAIL"
                                className="px-[15px] py-[10px] text-[1vw] w-[20vw] text-[#fcfcfc] bg-transparent border border-[#fcfcfc] text-white outline-none"
                            />
                            <button className="ml-[20px] p-[20px] text-[1vw] bg-[#e8b3bc] hover:bg-[#db98a4] text-white">SUBSCRIBE</button>
                        </div>
                    </div>

                    {/* Social Media & Contact */}
                    <div className="text-center max-w-[30%] flex space-x-6 flex-wrap">
                        <div>
                            <h3 className="text-md font-semibold text-gray-300 mb-2">FOLLOW US</h3>
                            <div className="flex justify-center space-x-4 mb-4">
                                <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-500 transition">
                                    <FaInstagram className="text-white" />
                                </a>
                                <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-500 transition">
                                    <FaTwitter className="text-white" />
                                </a>
                                <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-500 transition">
                                    <FaFacebookF className="text-white" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-md font-semibold text-gray-300 mb-1">CALL US</h3>
                            <p className="text-lg font-semibold my-auto">(+84) 347 238 240</p>
                            <p className="text-lg font-semibold my-auto">(+84) 914 616 956</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm flex items-center">
                    <p>© {new Date().getFullYear()} Chanh dây Quốc Chung. All Rights Reserved</p>
                    <div className=" hidden md:flex ml-24">
                        <Link href="#" className="mx-2 hover:text-white">PRIVACY POLICY</Link>
                        <Link href="#" className="mx-2 hover:text-white">TERMS AND CONDITIONS</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
