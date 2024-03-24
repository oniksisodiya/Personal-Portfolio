import React from 'react';

const About = () => {
  return (
   <section name='about' className='w-full h-screen bg-[#2E2E2E] text-[#F0E8D9]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#B89B7D]'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Onik Sisodiya, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              As a Software Engineering student at the University of Nebraska-Lincoln, I've earned a Global Excellence Scholarship and consistently made the Dean's List. My professional journey includes roles as a Software Developer Intern at Nightfox Audio Inc., an IT Assistant at ITS Huskertech, and a Teaching Assistant at UNL. I'm driven by the challenge of solving complex problems with innovative technology solutions.
            </p>  
          </div>
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