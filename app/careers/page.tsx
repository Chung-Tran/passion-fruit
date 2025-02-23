import {  Users2 } from "lucide-react";
import TopSection from "../components/section/topSection";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <TopSection
                title="Cơ Hội Nghề Nghiệp"
                description="Hãy cùng chúng tôi kiến tạo tương lai và mang lại những giá trị đột phá cho cộng đồng"
            />

            <section className="container px-4 py-12 mx-auto">
                <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-sm rounded-lg shadow-md p-8">
                    <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-blue-50 rounded-full" />
                        </div>
                        <Users2 className="relative w-16 h-16 mx-auto text-blue-600" />
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                        Chưa Có Vị Trí Tuyển Dụng Mới
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-lg mx-auto text-center leading-relaxed">
                        Hiện tại chúng tôi chưa có vị trí nào đang tuyển dụng. Tuy nhiên,
                        nếu bạn mong muốn trở thành một phần của đội ngũ chúng tôi,
                        hãy gửi hồ sơ để được ưu tiên xem xét cho các vị trí phù hợp trong tương lai.
                    </p>

                    {/* <div className="flex justify-center">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Gửi Hồ Sơ Ứng Tuyển
                        </button>
                    </div> */}
                </div>

                {/* <div className="max-w-xl mx-auto mt-16 text-center">
                    <div className="bg-white rounded-xl p-8 shadow-sm">
                        <h3 className="text-xl font-medium text-gray-900 mb-3">
                            Bạn Cần Tư Vấn Thêm?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Đội ngũ nhân sự của chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của bạn
                        </p>
                        <div className="inline-flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-lg">
                            <Mail className="w-5 h-5 text-blue-600" />
                            <a
                                href="mailto:hr@company.com"
                                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                            >
                                hr@company.com
                            </a>
                        </div>
                    </div>
                </div> */}
            </section>
        </main>
    );
}