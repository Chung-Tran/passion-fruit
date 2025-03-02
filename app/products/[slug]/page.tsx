import { notFound } from "next/navigation";
import { productsData } from "@/app/data/product";
import { Product } from "@/app/types/product";
import ProductDetail from "@/app/components/product/productDetail";
import type { Metadata } from 'next'

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params, }: Props,
): Promise<Metadata> {
    // read route params
    const { slug } = await params

    // fetch data
    const product = productsData.find((item => item.slug == slug));
    if (!product) {
        return {
            title: "Sản phẩm không tồn tại",
        }
    }

    return {
        title: product?.name,
        // openGraph: {
        //     images: ['/some-specific-page-image.jpg', ...previousImages],
        // },
    }
}

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
            <ProductDetail product={product} />
        </div>
    );
}
