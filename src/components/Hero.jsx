import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  useEffect(() => {
    // Initialize Typed.js when the component mounts
    const options = {
      strings: ['BTB', 'BTC', 'SASS'],
      typeSpeed: 120,
      backSpeed: 140,
      loop: true,
    };

    const typed = new Typed('.your-typed-element', options);

    // Clean up Typed.js instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // Run the effect only once when the component mounts

  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='text-4xl font-bold md:text-7xl sm:text-6xl md:py-6'>Grow with data</h1>
        <div className='flex items-center justify-center'>
          <p className='py-4 text-xl font-bold md:text-5xl sm:text-4xl'>Fast, flexible financing for</p>
          <span className='pl-2 text-xl font-bold md:text-5xl sm:text-4xl your-typed-element'></span>
        </div>
        <p className='text-xl font-bold text-gray-500 md:text-5xl md:pl-4 l-2' >Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
