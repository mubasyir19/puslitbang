import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer2() {
  return (
    <footer className='px-10 lg:px-36 pt-16 pb-4 mt-10 bg-background text-white'>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div>
          <Image src='/images/logo-bmkg.png' width={85} height={85} className='w-auto h-20' alt='logo' />
          <div className='mt-3.5 text-sm font-bold text-white'>
            <p>Badan Meteorologi</p>
            <p>Klimatologi Geofisika</p>
          </div>
        </div>
        <div className='mt-10 lg:mt-0 flex flex-col lg:flex-row gap-y-8 gap-x-16'>
          <div>
            <h3 className='text-lg underline leading-4 font-medium'>Meteorologi</h3>
            <div className='mt-8 flex flex-col gap-y-6 text-base'>
              <Link href='#'>InaNWP</Link>
            </div>
          </div>
          <div>
            <h3 className='text-lg underline leading-4 font-medium'>Klimatologi</h3>
            <div className='mt-8 flex flex-col gap-y-6 text-base'>
              <Link href='#'>InaRWC</Link>
              <Link href='#'>InaSHO</Link>
              <Link href='#'>InaAQM</Link>
            </div>
          </div>
          <div>
            <h3 className='text-lg underline leading-4 font-medium'>Geofisika</h3>
            <div className='mt-8 flex flex-col gap-y-6 text-base'></div>
          </div>
        </div>
      </div>
      <hr className='mt-20 w-full border-white' />
      <div className='mt-11 text-base text-center'>
        <p>© 2023 - Pusat Penelitian dan Pengembangan BMKG</p>
      </div>
    </footer>
  );
}
