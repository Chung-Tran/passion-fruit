'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'
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
    const googlemapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.9946053244674!2d108.30998521517878!3d12.95240734083003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316e1d4f6b64098f%3A0x983822b5ac83105e!2sHeo%20quay%20Thanh%20Huy%E1%BB%81n!5e1!3m2!1svi!2s!4v1740322896427!5m2!1svi!2s"
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
                                <span>143 Trung Hồ, Ea Hồ, Krông Năng, Đắk Lắk</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-6 w-6 text-indigo-500 mr-3" />
                                <a href={`tel:0347238240`} >+84 347 238 240</a>
                            </div>
                            {/* <div className="flex items-center">
                                <Mail className="h-6 w-6 text-indigo-500 mr-3" />
                                <span>contact@example.com</span>
                            </div> */}
                            <div className="flex items-center">
                                <Clock className="h-6 w-6 text-indigo-500 mr-3" />
                                <span>Thứ 2 - Chủ nhật: 07:00 - 22:00</span>
                            </div>
                        </div>
                        <div className="mt-6 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                            {/* <span className="text-gray-500">Bản đồ sẽ được tích hợp sau</span> */}
                            <iframe
                                src={googlemapURL}
                                height="100%"
                                width="100%"
                                style={{ border: 0 }}
                            >
                                <p>Please visit the map <a href={googlemapURL}>here</a></p>
                            </iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
