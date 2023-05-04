import React, { useEffect } from 'react';
import { signOutUser } from '@/api/user';
import Router from 'next/router';

export default function Signout() {
  useEffect(() => {
    signOutUser();
    Router.push('/auth/signin');
  }, []);
  return <div className='m-5'>Signing you out ...</div>;
}
