import React from 'react';
import { Link } from 'react-router-dom';
import { company_logo, down_arrow } from '../../assets/index';
import { Button } from '../index';

const Header = () => {
  const navItems = [
    {
      name: 'Refer & Earn',
      slug: '/refer',
    },
    {
      name: 'Resources',
      slug: '/resources',
    },
    {
      name: 'About Us',
      slug: '/about',
    },
  ];
  return (
    <header className='px-[280px] py-[9.6px] h-[60px] flex items-center'>
      <div className='w-full flex justify-between items-center py-2.5'>
        <div className='flex'>
          <Link to={'/'} className='mr-4'>
            <img
              src={company_logo}
              alt='company-logo'
              className='h-9 w-[125px]'
            />
          </Link>
          <div className='w-[116px] justify-start ml-4'>
            <Button
              children={
                <div className='flex gap-1 items-center'>
                  <span>Courses</span>
                  <img src={down_arrow} alt='down-arrow' className='h-4 w-4' />
                </div>
              }
            />
          </div>
        </div>
        <div className='flex justify-between items-center gap-8'>
          {navItems.map((item) => (
            <Link
              to={item.slug}
              className='font-[500] text-base text-textColorDark font-inter'
            >
              {item.name}
            </Link>
          ))}
          <div className='flex gap-4 items-center'>
            <Link>
              <Button children='Login' />
            </Link>
            <Link>
              <Button children='Try for free' />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
