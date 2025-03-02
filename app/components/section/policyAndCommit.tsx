import React from 'react'
import { Shield, UserCheck, Award } from "lucide-react";
import { productText } from '@/app/language/product';
import { useLanguage } from '@/app/providers';

function PolicyAndCommit() {
  const { language } = useLanguage();
  const t = productText[language as keyof typeof productText];

  // Mảng icon tương ứng với từng chính sách
  const policyIcons = [
    <Shield size={48} key="shield" />,
    <Award size={48} key="award" />,
    <UserCheck size={48} key="userCheck" />
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t.policySection.title}</h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.policySection.policies.map((policy, index) => (
            <div key={index} className="flip-card h-48 md:h-64">
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute w-full h-full bg-white rounded-xl p-6 shadow-xl flex flex-col items-center justify-center">
                  <div className="text-green-600 mb-4">{policyIcons[index]}</div>
                  <h3 className="text-xl font-semibold mb-2 text-green-800">{policy.title}</h3>
                  <p className="text-green-700">{t.policySection.viewDetails}</p>
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
  );
}

export default PolicyAndCommit;