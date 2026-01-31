import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-[#000] border border-[var(--color-border)] rounded-2xl shadow-[0_0_50px_rgba(153,69,255,0.2)] animate-fade-in overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-[var(--color-bg-card-hover)] transition-colors"
                    >
                        <X size={20} className="text-[var(--color-text-muted)] hover:text-white" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
