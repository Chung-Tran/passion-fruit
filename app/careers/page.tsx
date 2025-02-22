import { Mail, Building2, Users2 } from "lucide-react"

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <section className="bg-gray-100 py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Cơ hội nghề nghiệp</h1>
                    <p className="text-gray-600 text-lg mb-6">
                        Chúng tôi luôn tìm kiếm những người tài năng để cùng phát triển và tạo nên những giá trị mới.
                    </p>
                </div>
            </section>

            {/* Empty State Section */}
            <section className="container px-4 py-16 mx-auto">
                <div className="max-w-3xl mx-auto border-2 border-dashed border-gray-300 bg-white rounded-lg shadow-md">
                    <div className="pt-12 pb-16 px-6 text-center">
                        <div className="mb-8">
                            <Users2 className="w-16 h-16 mx-auto text-gray-400" />
                        </div>

                        <h2 className="text-2xl font-semibold mb-4">Hiện tại chưa có vị trí tuyển dụng nào</h2>
                        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                            Chúng tôi chưa có vị trí phù hợp tại thời điểm này. Tuy nhiên, bạn có thể gửi hồ sơ để chúng tôi xem xét
                            cho các vị trí trong tương lai.
                        </p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="max-w-xl mx-auto mt-16 text-center">
                    <h3 className="text-lg font-medium mb-2">Bạn có câu hỏi về cơ hội nghề nghiệp?</h3>
                    <p className="text-gray-600 mb-6">Hãy liên hệ với bộ phận nhân sự của chúng tôi</p>
                    <div className="flex items-center justify-center gap-2">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <a href="mailto:hr@company.com" className="text-blue-600 hover:underline">
                            hr@company.com
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
