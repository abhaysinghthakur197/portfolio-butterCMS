import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.jpeg';
import { Link } from "react-scroll";
import Image from 'react-bootstrap/Image';


const Home = () => {

  const imageStyle = {
    position: 'relative',
    borderRadius: '50%',
    width: '130px', // Set the desired width
    height: '110px',
    transform: 'scale(3)', 
    
    zIndex: 0 // This will make the image a circle; you can adjust the percentage for different levels of rounding
  };

  return (
    <div name="home" className='h-screen w-full bg-[#0a192f] mt-5'>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7ml font-bold text-white">
            I'am a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 4 years of experience in graphics design and web development.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next.js and Mongodb.
          </p>
          <div>
            <Link to="about" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div >
          {/* <img src={me} alt="my profile"  className='rounded-2xl mx-auto w-2/3 md:w-full'/> */}
          <Image src={me} alt="Example Image" style={imageStyle} />
        </div>
      </div>
    </div>
  );
};

export default Home;