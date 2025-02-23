import React from 'react'
import { Shield, RefreshCw, Truck, UserCheck, Award } from "lucide-react";

function PolicyAndCommit() {
  const policies = [
    {
      icon: <Shield size={48} />,
      title: "Đảm Bảo Chất Lượng",
      details: [
        "100% trái cây tươi ngon",
        "Kiểm tra nghiêm ngặt dư lượng thuốc bảo vệ thực vật",
        "Nguồn gốc rõ ràng, có thể truy xuất"
      ]
    },
    {
      icon: <Award size={48} />,
      title: "Chứng Nhận & Đối Tác",
      details: [
        "Chứng nhận vệ sinh an toàn thực phẩm",
        "Đối tác của các chuỗi cửa hàng lớn",
        "Hợp tác với nông dân theo mô hình bền vững"
      ]
    },
    {
      icon: <UserCheck size={48} />,
      title: "Dịch Vụ Khách Hàng",
      details: [
        "Tư vấn tận tình 24/7",
        "Chính sách hỗ trợ nông dân và khách hàng thân thiết",
        "Cam kết bảo mật thông tin khách hàng"
      ]
    }
  ];

  return (
    <section className="bg-green-900 py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute top-1/2 -right-12 w-48 h-48 rounded-full bg-white"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Chính Sách & Cam Kết</h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div key={index} className="flip-card h-48 md:h-64">
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute w-full h-full bg-white rounded-xl p-6 shadow-xl flex flex-col items-center justify-center">
                  <div className="text-green-600 mb-4">{policy.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-green-800">{policy.title}</h3>
                  <p className="text-green-700">Xem chi tiết →</p>
                </div>

                {/* Back */}
                <div className="flip-card-back absolute w-full h-full bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 shadow-xl text-white">
                  <h3 className="text-xl font-semibold mb-3 border-b border-green-400 pb-2">{policy.title}</h3>
                  <ul className="text-sm space-y-2">
                    {policy.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PolicyAndCommit