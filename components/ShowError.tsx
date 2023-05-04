import React from 'react';

export default function ShowError(err: string) {
  return (
    <>
      <div
        className='p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400  mx-auto'
        role='alert'
      >
        <span className='font-medium'>Error: {err}</span>
      </div>
    </>
  );
}
