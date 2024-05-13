import React from 'react';
import Personal from '../assets/resume/Personal.jpg';

const About = () => {
  return (
    <section
      name='about'
      className="w-full h-screen bg-[length:200%_200%] bg-gradient-to-r from-[#ffe4e1] via-[#add8e6] to-[#e6e6fa] dark:bg-gradient-to-r dark:from-[#1A202C] dark:via-[#2D3748] dark:to-[#4A5568] animate-movingBg text-lightText dark:text-darkText flex flex-col justify-center items-center"
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-secondary dark:border-primary'>
              Image Gallery
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <img class="h-auto object-contain rounded-lg " src={Personal} alt="Profile Pic"></img>
            <img class="h-auto object-contain rounded-lg " src={Personal} alt="Profile Pic"></img>
        </div>
      </div>
    </section>
  );
};

export default About;

/*
import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full'>
          <div className='pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-center w-full'>
              About
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-8 px-4'>
            <div className='text-xl font-bold'>
              <p>Hi. I'm Onik Sisodiya, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Hello! I'm Onik Sisodiya, a passionate Software Engineering student at the University of Nebraska-Lincoln...</p>
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4 py-8'>
            <div className='text-xl font-bold'>
              <p>Education & Achievements</p>
            </div>
            <div>
              <p>I embarked on my software engineering voyage at the University of Nebraska-Lincoln, where my academic performance earned me the prestigious Global Excellence Scholarship and a spot on the Dean’s List in the College of Engineering...</p>
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4 py-8'>
            <div className='text-xl font-bold'>
              <p>Skills & Expertise</p>
            </div>
            <div>
              <p>My technical skill set is comprehensive, encompassing programming languages like Java, JavaScript, Python, C, Kotlin, along with database management in MariaDB, MySQL, and NoSQL...</p>
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4 py-8'>
            <div className='text-xl font-bold'>
              <p>Professional Experience</p>
            </div>
            <div>
              <p>My professional journey includes impactful roles such as a Software Developer Intern at Nightfox Audio Inc., where I developed and enhanced virtual instruments and contributed significantly to product development and optimization...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
*/