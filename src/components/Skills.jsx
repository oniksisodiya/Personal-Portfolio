import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Kotlin from '../assets/Kotlin logo 250.png';
import GitHub from '../assets/github.png';
import Python from '../assets/Python 250.png';
import Java from '../assets/Java icon 250.png';

const Skills = () => {
  return (
    <div
      name='skills'
      className="w-full h-screen bg-[length:200%_200%] bg-gradient-to-r from-[#ffe4e1] via-[#add8e6] to-[#e6e6fa] dark:bg-gradient-to-r dark:from-[#1A202C] dark:via-[#2D3748] dark:to-[#4A5568] animate-movingBg text-lightText dark:text-darkText flex flex-col justify-center items-center"
    >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-secondary dark:border-primary'>
            Skills
          </p>
          <p className='py-4'>These are some technologies that I've worked with</p>
        </div>

        {/* Skill Cards */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {[{ name: 'HTML', icon: HTML }, { name: 'CSS', icon: CSS }, { name: 'JAVASCRIPT', icon: JavaScript }, { name: 'REACT', icon: ReactImg }, { name: 'GITHUB', icon: GitHub }, { name: 'PYTHON', icon: Python }, { name: 'JAVA', icon: Java }, { name: 'KOTLIN', icon: Kotlin }].map((skill, index) => (
            <div
              key={index}
              className='shadow-md shadow-lightShadow dark:shadow-darkShadow hover:scale-110 duration-500'
            >
              <img className='w-20 mx-auto' src={skill.icon} alt={`${skill.name} icon`} />
              <p className='my-4'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
