import { notFound } from "next/navigation";
import { productsData } from "@/app/data/product";
import { Product } from "@/app/types/product";
import ProductDetail from "@/app/components/product/productDetail";
import TopSection from "@/app/components/section/topSection";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    // Tìm sản phẩm theo slug
    const { slug } = await params
    const product: Product | undefined = productsData.find((p) => p.slug === slug);

    if (!product) return notFound(); // Nếu không tìm thấy, trả về trang 404

    return (
        <div className="bg-white text-green-900">
            <TopSection
                title='Sản Phẩm Của Chúng Tôi'
                description='Khám phá những sản phẩm tươi ngon, chất lượng cao từ vườn trái cây của chúng tôi'

            />
            <ProductDetail product={product} />
        </div>
    );
}
