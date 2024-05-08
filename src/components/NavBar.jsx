import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaGitlab,
  FaFacebook,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Resume from '../assets/resume/Onik Sisodiya resume.pdf';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
 // const [_work, setWork] = useState(false);
 // const hiddenWorkBtn = () => setWork(!_work)
// lines animation       className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[length:200%_200%] bg-gradient-to-r from-lightGradient to-lightGradient dark:bg-gradient-to-r dark:from-darkGradient dark:to-darkGradient animate-movingBg text-lightText dark:text-darkText shadow-lg">

  return (
    <div
    className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[length:200%_200%] bg-gradient-to-r from-[#ffe4e1] via-[#add8e6] to-[#e6e6fa] dark:bg-gradient-to-r dark:from-[#1A202C] dark:via-[#2D3748] dark:to-[#4A5568] animate-movingBg text-lightText dark:text-darkText shadow-lg"
    >
      
      {/* Logo */}
      <div>
        <h1 className='text-5xl font-signature ml-2'>OS</h1>
      </div>

      {/* Desktop Menu and Dark Mode Toggle */}
      <div className='flex items-center space-x-4'>
        <ul className='hidden md:flex space-x-4'>
          {['home', 'about', 'skills', 'work', 'contact'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className='hover:text-primary dark:hover:text-secondary'
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        {/* Dark Mode Toggle */}
        <DarkModeToggle />
      </div>

      {/* Hamburger Menu Icon */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-lightBg dark:bg-darkBg flex flex-col justify-center items-center'
        }
      >
        {['home', 'about', 'skills', 'work', 'contact'].map((section) => (
          <li key={section} className='py-6 text-4xl'>
            <Link
              onClick={handleClick}
              to={section}
              smooth={true}
              duration={500}
              className='hover:text-primary dark:hover:text-secondary'
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Media Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/oniksisodiya7/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.facebook.com/onik.sisodiya/'
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/oniksisodiya'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://git.unl.edu/users/osisodiya2/projects'
            >
              Gitlab <FaGitlab size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:oniksisodiya7@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={Resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
