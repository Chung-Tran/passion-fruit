import toast from 'react-hot-toast';

export const openToast = (type: string, message: string, isPromise = false) => {
    switch (type) {
        case 'success':
            toast.success(message);
            break;
        case 'error':
            toast.error(message);
            break;
        case 'loading':
            return toast.loading(message);
        default:
            toast(message);
    }

    // Trả về id nếu là promise loading toast
    if (isPromise && type === 'loading') {
        return toast.loading(message);
    }
};