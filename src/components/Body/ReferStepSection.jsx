import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import {
  Group_logo,
  Refer_Steps_Icon,
  Vector_logo,
  add_friend_logo,
} from '../../assets/index';
import Button from '../Button';
import ReferralForm from './ReferralForm';

const ReferStepSection = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className='flex flex-col justify-center items-center gap-10 bg-referSectionBg px-[280px] py-7'>
      <p className='font-roboto font-[600px] text-[28px] leading-[43px]'>
        How to I <span className='text-btnColor'>Refer?</span>
      </p>
      <div className='relative'>
        <img src={Refer_Steps_Icon} alt='refer-section-icon' />
        {/* First Circle */}
        <div className='absolute top-36 left-[14%] flex flex-col items-center justify-center'>
          <img src={add_friend_logo} alt='add-friend' className='mb-2' />
          <div className='max-w-[193px] text-center'>
            <p className='text-[16px] leading-[22px] font-roboto font-normal'>
              Submit referrals easily via our website's referral section
            </p>
          </div>
        </div>
        {/* Second Circle */}
        <div className='absolute top-36 left-[42%] flex flex-col items-center justify-center'>
          <img src={Vector_logo} alt='vector-logo' className='mb-2' />
          <div className='max-w-[193px] text-center'>
            <p className='text-[16px] leading-[22px] font-roboto font-normal'>
              Earn rewards once your referral joins an Accredian program.
            </p>
          </div>
        </div>
        {/* Third Circle */}
        <div className='absolute top-36 left-[70%] flex flex-col items-center justify-center'>
          <img src={Group_logo} alt='Group-logo' className='mb-2' />
          <div className='max-w-[193px] text-center'>
            <p className='text-[16px] leading-[22px] font-roboto font-normal'>
              Both parties receive a bonus 30 days after program enrollment.
            </p>
          </div>
        </div>
      </div>
      <Button
        children='Refer Now'
        className='justify-center max-w-[152px]'
        onClick={togglePopup}
      />
      <AnimatePresence>
        {isPopupVisible && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ReferralForm />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReferStepSection;
