'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Globe, User, Newspaper, UserPlus, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import logo from '../../../public/images/logo.png';
import { navItems } from '@/app/common/constant'
import { usePathname } from 'next/navigation'

export const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const [language, setLanguage] = useState('vi');
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const langMenuRef = useRef<HTMLDivElement | null>(null);
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    const languages = [
        { code: 'vi', label: 'Tiếng Việt' },
        { code: 'en', label: 'English' }
    ]

    const isPageActive = (href: string) => pathname === href

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsScrolled(scrollPosition > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setIsLangOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Focus input when search is opened
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    return (
        <header
            className={`w-full transition-all duration-300 z-10 ${isScrolled
                ? 'fixed top-0 left-0 bg-white/85 backdrop-blur-md shadow-md z-50 border-b-4'
                : 'absolute top-0 left-0 bg-transparent'
                }`}
            style={{
                borderBottom: isScrolled
                    ? '4px solid linear-gradient(to right, #ffd700, #07ab07)'
                    : 'none',
            }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center h-20">
                    <Link href="/" className="text-2xl font-bold">
                        <Image
                            src={logo}
                            width={80}
                            height={80}
                            alt='logo'
                        />
                    </Link>

                    <nav className="hidden md:flex flex-col items-center justify-center flex-1 mx-4 pb-2 h-full relative">
                        <div className='w-full flex justify-end space-x-4 mb-2 '>
                            <AnimatePresence>
                                {isSearchOpen ? (
                                    <motion.div
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: "100%", opacity: 1 }}
                                        exit={{ width: 0, opacity: 0 }}
                                        transition={{ duration: 1 }}
                                        className="absolute flex items-center overflow-hidden z-10 max-w-[400px] top-1 mr-6"
                                    >
                                        <div className="w-full flex items-center bg-white rounded-full border border-gray-200 overflow-hidden ">
                                            <div className="flex items-center pl-4">
                                                <Search className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <input
                                                ref={searchInputRef}
                                                type="text"
                                                placeholder="Tìm kiếm..."
                                                className="w-full px-3 py-2 text-sm focus:outline-none bg-transparent text-black"
                                            />
                                            <button
                                                className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold transition-colors duration-200 rounded-full"
                                            >
                                                Search
                                            </button>
                                        </div>

                                    </motion.div>
                                ) : (
                                    <>
                                        <div className="relative hidden md:flex" ref={langMenuRef}>
                                            <button
                                                onClick={() => setIsLangOpen(!isLangOpen)}
                                                className="flex items-center space-x-1.5 rounded-lg transition-colors duration-200"
                                            >
                                                <Globe className={`w-4 h-4 ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`} />
                                                <span className={`text-[13px] ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}>
                                                    {languages.find(lang => lang.code === language)?.label}
                                                </span>
                                                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''} ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`} />
                                            </button>

                                            <AnimatePresence>
                                                {isLangOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="absolute right-0 mt-8 w-36 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                                                    >
                                                        <div className="py-1">
                                                            {languages.map((lang) => (
                                                                <button
                                                                    key={lang.code}
                                                                    onClick={() => {
                                                                        setLanguage(lang.code)
                                                                        setIsLangOpen(false)
                                                                    }}
                                                                    className={`w-full px-2 py-2 text-left text-[12px] hover:bg-gray-100 transition-colors duration-200 ${language === lang.code
                                                                        ? 'bg-gray-50 text-green-600 font-medium'
                                                                        : 'text-gray-700'
                                                                        }`}
                                                                >
                                                                    {lang.label}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        <div className="hidden md:flex items-center space-x-1.5 cursor-pointer">
                                            <User className={`w-4 h-4 ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`} />
                                            <Link href="/login" className={`text-[13px] ${isScrolled ? 'text-gray-700' : 'text-gray-200'} transition-colors`}>
                                                Đăng nhập
                                            </Link>
                                        </div>

                                        <div className="hidden md:flex items-center space-x-1.5 cursor-pointer">
                                            <Newspaper className={`w-4 h-4 ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`} />
                                            <Link href="/login" className={`text-[13px] ${isScrolled ? 'text-gray-700' : 'text-gray-200'} transition-colors`}>
                                                Blog
                                            </Link>
                                        </div>

                                        <div className="hidden md:flex items-center space-x-1.5 cursor-pointer">
                                            <UserPlus className={`w-4 h-4 ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`} />
                                            <Link href="/login" className={`text-[13px] ${isScrolled ? 'text-gray-700' : 'text-gray-200'} transition-colors`}>
                                                Tuyển dụng
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </AnimatePresence>

                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className="hidden md:flex items-center cursor-pointer z-20"
                            >
                                {
                                    !isSearchOpen ?
                                        <Search className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`} />
                                        :
                                        <X className="w-5 h-5 text-gray-500" />
                                }

                            </button>
                        </div>

                        <div>
                            {navItems.map((item) => {
                                const active = isPageActive(item.href)
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`mx-6 transition-colors font-bold relative group ${isScrolled
                                            ? active
                                                ? 'text-gray-900'
                                                : 'text-gray-700 hover:text-gray-400'
                                            : active
                                                ? 'text-gray-400'
                                                : 'text-gray-200 hover:text-gray-400'
                                            }`}
                                    >
                                        {item.label}
                                        <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-md bg-current 
                                            ${active ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}
                                        />
                                    </Link>
                                )
                            })}
                        </div>
                    </nav>

                    <button
                        className="md:hidden ml-auto"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden text-center"
                        >
                            <nav className="py-4 space-y-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block text-gray-700 hover:text-gray-900 transition-colors px-4"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}