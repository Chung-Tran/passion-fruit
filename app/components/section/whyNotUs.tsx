'use client'
import React from 'react'
import { Award } from "lucide-react";
import { FaLeaf, FaSyncAlt, FaShieldAlt } from 'react-icons/fa';
import { homeText } from '@/app/language/home';
import { useLanguage } from '@/app/providers';

export default function WhyNotUs() {

    const { language } = useLanguage();
    const languageText = homeText[language as keyof typeof homeText];

    const features = [
        {
            icon: FaLeaf,
            title: languageText?.organicFruits,
            description: languageText.organicFruitsDesc,
        },
        {
            icon: Award,
            title: languageText?.qualityAssurance,
            description: languageText.qualityAssuranceDesc,
        },
        {
            icon: FaSyncAlt,
            title: languageText.processGuarantee,
            description: languageText.processGuaranteeDesc,
        },
        {
            icon: FaShieldAlt,
            title: languageText.transparencyTrust,
            description: languageText.transparencyTrustDesc,
        },
    ];
    return (
        <section className="mx-auto px-4 py-16 overflow-hidden w-full">
            <div className="text-center mb-12">
                <h2 className="textTitle mx-auto">{languageText.whyChooseUs}</h2>
            </div>

            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div key={index} className="group">
                                <div className="bg-white relative overflow-hidden rounded-xl transition-all duration-300 shadow-md group-hover:shadow-xl flex flex-col items-center p-6 h-full">
                                    <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-green-50 -mr-6 -mt-6 transition-all duration-300 group-hover:bg-green-100"></div>

                                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 text-white rounded-xl mb-4 relative z-10 transform transition duration-300 group-hover:scale-110">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-green-800">{item.title}</h3>
                                    <p className="text-gray-600 text-center">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
