'use client';
import React from 'react';
import { FaCode, FaBrain, FaPaintBrush } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // only animate once
    });
  }, []);
  return (
<section className="services-section" id="services" data-aos="fade-up">
      <h2 className="section-title">My <span className="highlight">Services</span></h2>
      <div className="services-container">
        <div className="service-card">
          <FaCode className="service-icon i w-full justify-center" />
          <h3>Web Development</h3>
          <p>
            I build modern and high-performance websites using Next.js,
            TypeScript & Tailwind.
          </p>
        </div>
        <div className="service-card">
          <FaBrain className="service-icon i w-full justify-center" />
          <h3>AI Apps</h3>
          <p>
            Interactive AI applications with Streamlit & Python to make complex
            things simple.
          </p>
        </div>
        <div className="service-card">
          <FaPaintBrush className="service-icon i w-full justify-center" />
          <h3>UI Customization</h3>
          <p>
            I design clean, aesthetic interfaces with beautiful animations and
            responsiveness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
