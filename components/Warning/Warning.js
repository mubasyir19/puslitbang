import Image from 'next/image';
import React from 'react';

export default function Warning() {
  return (
    <div className='bg-[#FF4444] p-3 rounded-full fixed bottom-5 right-5'>
      <Image src='/images/warning.png' width={55} height={50} className='w-10 h-10' alt='warning' />
    </div>
  );
}
