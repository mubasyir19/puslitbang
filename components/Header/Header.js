import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Header() {
  return (
    <section
      className='h-60 w-full px-5 lg:px-28 bg-cover bg-center bg-fixed flex justify-center items-center'
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/background.png')",
      }}
    >
      <div className='flex gap-x-3 text-2xl text-white font-bold' style={poppins.style}>
        <p className=''>Beranda</p>
        <svg className='my-auto' width='7' height='7' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='3.5' cy='3.5' r='3.5' fill='white' />
        </svg>
        <p>Meteorologi</p>
      </div>
    </section>
  );
}
