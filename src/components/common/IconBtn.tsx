import React from 'react';

interface IconBtnProps {
  children?: React.ReactNode;
  text: string;
  onClickHandler?: () => void;
  disabled?: boolean;
  outline?: boolean;
  customClasses?: string;
  type?: 'button' | 'submit' | 'reset';
}

const IconBtn: React.FC<IconBtnProps> = ({
  children,
  text,
  onClickHandler,
  disabled,
  outline = false,
  customClasses,
  type,
}) => {
  return (
    <button
      onClick={onClickHandler}
      disabled={disabled}
      type={type}
      className={`rounded-md py-2 px-5 font-semibold transition-all duration-200 ${
        disabled ? 'cursor-not-allowed bg-opacity-50' : 'cursor-pointer'
      } ${
        outline
          ? 'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white'
          : 'bg-primary text-black hover:bg-secondary'
      } ${customClasses}`}
    >
      {children ? (
        <div className="flex items-center gap-x-2">
          <span>{text}</span>
          {children}
        </div>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};

export default IconBtn;
