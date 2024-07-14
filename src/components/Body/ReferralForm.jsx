import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../features/auth/authSlice';
import { fetchCourses } from '../../features/courses/courseRequest';
import { selectCourses } from '../../features/courses/courseSlice';
import { addReferral } from '../../features/referral/referralRequest';
import Input from '../Input';
import Select from '../Select';
import { Button } from '../index';

const ReferralForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');
  const [courseLoading, setCourseLoading] = useState(false);

  const auth = useSelector(selectAuth);
  const token = auth?.token;

  useEffect(() => {
    const getCourses = async () => {
      setCourseLoading(true);
      await dispatch(fetchCourses({ token }));
      setCourseLoading(false);
    };

    if (token) {
      getCourses();
    }
  }, [dispatch, token]);

  //   if (courseLoading) {
  //     return <p>Loading....</p>;
  //   }

  const allCourses = useSelector(selectCourses);
  console.log(allCourses);

  const sendReferral = (data) => {
    setError('');
    console.log(data);
    try {
      dispatch(addReferral({ token, ...data }));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='w-full min-h-screen py-8'>
      <div className='flex bg-[#B7D1FF] flex-col justify-center rounded-lg mx-auto p-4'>
        <p className='text-start text-md font-bold text-textColorDark'>
          Welcome to Accredian.
        </p>
        {error && <p className='text-red-500 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(sendReferral)}>
          <div className='space-y-5'>
            <Input
              label='Referee Name'
              placeholder='Enter your referee name'
              type='text'
              {...register('referee_name', {
                required: true,
              })}
            />
            <Input
              label='Referee Email'
              placeholder='Enter your referee email'
              type='email'
              {...register('referee_email', {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    'Email address must be a valid address',
                },
              })}
            />
            <Input
              label='Referee Mobile Number'
              placeholder='Enter referee mobile number'
              type='text'
              {...register('referee_mobile_no', {
                required: true,
              })}
            />
            <Input
              label='Relation'
              placeholder='Enter your relation with referee'
              type='text'
              {...register('relation', {
                required: true,
              })}
            />
            <Select
              label='Course Name'
              placeholder='Select course'
              options={allCourses}
              {...register('course_name', { required: true })}
            />
            <Button
              children='Add Referral'
              type='submit'
              className='justify-center'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferralForm;
