'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    if (!form.name || !form.email || !form.message) {
      alert('All fields are required.');
      return false;
    }
    if (!isValidEmail(form.email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const clearForm = () => {
    setForm({ name: '', email: '', message: '' });
  };

  const sendEmail = (serviceId: string, templateId: string) => {
    emailjs.send(serviceId, templateId, form, '4pro9uiZiJeNK69-K')
      .then(() => {
        alert('Your message sent successfully!');
        clearForm();
      })
      .catch((err) => {
        console.error(err);
        alert('Something went wrong, please try again later.');
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      sendEmail('service_wo8z5x5', 'template_6zilg8q'); // To Aashra
      sendEmail('service_wo8z5x5', 'template_u0lcevg'); // To user
    }
  };

  return (
    <section className="contact-section" id="contact" data-aos="fade-up">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Get in <span className="highlight">Touch</span></h2>
          <p>
            Have a question, idea, or project in mind? Let's collaborate and
            create something amazing together!
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" id="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="email" id="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <textarea rows={5} id="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          <button type="submit">
            <FaPaperPlane className='i'/> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
