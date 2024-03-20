import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // UseEffect hook to update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div name='home' className='w-full h-screen bg-[#3396cfb0]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* Real-time Clock Display */}
        <div className='text-black mb-5 '>
          Current Time: {currentTime} CST
        </div>

        <p className='text'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#435fa8]'>
          Onik Sisodiya
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#666a77]'>
          I'm an aspiring Software Engineer.
        </h2>
        <p className='text-[#9266b1] py-4 max-w-[700px]'>
          I’m a Junior pursuing Software Engineering at University of Nebraska-Lincoln
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
