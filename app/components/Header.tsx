'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    setMenuOpen(false); 
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <header>
      <div className="letter" data-aos="fade-up">Aashra <span className="name">Saleem</span></div>

      <div className="menu" onClick={toggleMenu}>
        <FaBars />
      </div>

      <div>
        <ul id="navLinks" className={menuOpen ? 'show' : ''}>
          {['home', 'about', 'projects', 'skills', 'services', 'contact'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item}`}
                className={`nav-link link ${activeLink === item ? 'active' : ''}`}
                onClick={() => handleLinkClick(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
