import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main
      name="home"
      className="w-full h-screen bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <header className="flex justify-between items-center mb-5">
          <p>Current Time: {currentTime}</p>
        </header>
        <section>
          <p className="text-md text-secondary dark:text-primary">Hello, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold">Onik Sisodiya</h1>
          <h2 className="text-4xl sm:text-6xl">An aspiring Software Engineer.</h2>
        </section>
        
        <div className="mt-6">
          <Link to="work" smooth={true} duration={500}>
            <button
              className="overflow-hidden relative w-60 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
            >
              Hover me!
              <span
                className="absolute w-64 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
              ></span>
              <span
                className="absolute w-64 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
              ></span>
              <span
                className="absolute w-64 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
              ></span>
              <span
                className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
              >
                To See My Work!
              </span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;