'use client'

import Image from "next/image";
import { useState, useMemo, ChangeEvent } from "react";
import ProductItem from "./productItem";
import { Search, Filter, X } from "lucide-react";
import TopSection from "../section/topSection";
import PolicyAndCommit from "../section/policyAndCommit";
import { useDebounce } from 'use-debounce';
import { Product } from "../../types/product";
import { productsData } from "@/app/data/product";
import { useLanguage } from "@/app/providers";
import { productText } from "@/app/language/product";

export default function ProductsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("Tất cả");
    const [isSearching, setIsSearching] = useState(false);
    const [debouncedSearch] = useDebounce(searchTerm, 500);

    const categories = ["Tất cả", "Chanh Dây", "Sầu Riêng"];

    // Memoize filtered products to prevent unnecessary recalculations
    const filteredProducts = useMemo(() => {
        return productsData.filter((product: Product) => {
            const matchCategory = category === "Tất cả" || product.category.toLowerCase().trim() === category.toLowerCase().trim();
            const matchSearch = product.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                product.description.toLowerCase().includes(debouncedSearch.toLowerCase());
            return matchCategory && matchSearch;
        });
    }, [category, debouncedSearch, productsData]);

    // Handle search input change
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setIsSearching(true);
    };

    // Clear search and filters
    const clearFilters = () => {
        setSearchTerm("");
        setCategory("Tất cả");
        setIsSearching(false);
    };

    const { language } = useLanguage();
    const languageText = productText[language as keyof typeof productText];

    return (
        <div className="bg-gradient-to-b from-white to-green-50 text-green-900">
            <TopSection
                title={languageText.pageTitle}
                description={languageText.pageDescription}
            />

            {/* Enhanced Search & Filter Section */}
            <section className="container mx-auto py-10 px-4">
                <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 relative z-20 max-w-4xl mx-auto">
                    <h3 className="font-medium text-xl mb-4 text-green-800">{languageText.searchSection.title}</h3>
                    <div className="flex flex-col md:flex-row items-stretch gap-4">
                        {/* Search Input with Clear Button */}
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Search size={20} className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder={languageText.searchSection.searchPlaceholder}
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="pl-10 pr-10 w-full h-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="absolute inset-y-0 right-3 flex items-center"
                                >
                                    <X size={16} className="text-gray-400 hover:text-gray-600" />
                                </button>
                            )}
                        </div>

                        {/* Category Filter */}
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Search Results Summary */}
                    {isSearching && (
                        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                            <span>
                                {languageText.searchSection.resultsFound.replace("{count}", filteredProducts.length.toString())}
                                {searchTerm && ` ${languageText.searchSection.for} "${searchTerm}"`}
                                {category !== languageText.searchSection.allCategories && ` ${languageText.searchSection.in} ${category}`}
                            </span>
                            {(searchTerm || category !== languageText.searchSection.allCategories) && (
                                <button
                                    onClick={clearFilters}
                                    className="text-green-600 hover:text-green-700 font-medium"
                                >
                                    {languageText.searchSection.clearFilters}
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Product List Section */}
            <section className="container mx-auto px-4 py-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">{languageText.productSection.title}</h2>
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
                            alt={languageText.productSection.noProductsFound}
                            className="mx-auto mb-4"
                        />
                        <p className="text-gray-600 text-lg">{languageText.productSection.noProductsFound}</p>
                        <button
                            onClick={clearFilters}
                            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
                        >
                            {languageText.productSection.clearFilters}
                        </button>
                    </div>
                )}
            </section>

            <PolicyAndCommit />
        </div>
    );
}