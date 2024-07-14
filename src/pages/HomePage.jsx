import React from 'react';
import ReferSection from '../components/Body/ReferSection';
import ReferStepSection from '../components/Body/ReferStepSection';
import ReferralForm from '../components/Body/ReferralForm';
import SectionNavbar from '../components/Body/SectionNavbar';

const HomePage = () => {
  return (
    <div className='w-full max-h-screen py-10'>
      <SectionNavbar />
      <ReferSection />
      <ReferStepSection />
      <ReferralForm />
    </div>
  );
};

export default HomePage;
