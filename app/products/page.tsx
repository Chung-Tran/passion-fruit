import { Metadata } from "next/types";
import ProductsPage from "../components/product/productPage";

export const metadata: Metadata = {
    title: "Sản Phẩm",
    description: "Khám phá những sản phẩm tươi ngon, chất lượng cao từ vườn trái cây của chúng tôi"
};

export default function Page() {
    return <ProductsPage />;
}