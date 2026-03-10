import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';
import './Toast.scss';

const Toast = ({ message, type = 'success', onClose, duration = 5000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [onClose, duration]);

    return (
        <div className={`custom-toast toast-${type}`}>
            <div className="toast-content">
                <CheckCircle className="toast-icon" size={24} />
                <span className="toast-message">{message}</span>
            </div>
            <button className="toast-close" onClick={onClose}>
                <X size={18} />
            </button>
            <div className="toast-progress"></div>
        </div>
    );
};

export default Toast;
