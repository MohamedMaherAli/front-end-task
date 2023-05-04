import React, { useState } from 'react';
import noqodLogo from '../../images/noqodLogo.svg';
import Link from 'next/link';
import { signInUser } from '@/api/user';
import Router from 'next/router';
import ShowError from '@/components/ShowError';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = signInUser(email, password);
    if (user) {
      Router.push('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <>
      <>
        <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <img
              className='mx-auto h-10 w-auto'
              src={noqodLogo.src}
              alt='Your Company'
            />
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-2'>
              Sign in to your account
            </h2>
          </div>
          {error && ShowError(error)}
          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='space-y-6' onSubmit={submitHandler}>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Email address
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete='email'
                    required
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:text-sm sm:leading-6 p-3'
                  />
                </div>
              </div>
              <div>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Password
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete='current-password'
                    required
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:text-sm sm:leading-6 p-3'
                  />
                </div>
              </div>
              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md bg-slate-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700'
                >
                  Sign in
                </button>
              </div>
            </form>
            <p className='mt-10 text-center text-sm text-gray-500'>
              Not a member?
              <Link
                href='/auth/signup'
                className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </>
    </>
  );
}
