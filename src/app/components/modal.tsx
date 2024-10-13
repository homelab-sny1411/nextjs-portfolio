import React, { useEffect, useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    htmlContent: string; // Représente le contenu HTML que tu veux injecter
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, htmlContent }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShowModal(true);
        } else {
            setTimeout(() => setShowModal(false), 300); // Ajout d'une latence pour la fermeture
        }
    }, [isOpen]);

    if (!showModal && !isOpen) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-gray-800 text-white w-full md:w-3/4 lg:w-2/3 xl:w-1/2 p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-out ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="text-2xl text-gray-400 hover:text-gray-200 transition"
                    >
                        &times;
                    </button>
                </div>
                <div className="mt-4">
                    {/* Utilisation de dangerouslySetInnerHTML pour insérer du HTML */}
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </div>
            </div>
        </div>
    );
};

export default Modal;
