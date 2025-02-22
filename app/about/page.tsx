import Image from "next/image";
import Link from "next/link";
import { Mail, PhoneCall, MapPin } from "lucide-react";
import TopSection from "../components/section/topSection";

export default function About() {
    return (
        <div className="bg-green-50 text-green-900">
            <TopSection
                title='Về Chúng Tôi'
            // description='Khám phá những sản phẩm tươi ngon, chất lượng cao từ vườn trái cây của chúng tôi'

            />
            {/* Về Chúng Tôi */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold text-green-800">Hành Trình Của Chúng Tôi</h2>
                <p className="mt-4 text-lg text-green-700 max-w-2xl mx-auto">
                    Passion Fruit cam kết cung cấp các sản phẩm trái cây chất lượng cao, tự nhiên và an toàn cho sức khỏe. Chúng tôi tự hào mang đến cho bạn những sản phẩm tốt nhất từ nông trại đến bàn ăn.
                </p>
            </section>

            {/* Cam Kết Chất Lượng */}
            <section className="bg-yellow-100 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-green-800">Cam Kết Chất Lượng</h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-8">
                        <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-green-700">🌱 Canh tác hữu cơ</h3>
                            <p className="text-green-600 mt-2">Chúng tôi sử dụng phương pháp trồng trọt hữu cơ, không hóa chất độc hại.</p>
                        </div>
                        <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-green-700">🔬 Kiểm định nghiêm ngặt</h3>
                            <p className="text-green-600 mt-2">Mọi sản phẩm đều được kiểm định chất lượng trước khi đến tay khách hàng.</p>
                        </div>
                        <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-green-700">🚚 Giao hàng nhanh chóng</h3>
                            <p className="text-green-600 mt-2">Đảm bảo sản phẩm luôn tươi ngon khi đến tay bạn.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Đội Ngũ */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold text-green-800">Đội Ngũ Passion Fruit</h2>
                <p className="mt-4 text-lg text-green-700">Chúng tôi là những người đam mê nông nghiệp và yêu thích việc mang lại sản phẩm tốt nhất cho bạn.</p>
                <div className="mt-8 flex flex-wrap justify-center gap-8">
                    <div className="text-center">
                        <Image src="/team-member-1.jpg" width={150} height={150} className="rounded-full mx-auto" alt="CEO" />
                        <h3 className="mt-2 text-lg font-semibold text-green-800">Nguyễn Văn A</h3>
                        <p className="text-green-600">CEO & Founder</p>
                    </div>
                    <div className="text-center">
                        <Image src="/team-member-2.jpg" width={150} height={150} className="rounded-full mx-auto" alt="CMO" />
                        <h3 className="mt-2 text-lg font-semibold text-green-800">Trần Thị B</h3>
                        <p className="text-green-600">Marketing Manager</p>
                    </div>
                </div>
            </section>

            {/* Liên Hệ */}
            <section className="bg-green-900 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold">Liên Hệ Với Chúng Tôi</h2>
                    <p className="mt-4 text-lg text-green-200">Chúng tôi sẵn sàng hỗ trợ bạn!</p>
                    <div className="mt-8 flex flex-col md:flex-row justify-center gap-8">
                        <div className="flex items-center gap-4">
                            <PhoneCall className="h-6 w-6 text-yellow-400" />
                            <span>+84 123 456 789</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="h-6 w-6 text-yellow-400" />
                            <span>contact@passionfruit.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <MapPin className="h-6 w-6 text-yellow-400" />
                            <span>Hà Nội, Việt Nam</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}