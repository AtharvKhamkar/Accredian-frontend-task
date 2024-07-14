import React, { useId, useState } from 'react';

const Select = (
  { label, placeholder, options = [], className = '', ...props },
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
        >
          {`${label} : `}
        </label>
      )}
      <select
        ref={ref}
        {...props}
        id={id}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full p-2 border rounded-lg ${
          isFocused ? 'border-btnColor' : 'border-gray-300'
        } ${className}`}
      >
        <option value='' disabled selected>
          {placeholder}
        </option>
        {options &&
          options.map((option) => (
            <option key={option.id} value={option.course_name}>
              {option.course_name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select);
