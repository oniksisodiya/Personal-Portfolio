import React from 'react';
import { data } from '../data/data.js';

const Work = () => {
  const project = data;

  return (
    <div
      name='work'
      className="w-full h-screen bg-[length:200%_200%] bg-gradient-to-r from-[#ffe4e1] via-[#add8e6] to-[#e6e6fa] dark:bg-gradient-to-r dark:from-[#1A202C] dark:via-[#2D3748] dark:to-[#4A5568] animate-movingBg text-lightText dark:text-darkText flex flex-col justify-center items-center"
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-secondary dark:border-primary'>
            PROJECTS
          </p>
        </div>

        {/* Container for projects */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className='shadow-lg shadow-lightShadow dark:shadow-darkShadow group container rounded-md min-h-[100px] 
                        flex justify-center items-center text-center mx-auto content-div overflow-hidden'
            >
              {/* Hover effect for images */}
              <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-2xl font-bold text-lightText dark:text-darkText tracking-wider'>
                  {item.name}
                </span>
                <div className='pt-4 text-center'>
                  <a href={item.github} target='_blank' rel='noopener noreferrer'>
                    <button
                      className='text-center rounded-lg px-4 py-3 m-2 bg-secondary dark:bg-primary text-darkText dark:text-lightText font-bold text-lg'
                    >
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
