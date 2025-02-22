'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import TopSection from '../components/section/topSection'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('Gửi thành công!')
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <div className="">
            <TopSection
                title='Liên Hệ Với Chúng Tôi'
                description='Hãy để lại lời nhắn, chúng tôi sẽ phản hồi sớm nhất có thể.'

            />
            <div className="max-w-6xl mx-auto my-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white shadow-md rounded-lg p-8"
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Gửi Tin Nhắn</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Họ và tên</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 px-4 py-2 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 px-4 py-2 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Chủ đề</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 px-4 py-2 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nội dung</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full mt-2 px-4 py-2 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-500 text-white py-3 rounded-md shadow-md hover:bg-indigo-600 transition duration-200"
                            >
                                Gửi
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white shadow-md rounded-lg p-8"
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Thông Tin Liên Hệ</h2>
                        <div className="space-y-6 text-gray-700">
                            <div className="flex items-center">
                                <MapPin className="h-6 w-6 text-indigo-500 mr-3" />
                                <span>123 Đường ABC, Quận X, TP.HCM</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-6 w-6 text-indigo-500 mr-3" />
                                <span>+84 123 456 789</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-6 w-6 text-indigo-500 mr-3" />
                                <span>contact@example.com</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="h-6 w-6 text-indigo-500 mr-3" />
                                <span>Thứ 2 - Thứ 6: 08:00 - 18:00</span>
                            </div>
                        </div>
                        <div className="mt-6 h-56 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500">Bản đồ sẽ được tích hợp sau</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
