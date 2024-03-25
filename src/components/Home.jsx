import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main name='home' className='w-full h-screen bg-[#2E2E2E]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <header className='text-[#B89B7D] mb-5'>
          <p>Current Time: {currentTime} </p>
        </header>
        <section>
          <p className='text-md text-[#CDBA96]'>Hello, My name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#F0E8D9]'>
            Onik Sisodiya
          </h1>
          <h2 className='text-4xl sm:text-6xl text-[#CDBA96]'>
            An aspiring Software Engineer.
          </h2>
        </section>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='group border-2 px-6 py-3 my-4 flex items-center text-[#B89B7D] border-[#B89B7D] hover:bg-[#D3C1A5] hover:border-[#D3C1A5] hover:text-[#2E2E2E]'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
