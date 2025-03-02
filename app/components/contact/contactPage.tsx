'use client'
import { contactText } from "@/app/language/contact";
import { useLanguage } from "@/app/providers";
import { useState } from "react";
import TopSection from "../section/topSection";
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react'

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactPage() {
    const { language } = useLanguage();
    const text = contactText[language as keyof typeof contactText];

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value, // Lỗi sẽ biến mất vì name đã được TypeScript hiểu đúng
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('Gửi thành công!')
        setFormData({ name: '', email: '', subject: '', message: '' })
    }
    return (
        <>
            <TopSection title={text.title} description={text.description} />
            <div className="container mx-auto px-4 py-12">

                <div className="max-w-6xl mx-auto my-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white shadow-md rounded-xl p-8"
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">{text.sendMessage}</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {[{ id: 'name', label: text.fullName }, { id: 'email', label: text.email }, { id: 'subject', label: text.subject }].map((field) => (
                                <div key={field.id}>
                                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">{field.label}</label>
                                    <input
                                        type={field.id === 'email' ? 'email' : 'text'}
                                        id={field.id}
                                        name={field.id}
                                        value={formData[field.id as keyof FormData]}
                                        onChange={handleChange}
                                        required
                                        className="w-full mt-2 px-4 py-3 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                            ))}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{text.message}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full mt-2 px-4 py-3 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md shadow-md hover:bg-green-700 transition-all">
                                {text.submit}
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white shadow-md rounded-xl p-8"
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">{text.contactInfo}</h2>
                        <div className="space-y-6 text-gray-700">
                            {[{ icon: MapPin, value: text.address }, { icon: Phone, value: text.phone, link: `tel:${text.phone}` }, { icon: Clock, value: text.workingHours }]
                                .map((item, idx) => (
                                    <div key={idx} className="flex items-center hover:text-green-600 transition-all">
                                        <item.icon className="h-6 w-6 text-green-500 mr-3" />
                                        {item.link ? <a href={item.link}>{item.value}</a> : <span>{item.value}</span>}
                                    </div>
                                ))}
                        </div>
                        <div className="mt-6 h-64 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.9946053244674!2d108.30998521517878!3d12.95240734083003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316e1d4f6b64098f%3A0x983822b5ac83105e!2sHeo%20quay%20Thanh%20Huy%E1%BB%81n!5e1!3m2!1svi!2s!4v1740322896427!5m2!1svi!2s"
                                height="100%"
                                width="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
