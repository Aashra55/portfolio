'use client';
import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGithub,
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiStreamlit, SiCplusplus } from 'react-icons/si';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const skills = [
    { name: 'HTML5',        icon: <FaHtml5 />,       slug: 'html5' },
    { name: 'CSS3',         icon: <FaCss3Alt />,     slug: 'css3' },
    { name: 'JavaScript',   icon: <FaJs />,          slug: 'javascript' },
    { name: 'TypeScript',   icon: <SiTypescript />,  slug: 'typescript' },
    { name: 'React.js',     icon: <FaReact />,       slug: 'reactjs' },
    { name: 'Next.js',      icon: <SiNextdotjs />,   slug: 'nextjs' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, slug: 'tailwind-css' },
    { name: 'Node.js',      icon: <FaNodeJs />,      slug: 'nodejs' },
    { name: 'Python',       icon: <FaPython />,      slug: 'python' },
    { name: 'Streamlit',    icon: <SiStreamlit />,   slug: 'streamlit' },
    { name: 'C++',          icon: <SiCplusplus />,   slug: 'cplusplus' },
    { name: 'GitHub',       icon: <FaGithub />,      slug: 'github' },
  ];

const Skills = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,     
        });
      }, []);
      
  return (
    <section className="skills-section" id="skills" data-aos="fade-up">
      <h2 className="skills-title">
        My <span className="highlight">Skills</span>
      </h2>
      <div className="skills-grid">
      {skills.map((skill, index) => {
  const slug = skill.name
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/ /g, '-')
    .replace(/_/g, '-')
    .replace(/\+/g, 'plus');

  return (
    <div key={index} className={`skill-card skill-${slug}`}>
      <div className="skill-icon">{skill.icon}</div>
      <p className="skill-name">{skill.name}</p>
    </div>
  );
})}
      </div>
    </section>
  );
};

export default Skills;
