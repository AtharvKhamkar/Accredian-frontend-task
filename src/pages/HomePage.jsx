import React from 'react';
import { useSelector } from 'react-redux';
import ReferSection from '../components/Body/ReferSection';
import ReferStepSection from '../components/Body/ReferStepSection';
import SectionNavbar from '../components/Body/SectionNavbar';
import { selectToken } from '../features/auth/authSlice';
import WelcomePage from './WelcomePage';

const HomePage = () => {
  const token = useSelector(selectToken);

  let isLoggedIn = token ? true : false;
  return !isLoggedIn ? (
    <WelcomePage />
  ) : (
    <div className='w-full max-h-screen py-10'>
      <SectionNavbar />
      <ReferSection />
      <ReferStepSection />
    </div>
  );
};

export default HomePage;
