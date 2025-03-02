'use client'

import Image from "next/image";
import TopSection from "../section/topSection";
import Link from "next/link";
import { PhoneCall, MapPin } from "lucide-react";
import { useLanguage } from "@/app/providers";
import { aboutText } from "@/app/language/about";

export default function AboutPage() {
    const { language } = useLanguage();
    const languageText = aboutText[language as keyof typeof aboutText];

    return (
        <>
            <TopSection
                title={languageText.aboutTitle}
                description={languageText.aboutDescription}
            />

            {/* Logo và Sứ mệnh */}
            <section className="container mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative w-64 h-64">
                            <Image
                                src="/images/logo.png"
                                alt={`Logo ${languageText.aboutTitle}`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-green-800 mb-4">{languageText.visionTitle}</h2>
                            <p className="text-lg text-green-700">
                                {languageText.visionContent}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-green-800 mb-4">{languageText.missionTitle}</h2>
                            <p className="text-lg text-green-700">
                                {languageText.missionContent}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-green-800 mb-4">{languageText.goalsTitle}</h2>
                            <ul className="text-lg text-green-700 space-y-2">
                                {languageText.goals.map((goal, index) => (
                                    <li key={index}>• {goal}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Câu Chuyện Thương Hiệu */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold text-green-800">{languageText.ourStoryTitle}</h2>
                <p className="mt-4 text-lg text-green-700 max-w-2xl mx-auto">
                    {languageText.ourStoryContent}
                </p>
            </section>

            {/* Giá Trị Cốt Lõi */}
            <section className="bg-yellow-100 py-16">
                <div className=" mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-green-800">{languageText.coreValuesTitle}</h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-8">
                        {languageText.coreValues.map((value, index) => (
                            <div key={index} className="max-w-sm p-6 bg-white rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-green-700">{value.title}</h3>
                                <p className="text-green-600 mt-2">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Đội Ngũ Sáng Lập */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold text-green-800">{languageText.foundersTitle}</h2>
                <p className="mt-4 text-lg text-green-700">{languageText.foundersDescription}</p>
                <div className="mt-8 flex flex-wrap justify-center gap-12">
                    {languageText.founders.map((founder, index) => (
                        <div key={index} className="text-center">
                            <div className="w-32 h-32 mx-auto rounded-full bg-green-200 mb-4 relative overflow-hidden">
                                <Image
                                    src="/images/user-default.jpg"
                                    alt="User-CEO"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-green-800">{founder.name}</h3>
                            <p className="text-green-600">{founder.role}</p>
                            <p className="mt-2 text-sm text-green-700">{founder.bio}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Thông Tin Liên Hệ */}
            <section className="bg-green-900 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold">{languageText.contactTitle}</h2>
                    <p className="mt-4 text-lg text-green-200">{languageText.contactDescription}</p>
                    <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8">
                        <Link href={`tel:${languageText.phone}`} className="flex items-center gap-4 hover:text-yellow-400 transition-colors">
                            <PhoneCall className="h-6 w-6 text-yellow-400" />
                            <span>{languageText.phone}</span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <MapPin className="h-6 w-6 text-yellow-400" />
                            <span>{languageText.address}</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}