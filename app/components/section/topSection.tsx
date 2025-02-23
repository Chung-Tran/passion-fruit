'use client'
import React from "react";

interface TopSectionProps {
    title: string;
    description?: string;
    backgroundImage?: string;
    height?: string;
}

const TopSection: React.FC<TopSectionProps> = ({
    title,
    description,
    backgroundImage,
    height = "h-[30vh]",
}) => {
    return (
        <section className="relative flex items-center justify-center h-[40vh] md:h-[50vh] bg-cover bg-center bg-[url('/images/hero-section.png')]">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>
            <div className="relative z-10 text-center max-w-3xl px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {title}
                </h1>
                {!!description && (
                    <p className="text-white/90 text-lg">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
};

export default TopSection;
