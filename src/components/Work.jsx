import React from 'react';
import { data } from '../data/data.js';

const Work = () => {
  const project = data;

  return (
    <div
      name='work'
      className='w-full md:h-screen bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-secondary dark:border-primary'>
            PROJECTS
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Container for projects */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className='shadow-lg shadow-lightShadow dark:shadow-darkShadow group container rounded-md 
                        flex justify-center items-center text-center mx-auto content-div'
            >
              {/* Hover effect for images */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-lightText dark:text-darkText tracking-wider'>
                  {item.name}
                </span>
                <div className='pt-8 text-center'>
                  <a href={item.github} target='_blank' rel='noopener noreferrer'>
                    <button
                      className='text-center rounded-lg px-4 py-3 m-2
                                 bg-secondary dark:bg-primary text-darkText dark:text-lightText font-bold text-lg'
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
