import React from 'react';

const SectionNavbar = () => {
  const navItems = ['Refer', 'Benefits', 'FAQs', 'Support'];
  return (
    <div className='flex justify-between items-center bg-[#1A73E81C] h-16 rounded-[38px] px-[52px] max-w-[797px] mx-auto'>
      {navItems.map((Item) => (
        <div
          key={Item}
          className='font-roboto font-normal text-2xl text-textColorGray'
        >
          {Item}
        </div>
      ))}
    </div>
  );
};

export default SectionNavbar;
