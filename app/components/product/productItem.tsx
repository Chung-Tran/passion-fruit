import { Product } from "@/app/types/product"
import { Phone } from "lucide-react"


export default function ProductItem({ product }: { product: Product }) {
    return (
        <div className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg">
            <div className="aspect-square overflow-hidden animation-hover-item">
                <img
                    src={product.image[0] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>

                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-1 text-xs font-semibold border border-gray-300 rounded-md">{product?.type}</span>
                        <span className="px-2 py-1 text-xs font-semibold border border-gray-300 rounded-md">{product?.weight}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Đơn vị: {product.unit}</span>
                        <button className="flex items-center gap-1 text-blue-600">
                            <Phone className="w-4 h-4" />
                            <span className="text-base font-medium">Liên hệ</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
