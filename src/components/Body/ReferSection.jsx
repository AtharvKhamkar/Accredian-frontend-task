import React from 'react';
import { ReferSection_Icon } from '../../assets/index';
import Button from '../Button';

const ReferSection = () => {
  return (
    <div
      className='flex justify-between bg-referSectionBg max-w-[1360px] mx-auto my-7 rounded-[28px] px-10 '
      style={{
        boxShadow: '0px 4px 65px 1px #00072B36',
      }}
    >
      <div className='flex flex-col justify-center gap-9'>
        <div className='flex flex-col justify-between'>
          <span className='font-roboto text-textColorDark text-[88px] leading-[88px] font-bold'>
            Let's Learn & Earn
          </span>
        </div>
        <div>
          <p className='font-roboto font-normal text-[40px] leading-[65px]'>
            Get a change to win <br /> up-to
            <span className='font-roboto font-bold text-[54px] leading-[65px] text-btnColor'>
              &nbsp;Rs. 15,000
            </span>
          </p>
        </div>
      </div>
      <div>
        <img src={ReferSection_Icon} alt='ReferSection' />
      </div>
    </div>
  );
};

export default ReferSection;
