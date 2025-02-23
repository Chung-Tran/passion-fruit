import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Input,
} from "@heroui/react";
import { Lock, Mail } from 'lucide-react';

interface LoginModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="md"
                className="bg-white rounded-lg shadow-xl"
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col items-center border-b p-4">
                        <h2 className="text-2xl font-bold text-gray-800">Đăng nhập</h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Vui lòng đăng nhập để tiếp tục.
                        </p>
                    </ModalHeader>

                    <ModalBody className="p-6 space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <Input
                                        type="email"
                                        placeholder="example@email.com"
                                        className="pl-10 w-full"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Mật khẩu
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <Input
                                        type="password"
                                        placeholder="••••••••"
                                        className="pl-10 w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300"
                                    />
                                    <span className="text-sm text-gray-600">
                                        Ghi nhớ đăng nhập
                                    </span>
                                </label>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default LoginModal;