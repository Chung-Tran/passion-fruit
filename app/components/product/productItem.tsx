'use client'
import { Product } from "@/app/types/product"
import { Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { productText } from "@/app/language/product";
import { useLanguage } from "@/app/providers"

export default function ProductItem({ product }: { product: Product }) {
    const { language } = useLanguage();
    const languageText = productText[language as keyof typeof productText];
    return (
        <div className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg w-[90%] md:w-full mx-auto">
            <div className="aspect-square overflow-hidden animation-hover-item">
                <Link href={`/products/${product.slug}`}>
                    <Image
                        src={product.image[0] || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        fill
                    />
                </Link>
            </div>

            <div className="p-4">
                <Link href={`/products/${product.slug}`}>
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                </Link>

                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-1 text-xs font-semibold border border-gray-300 rounded-md">{product?.type}</span>
                        <span className="px-2 py-1 text-xs font-semibold border border-gray-300 rounded-md">{product?.weight}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{languageText.unitItem}: {product.unit}</span>
                        <button className="flex items-center gap-1 text-blue-600">
                            <Phone className="w-4 h-4" />
                            <a href={`tel:0347238240`} className="text-base font-medium">
                                {languageText.contactOrder}
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
