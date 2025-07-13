'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import { businessFieldsData } from '@/app/data/businessField';

export default function BusinessFields() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [businessFieldSelected, setBusinessFieldSelected] = useState<number | null>(null);
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };
    const selectedField = businessFieldsData.find(field => field.id === businessFieldSelected);

    return (
        <section className="py-2 md:py-12 relative overflow-hidden">
            <div className="container mx-auto md:px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {businessFieldsData.map((field, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
                        >
                            {/* Nội dung */}
                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                <motion.div className="md:p-6">
                                    <h3 className="text-xl md:text-3xl md:text-3xl font-bold text-gray-800 mb-3">
                                        {field.title}
                                    </h3>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                        {field.description}
                                    </p>
                                    <button
                                        onClick={() => {
                                            onOpen();
                                            setBusinessFieldSelected(field.id)
                                        }}
                                        className="relative mt-2 px-3 md:px-5 py-1.5 md:py-3 font-bold text-white bgmain-color border-2 border-transparent overflow-hidden transition-all duration-500 group"
                                    >
                                        <span className="absolute inset-0 w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                                        <span className="relative z-10 text-white group-hover:text-[#ffd700]">Tìm hiểu thêm</span>
                                    </button>
                                </motion.div>
                            </div>

                            {/* Hình ảnh */}
                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                <motion.div whileHover={{ scale: 1.05 }} className="relative group">
                                    <div className="relative w-full h-[320px] ">
                                        <Image
                                            src={field.image}
                                            alt={field.title}
                                            fill
                                            className="object-cover rounded-xl shadow-lg"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority={index === 0}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Custom Modal */}
            <Modal
                isOpen={(isOpen && !!businessFieldSelected)}
                onOpenChange={onOpenChange}
                size="5xl"
                className='max-h-[90vh] md:max-h-[100vh] overflow-hidden my-auto'
            >
                <ModalContent className='max-h-[90vh] md:max-h-[100vh] overflow-hidden my-auto'>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {selectedField?.title || "Thông tin chi tiết"}
                            </ModalHeader>
                            <ModalBody className="max-h-[80vh] overflow-y-auto px-2 md:px-6 space-y-4 leading-relaxed text-gray-700 ">
                                {selectedField?.content || <p>Đang tải nội dung...</p>}
                            </ModalBody>

                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Đóng
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </section>
    );
};
