import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

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
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* Real-time Clock Display */}
        <div className=' text-[#5378d8] mb-5 '>
          Current Time: {currentTime} CST
        </div>

        <p className='text-md text-[#ceb373]'>Hello, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
          Onik Sisodiya
        </h1>
        <h2 className='text-4xl sm:text-6xl  text-[#666a77]'>
          An aspiring Software Engineer.
        </h2>
        <div>
        <Link to='work' smooth={true} duration={500}>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
