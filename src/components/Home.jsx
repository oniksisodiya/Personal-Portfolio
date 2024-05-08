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
//   smoothest animation for light mode className="w-full h-screen bg-[length:200%_200%] bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4] to-[#fbc2eb] dark:bg-gradient-to-r dark:from-darkGradient dark:via-[#2D3748] dark:to-[#4A5568] animate-movingBg text-lightText dark:text-darkText"
// amother smoothest animation for light mode className="w-full h-screen bg-[length:200%_200%] bg-gradient-to-r from-[#ffe4e1] via-[#add8e6] to-[#e6e6fa] dark:bg-gradient-to-r dark:from-darkGradient dark:via-[#2D3748] dark:to-[#4A5568] animate-movingBg text-lightText dark:text-darkText"
// lines animation       className="w-full h-screen bg-[length:200%_200%] bg-gradient-to-r from-lightGradient to-lightGradient dark:bg-gradient-to-r dark:from-darkGradient dark:to-darkGradient animate-movingBg text-lightText dark:text-darkText"

  return (
    <main
      name="home"
      className="w-full h-screen bg-[length:200%_200%] bg-gradient-to-r from-[#ffe4e1] via-[#add8e6] to-[#e6e6fa] dark:bg-gradient-to-r dark:from-[#1A202C] dark:via-[#2D3748] dark:to-[#4A5568] animate-movingBg text-lightText dark:text-darkText">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <header className="flex justify-between items-center mb-5">
          <p>Current Time: {currentTime}</p>
        </header>
        <section>
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
