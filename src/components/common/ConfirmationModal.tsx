import React, { useRef } from 'react';
import IconBtn from './IconBtn.tsx';
import useOnClickOutside from '../../hooks/useOnClickOutside.tsx';

interface ConfirmationModalProps {
  modalData: {
    text1: string;
    text2: string;
    btn1Text: string;
    btn2Text: string;
    btn1Handler: () => void;
    btn2Handler: () => void;
    closeModalHandler: () => void;
  };
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ modalData }) => {
  const modalDiv = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalDiv, modalData.closeModalHandler);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center overflow-auto bg-base-100 bg-opacity-50 backdrop-blur-sm">
      <div
        ref={modalDiv}
        className="bg-base-300 w-11/12 max-w-md rounded-lg border border-base-200 p-6 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white">{modalData.text1}</h2>
        <p className="mt-3 mb-5 text-base-content">{modalData.text2}</p>
        <div className="flex items-center gap-x-4">
          <IconBtn text={modalData.btn1Text} onClickHandler={modalData.btn1Handler} />
          <button
            onClick={modalData.btn2Handler}
            className="bg-base-200 py-2 px-5 font-semibold rounded-md text-white hover:bg-base-100"
          >
            {modalData.btn2Text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
