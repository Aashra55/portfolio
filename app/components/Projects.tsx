'use client';
import React from 'react';
import Image from 'next/image';
import chatbot from '../../public/images/chatbot.png';
import unitconverter from '../../public/images/unitconverter.png';
import resume from '../../public/images/resume.png';
import ecommerce from '../../public/images/ecommerce.png';
import blog from '../../public/images/blog.png';
import more from '../../public/images/more.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="projects-section" id="projects" data-aos="fade-up">
      <h2 className="section-title">My <span className="highlight">Projects</span></h2>
      <div className="projects-container">
        {[
          {
            img: chatbot,
            title: 'AI Chatbot',
            desc: 'An intelligent chatbot built using Streamlit and deep learning.',
            code: 'https://github.com/Aashra55/AI-Chatbot',
            live: 'https://ai-chatbot-nm5j66t5l4wrxexkzquqjz.streamlit.app/',
          },
          {
            img: unitconverter,
            title: 'Unit Converter',
            desc: 'Smart unit converter with NLP input and dropdowns using Streamlit.',
            code: 'https://github.com/Aashra55/Python-Projects/tree/main/Unit_Converter',
            live: 'https://python-projects-kmkfpfonuleqfzgv2modfw.streamlit.app/',
          },
          {
            img: resume,
            title: 'Resume',
            desc: 'A clean, desktop-friendly resume made with HTML, CSS, and JS.',
            code: 'https://github.com/Aashra55/static-resume',
            live: 'https://static-resume-seven-rust.vercel.app/',
          },
          {
            img: ecommerce,
            title: 'E-Commerce Website',
            desc: 'Website built with Next.js, TypeScript, and Tailwind CSS.',
            code: 'https://github.com/Aashra55/Marketplace-Builder-Hackathon-General-E-Commerce.git',
            live: 'https://marketplace-builder-hackathon-general-e-commerce-pwxr.vercel.app/',
          },
          {
            img: blog,
            title: 'Food Blog',
            desc: 'A beautiful and responsive food blog using Next.js and CMS.',
            code: 'https://github.com/Aashra55/NextJS-Projects/tree/main/blog_assignment_two',
            live: 'https://food-blog-5f3i3j7cp-aashra55s-projects.vercel.app/',
          },
          {
            img: more,
            title: 'More...',
            desc: 'Check out more of my projects and open-source work.',
            code: 'https://github.com/Aashra55',
            live: '',
          }
        ].map((project, index) => (
          <div className="project-card" key={index}>
            <Image src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-links">
  <a href={project.code} target="_blank" rel="noopener noreferrer">
    <FaGithub className="mr-1 text-white" /> Code
  </a>
  {project.live && (
    <a href={project.live} target="_blank" rel="noopener noreferrer">
      <FaArrowUpRightFromSquare className="mr-1 text-white" /> Live
    </a>
  )}
</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
