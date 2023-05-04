import { getStore } from '@/api/user';
import React from 'react';
import { Store } from '@/types/types';

interface ShowUsersProps {
  store: Store;
}

export default function ShowUsers(props: ShowUsersProps) {
  const users = props.store.users;
  return (
    <>
      <ul className='max-w-md divide-y divide-gray-200 dark:divide-gray-700'>
        {users.map((user) => (
          <li className='pb-3 sm:pb-4' key={user.password}>
            <div className='flex items-center space-x-4'>
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium text-gray-900 truncate dark:text-black'>
                  {user.name}
                </p>
                <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                  {user.email}
                </p>
                <span className='h-1 w-full bg-slate-600'></span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
