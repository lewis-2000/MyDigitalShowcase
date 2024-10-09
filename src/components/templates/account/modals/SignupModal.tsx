import React from 'react';
import 'tailwindcss/tailwind.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  darkMode: boolean;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, darkMode }) => {
  if (!isOpen) return null;

  const modalClass = darkMode
    ? 'bg-gray-900 bg-opacity-50 text-white'
    : 'bg-white bg-opacity-50 text-gray-900';

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-0 backdrop-blur-sm">
      <div className={`rounded-lg shadow-lg p-6 w-full max-w-lg ${modalClass} backdrop-filter backdrop-blur-md border border-opacity-20`}>
        {children}
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
