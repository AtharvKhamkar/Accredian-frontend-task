import React from 'react';

const Button = ({
  children,
  type = 'button',
  bgColor = 'bg-btnColor',
  textColor = 'text-[#FFFFFF]',
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`flex w-full rounded-md py-2 px-[18px] gap-4 ${bgColor} ${textColor} ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
