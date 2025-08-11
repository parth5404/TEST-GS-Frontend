import React, { useRef } from 'react';
import { RxCross2 } from 'react-icons/rx';
import useOnClickOutside from '../../hooks/useOnClickOutside.tsx';

interface HamburgerMenuProps {
  children: React.ReactNode;
  isMenuModalOpen: boolean;
  setIsMenuModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ children, isMenuModalOpen, setIsMenuModalOpen }) => {
  const modalDiv = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalDiv, () => setIsMenuModalOpen(false));

  return (
    <div
      className={`md:hidden fixed inset-0 overflow-auto z-[100] transition-transform duration-300 ${
        isMenuModalOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex min-h-full">
        <div className="bg-base-200 bg-opacity-20 w-1/4" onClick={() => setIsMenuModalOpen(false)}></div>
        <div ref={modalDiv} className="w-3/4 bg-base-300 text-white shadow-lg">
          <div className="p-4 flex justify-end">
            <button
              className="h-12 w-12 rounded-full bg-base-200 text-white grid place-items-center text-lg cursor-pointer"
              onClick={() => setIsMenuModalOpen(false)}
              aria-label="Close menu"
            >
              <RxCross2 fontSize={28} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
