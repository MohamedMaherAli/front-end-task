import { Store } from '@/types/types';
import noqodLogo from '../images/noqodLogo.svg';
import Link from 'next/link';

interface NavProps {
  store: { store: Store };
}

export default function Nav(props: NavProps) {
  return (
    <>
      <nav className='bg-white border-gray-200 dark:bg-gray-900'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
          <Link href='#' className='flex items-center'>
            <img src={noqodLogo.src} className='h-8 mr-3' alt='Noqod Logo' />
          </Link>

          <div className='flex items-center space-x-4'>
            <Link
              href='/auth/signin'
              className='text-sm  text-blue-600 dark:text-blue-500 hover:underline'
            >
              Sign in
            </Link>

            <Link
              href='/auth/signup'
              className='text-sm  text-blue-600 dark:text-blue-500 hover:underline'
            >
              Sign up
            </Link>

            <Link
              href='/auth/signout'
              className='text-sm  text-blue-600 dark:text-blue-500 hover:underline'
            >
              Sign out
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
