import Image from "next/image";
import Link from "next/link";
import {  PhoneCall, MapPin } from "lucide-react";
import TopSection from "../components/section/topSection";

export default function About() {
    return (
        <div className=" text-green-900">
            <TopSection
                title="Về Chanh Dây Quốc Chung"
                description="Từ vườn chanh dây tại Đắk Lắk đến bàn ăn của bạn"
            />

            {/* Logo và Sứ mệnh */}
            <section className="container mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative w-64 h-64">
                            <Image
                                src="/images/logo.png"
                                alt="Logo Chanh Dây Quốc Chung"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-green-800 mb-4">Tầm Nhìn</h2>
                            <p className="text-lg text-green-700">
                                Trở thành thương hiệu hàng đầu trong lĩnh vực sản xuất và chế biến chanh dây tại Việt Nam,
                                mang đến những sản phẩm chất lượng cao, đóng góp vào sự phát triển của nền nông nghiệp bền vững.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-green-800 mb-4">Sứ Mệnh</h2>
                            <p className="text-lg text-green-700">
                                Cung cấp những sản phẩm chanh dây chất lượng cao, an toàn cho sức khỏe người tiêu dùng.
                                Phát triển mô hình canh tác bền vững, tạo công ăn việc làm cho người dân địa phương và
                                góp phần vào sự phát triển kinh tế của vùng Tây Nguyên.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-green-800 mb-4">Mục Tiêu</h2>
                            <ul className="text-lg text-green-700 space-y-2">
                                <li>• Phát triển vùng nguyên liệu chanh dây sạch, đạt chuẩn VietGAP</li>
                                <li>• Xây dựng chuỗi giá trị từ nông trại đến người tiêu dùng</li>
                                <li>• Mở rộng thị trường xuất khẩu sang các nước trong khu vực</li>
                                <li>• Nâng cao đời sống của người nông dân địa phương</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Câu Chuyện Thương Hiệu */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold text-green-800">Câu Chuyện Của Chúng Tôi</h2>
                <p className="mt-4 text-lg text-green-700 max-w-2xl mx-auto">
                    Bắt đầu từ một vườn chanh dây nhỏ tại Đắk Lắk, Chanh Dây Quốc Chung đã trở thành điểm đến tin cậy cho những sản phẩm chanh dây chất lượng cao. Chúng tôi tự hào về quá trình canh tác tự nhiên, tôn trọng môi trường và mang đến những trái chanh dây thơm ngon, giàu dinh dưỡng cho người tiêu dùng Việt Nam.
                </p>
            </section>

            {/* Giá Trị Cốt Lõi */}
            <section className="bg-yellow-100 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-green-800">Giá Trị Cốt Lõi</h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-8">
                        <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-green-700">Canh Tác Bền Vững</h3>
                            <p className="text-green-600 mt-2">Áp dụng phương pháp canh tác hữu cơ, không sử dụng hóa chất độc hại, bảo vệ môi trường và sức khỏe người tiêu dùng.</p>
                        </div>
                        <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-green-700">Chất Lượng Đảm Bảo</h3>
                            <p className="text-green-600 mt-2">Mỗi sản phẩm đều trải qua quy trình kiểm định nghiêm ngặt, đáp ứng các tiêu chuẩn về an toàn thực phẩm.</p>
                        </div>
                        <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-green-700">Tận Tâm Phục Vụ</h3>
                            <p className="text-green-600 mt-2">Cam kết mang đến trải nghiệm tốt nhất cho khách hàng, từ chất lượng sản phẩm đến dịch vụ chăm sóc.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Đội Ngũ Sáng Lập */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold text-green-800">Đội Ngũ Sáng Lập</h2>
                <p className="mt-4 text-lg text-green-700">Những người tiên phong trong hành trình phát triển nông nghiệp bền vững tại Đắk Lắk</p>
                <div className="mt-8 flex flex-wrap justify-center gap-12">
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto rounded-full bg-green-200 mb-4"></div>
                        <h3 className="text-xl font-semibold text-green-800">Trần Đình Cầu</h3>
                        <p className="text-green-600">Người Sáng Lập & CEO</p>
                        <p className="mt-2 text-sm text-green-700">Với hơn 10 năm kinh nghiệm trong lĩnh vực nông nghiệp</p>
                    </div>
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto rounded-full bg-green-200 mb-4"></div>
                        <h3 className="text-xl font-semibold text-green-800">Cao Thị Huyền</h3>
                        <p className="text-green-600">Đồng Sáng Lập</p>
                        <p className="mt-2 text-sm text-green-700">Chuyên gia về phát triển sản phẩm nông nghiệp</p>
                    </div>
                </div>
            </section>

            {/* Thông Tin Liên Hệ */}
            <section className="bg-green-900 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold">Liên Hệ</h2>
                    <p className="mt-4 text-lg text-green-200">Hãy kết nối với chúng tôi</p>
                    <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8">
                        <Link href="tel:+84347238240" className="flex items-center gap-4 hover:text-yellow-400 transition-colors">
                            <PhoneCall className="h-6 w-6 text-yellow-400" />
                            <span>+84 347 238 240</span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <MapPin className="h-6 w-6 text-yellow-400" />
                            <span>Trung Hồ, Ea Hồ, Krông Năng, Đắk Lắk</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}