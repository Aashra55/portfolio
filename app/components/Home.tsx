'use client';
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebook, FaUser } from 'react-icons/fa';
import Image from 'next/image';
import profileImage from '../../public/images/image.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    
    const typed = new Typed('.auto-type', {
      strings: ['Frontend Developer', 'Next JS Developer', 'Python Enthusiast'],
      typeSpeed: 150,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy(); // cleanup
  }, []);

  return (
    <section className="home" id="home" data-aos="fade-up">
      <div className="part" id="part-one">
        <h1 className="start">Hey, I'm <span className="name">Aashra</span></h1>
        <h1 className="start">I'm a <span className="auto-type" /></h1>
        <p>
          I specialize in building dynamic and high-performance web applications
          using Next.js, TypeScript, and Python. I also develop interactive AI
          and data-driven apps with Streamlit, making complex ideas simple and engaging.
        </p>
        <ul className="social-icons">
          <li className="social-icon">
            <a href="https://www.linkedin.com/in/aashra-saleem-7047a0315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons-link"><FaLinkedinIn className='i h-i'/></a>
          </li>
          <li className="social-icon">
            <a href="https://github.com/Aashra55" className="icons-link"><FaGithub className='i h-i'/></a>
          </li>
          <li className="social-icon">
            <a href="https://twitter.com/AashraSaleem27" className="icons-link"><FaTwitter className='i h-i'/></a>
          </li>
          <li className="social-icon">
            <a href="https://facebook.com/aashrasaleem" className="icons-link"><FaFacebook className='i h-i'/></a>
          </li>
        </ul>
        <a href="#about">
          <button className="about-btn">
            <FaUser className='i'/>
            <span className="about-btn-txt">More About Me</span>
          </button>
        </a>
      </div>
      <div className="part" id="part-two">
        <div className="image" id="image">
        <Image
  src={profileImage}
  alt="Profile image"
  className="image-color"
  width={400}
  height={400}
/>        </div>
      </div>
    </section>
  );
};

export default Home;
