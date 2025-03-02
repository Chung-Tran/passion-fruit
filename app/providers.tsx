// app/providers.tsx
'use client'

import { HeroUIProvider } from '@heroui/react';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Định nghĩa kiểu dữ liệu chính xác cho context
interface LanguageContextType {
    language: string;
    setLanguage: (lang: string) => void;
}

// Tạo context với giá trị mặc định
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<string>('vi');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Custom hook để sử dụng context
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

export function Providers({ children }: { children: ReactNode }) {
    return (
        <HeroUIProvider>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </HeroUIProvider>
    );
}
