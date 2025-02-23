import { Product } from "../types/product";
import { motion } from 'framer-motion';
export const productsData: Product[] = [
    {
        id: 1,
        code: "PD001",
        name: "Chanh dây trái các loại",
        category: "Chanh dây",
        slug: "chanh-day-trai",
        unit: "Kg",
        image: ["/images/chanh-day-trai.jpg", "/images/dichchanh.jpg"],
        type: "Trái cây thô",
        packaging: "Thùng carton 10kg hoặc theo nhu cầu",
        weight: "Trọng lượng theo size",
        storageTemp: "5-10°C",
        expiry: "10 ngày",
        origin: "Đắk Lắk",
        color: "Tím / Vàng",
        ingredients: ["100% chanh dây tươi"],
        description: "Chanh dây trái tươi, được phân loại và bảo quản cẩn thận, đảm bảo độ tươi ngon.",
        processing: [
            "Lựa chọn & phân loại trái theo màu sắc, kích thước.",
            "Rửa sạch và kiểm tra chất lượng.",
            "Đóng gói vào thùng carton, bảo quản lạnh từ 5-10°C.",
            "Vận chuyển đến khách hàng trong điều kiện tiêu chuẩn."
        ]
    },
    {
        id: 2,
        code: "PD002",
        name: "Dịch chanh dây",
        category: "Chanh dây",
        slug: "dich-chanh-day",
        unit: "Túi",
        image: ["/images/dichchanh.jpg"],
        type: "Đông lạnh",
        packaging: "Túi PE 20kg",
        weight: "20kg/túi",
        storageTemp: "-25°C",
        expiry: "12 tháng",
        origin: "Đắk Lắk",
        color: "Vàng cam",
        ingredients: ["100% nước chanh dây tươi"],
        description: "Dịch chanh dây tươi nguyên chất, cấp đông nhanh giúp giữ nguyên hương vị.",
        processing: [
            "Lựa chọn & phân loại chanh dây.",
            "Rửa sạch bằng hệ thống sát khuẩn.",
            "Tách ruột quả, loại bỏ vỏ bằng lực ly tâm.",
            "Tách màng, giữ lại nước cốt và hạt.",
            "Chiết rót vào túi tiệt trùng, đảm bảo độ Brix trên 15%.",
            "Cấp đông -25°C trong 48 giờ.",
            "Đóng thùng và lưu kho trước khi xuất hàng."
        ]
    },
    {
        id: 3,
        code: "PD003",
        name: "Giống chanh dây",
        category: "Chanh Dây",
        slug: "giong-chanh-day",
        unit: "Cây",
        image: ["/images/giong-chanh.jpg"],
        type: "Giống cây",
        packaging: "Bầu đất ươm",
        weight: "Khoảng 1kg/cây",
        storageTemp: "25-30°C",
        expiry: "6 tháng",
        origin: "Đắk Lắk",
        color: "Xanh",
        ingredients: ["Hạt giống chanh dây", "Đất ươm"],
        description: "Giống chanh dây khỏe mạnh, thích nghi với nhiều điều kiện khí hậu.",
        processing: [
            "Lựa chọn hạt giống chất lượng cao.",
            "Ươm mầm trong điều kiện kiểm soát nhiệt độ, độ ẩm.",
            "Chăm sóc cây con từ 1-2 tháng trước khi xuất vườn.",
            "Đóng gói trong bầu đất, vận chuyển đến khách hàng."
        ]
    },
    {
        id: 4,
        code: "PD004",
        name: "Sầu riêng cấp đông",
        category: "Sầu riêng",
        slug: "sau-rieng-dong-lanh",
        unit: "Kg",
        image: ["/images/sau-rieng-dong-lanh.jpg"],
        type: "Đông lạnh",
        packaging: "Thùng 20kg",
        weight: "20kg/thùng",
        storageTemp: "-18°C",
        expiry: "24 tháng",
        origin: "Đắk Lắk",
        color: "Vàng nhạt",
        ingredients: ["100% sầu riêng tươi"],
        description: "Sầu riêng tách múi, cấp đông nhanh để giữ trọn vị thơm ngon.",
        processing: [
            "Lựa chọn sầu riêng chín tự nhiên.",
            "Tách vỏ, lấy múi thủ công để giữ độ nguyên vẹn.",
            "Lọc bỏ xơ, kiểm tra chất lượng từng múi.",
            "Cấp đông nhanh ở nhiệt độ -18°C.",
            "Đóng thùng, lưu kho bảo quản trước khi xuất hàng."
        ]
    }
];