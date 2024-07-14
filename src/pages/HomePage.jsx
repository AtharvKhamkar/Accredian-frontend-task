import React from 'react';
import ReferSection from '../components/Body/ReferSection';
import ReferStepSection from '../components/Body/ReferStepSection';
import SectionNavbar from '../components/Body/SectionNavbar';

const HomePage = () => {
  return (
    <div className='w-full max-h-screen py-10'>
      <SectionNavbar />
      <ReferSection />
      <ReferStepSection />
    </div>
  );
};

export default HomePage;
