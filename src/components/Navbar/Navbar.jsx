import React, { useState } from 'react';
import './Navbar.css'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';


const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[60px]  px-4 bg-black text-gray-300'>
      <div className='flex justify-between align-center  px-5 py-5'>
        <div>
          <h1 className='font-thin text-2xl italic font-serif text-white'><span className='font-thin text-2xl italic font-serif'>A</span>bhay <span className='font-thin text-2xl italic font-serif text-white'>T</span>hakur</h1>
        </div>
        <ul className='hidden md:flex gap-x-8 text-1xl'>
          <li>
            <Link to="home" smoth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="about" smoth={true} duration={500}>About</Link>

          </li>
          <li>
            <Link to="skills" smoth={true} duration={500}>Skills</Link>

          </li>
          <li>
            <Link to="work" smoth={true} duration={500}>Work</Link>
          </li>
          <li>
            <Link to="contact" smoth={true} duration={500}>Blogs</Link>
          </li>
          <li>
            <Link to="contact" smoth={true} duration={500}>Contact</Link>
          </li>
          {/* <li>
            <button className="border">Hire me</button>
          </li> */}
        </ul>

        {/* {Hamburger} */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* { Mobile Menu} */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='home' smoth={true} duration={500}>Home</Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='about' smoth={true} duration={500}>About</Link>

          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='skills' smoth={true} duration={500}>Skills</Link>

          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='work' smoth={true} duration={500}>Work</Link>

          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link smoth={true} onClick={handleClick} to='blog' duration={500}>Blogs</Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='contact' smoth={true} duration={500}>Contact</Link>
          </li>
          <li className='py-6 text-4xl border'>
            <button>Hire me</button>

          </li>
        </ul>

        {/* {Social Icons} */}
        <div className="hidden fixed flex-col lg:flex left-0 top-[35%]">
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='/'
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='/'
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='/'
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='/'
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;