import React, { useState } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
} from "@heroui/react";
import { Lock, Mail, AlertCircle } from 'lucide-react';
import { openToast } from '@/app/common/methodCommon';
import { layoutText } from '@/app/language/layout';

interface LoginModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    languageText: typeof layoutText[keyof typeof layoutText];
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, languageText }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        setError("");

        setTimeout(() => {
            if (email === "admin" && password === "admin@123") {
                openToast('success', languageText.loginSuccess);
                setLoading(false);
                onClose();
            } else {
                setError(languageText.loginFail);
            }
            setLoading(false);
        }, 800);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };

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
                        <h2 className="text-2xl font-bold text-gray-800">{languageText.login}</h2>
                        <p className="text-sm text-gray-500 mt-1">
                            {languageText.loginToContinue}
                        </p>
                    </ModalHeader>

                    <ModalBody className="p-6 space-y-6">
                        {error && (
                            <div className="flex items-center p-3 bg-red-50 text-red-600 rounded-md">
                                <AlertCircle className="h-5 w-5 mr-2" />
                                <span className="text-sm">{error}</span>
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    {languageText.username}
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <Input
                                        type="text"
                                        placeholder={languageText.enterUsername}
                                        className="pl-10 w-full"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    {languageText.password}
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <Input
                                        type="password"
                                        placeholder={languageText.enterPassword}
                                        className="pl-10 w-full"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    <span className="text-sm text-gray-600">
                                        {languageText.rememberMe}
                                    </span>
                                </label>
                            </div>
                        </div>
                    </ModalBody>

                    <ModalFooter className="p-4 border-t flex justify-end space-x-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-200 font-medium text-sm shadow-sm"
                        >
                            {languageText.cancel}
                        </button>
                        <button
                            onClick={handleLogin}
                            disabled={loading}
                            className={`px-6 py-2 bg-blue-600 text-white rounded-md font-medium text-sm shadow-sm transition-colors duration-200 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                                }`}
                        >
                            {loading ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    {languageText.processing}
                                </span>
                            ) : (
                                languageText.login
                            )}
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default LoginModal;