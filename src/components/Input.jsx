import React, { useId, useState } from 'react';

const Input = (
  { label, placeholder, type = 'text', className = '', ...props },
  ref
) => {
  const id = useId();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className='w-full'>
      {label && (
        <label
          htmlFor={id}
          className='text-sm mb-1 text-textColorDark font-[500]'
        >{`${label} : `}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...props}
        id={id}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full p-2 border rounded-lg ${
          isFocused ? 'border-btnColor' : 'border-gray-300'
        } ${className}`}
      />
    </div>
  );
};

export default React.forwardRef(Input);
