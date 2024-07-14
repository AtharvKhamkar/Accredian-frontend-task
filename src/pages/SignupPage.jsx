import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import { signupUser } from '../features/auth/authRequest';

const SignupPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [error, setError] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Signup = async (data) => {
    console.log(data);
    setError('');
    try {
        await dispatch(signupUser(data));
        navigate('/login')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='w-full min-h-screen bg-[#eeeeee] py-8'>
      <div className='w-1/2 bg-[#ffffff] flex flex-col justify-center rounded-lg mx-auto p-4'>
        <p className='text-start text-md font-bold text-textColorDark'>
          Welcome to Accredian.
        </p>
        {error && <p className='text-red-500 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(Signup)}>
          <div className='space-y-5'>
            <Input
              label='Full Name'
              placeholder='Enter your name'
              type='text'
              {...register('fullname', {
                required: true,
              })}
            />
            <Input
              label='Username'
              placeholder='Enter your username'
              type='text'
              {...register('username', {
                required: true,
              })}
            />
            <Input
              label='Email'
              placeholder='Enter your email'
              type='email'
              {...register('email', {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    'Email address must be a valid address',
                },
              })}
            />
            <Input
              label='Password'
              placeholder='Enter your password'
              type='password'
              {...register('password', {
                required: true,
              })}
            />
            <Button
              children='Signup'
              type='submit'
              className='justify-center'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
