'use client';
import React from 'react';
import Image from 'next/image';
import profileImage from '../../public/images/image.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="about" id="about" data-aos="fade-up">
      <div className="image about-img">
        <Image src={profileImage} alt="Aashra" />
      </div>
      <div className="about-text">
        <h1>About <span className="highlight">Me</span></h1>
        <h2 className="name">Frontend Web Developer</h2>
        <p>
          I am a passionate web developer with a strong foundation in
          programming languages and frameworks. My expertise lies in creating
          dynamic and responsive web applications that provide seamless user
          experiences. I am constantly exploring new technologies and
          methodologies to enhance my skills and deliver high-quality solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
