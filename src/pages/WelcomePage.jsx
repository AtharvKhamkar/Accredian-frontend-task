import React from 'react';
import { Link } from 'react-router-dom';
import { welcome_logo } from '../assets/index';
import Button from '../components/Button';

const WelcomePage = () => {
  return (
    <div className='bg-[#eeeeee] w-full min-h-screen py-[5%]'>
      <div className='flex flex-col justify-center w-3/4 h-2/3 bg-[#ffffff] mx-auto rounded-lg px-4 py-[2%]'>
        <div className='flex justify-between gap-2 p-1'>
          <div className='flex flex-col justify-around'>
            <p className='font-bold text-7xl'>
              Welcome to <span className='text-btnColor'>accredian</span>
              <p className='text-2xl py-2 text-gray-600'>Unlock Dream Career</p>
            </p>
            <div className='flex flex-col gap-4'>
              <Link to='/signup'>
                <Button
                  children='Get Started Now'
                  className='text-2xl w-full justify-center'
                />
              </Link>
              <Link to='/login'>
                <Button
                  children='Login'
                  className='text-2xl w-full justify-center'
                />
              </Link>
            </div>
          </div>

          <img src={welcome_logo} alt='welcome-svg' className='w-[50%]' />
        </div>
        <div className='flex'></div>
      </div>
    </div>
  );
};

export default WelcomePage;
