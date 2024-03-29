import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Kotlin from '../assets/Kotlin logo 250.png';
import GitHub from '../assets/github.png';
import Python from '../assets/Python 250.png';
import Java from "../assets/Java icon 250.png"
// bg-[#0a192f]
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#2E2E2E] text-[#F0E8D9]'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#B89B7D]'>Skills</p>
            <p className='py-4'>These are some technologies that I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#1E1E2E] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#1E1E2E] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#1E1E2E] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#1E1E2E] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#1E1E2E] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#1E1E2E] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                <p className='my-4'>PYTHON</p>
            </div>
            <div className='shadow-md shadow-[#1E1E2E] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                <p className='my-4'>JAVA</p>
            </div>
            <div className='shadow-md shadow-[#1E1E2E] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Kotlin} alt="Kotlin icon" />
                <p className='my-4'>KOTLIN</p>
            </div>
        </div>
    </div>
  </div>
);
};
export default Skills;
