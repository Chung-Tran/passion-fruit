'use client'
import { useLanguage } from "@/app/providers";
import TopSection from "../section/topSection";
import { Users2 } from "lucide-react";
import { careerText } from "@/app/language/career";

export default function CareerPage() {
    const { language } = useLanguage();
    const languageText = careerText[language as keyof typeof careerText];
    return (
        <>
            <TopSection
                title={languageText.title}
                description={languageText.description}
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
                        {languageText.no_position}
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-lg mx-auto text-center leading-relaxed">
                        {languageText.no_position_desc}
                    </p>
                </div>
            </section>
        </>
    );
}
