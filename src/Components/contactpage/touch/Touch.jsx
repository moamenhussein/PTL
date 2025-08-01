'use client';
import './touch.css';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { IoIosSend } from 'react-icons/io';
import { useState } from 'react';

export default function Touch() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section className="touch">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          className="contactus"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Contact us</h3>
          <h4>
            Reliable Power & MEP Solutions Backed by Over 15 Years of Regional
            Expertise at PTL
          </h4>
          <p>
            Since 2008, PTL has delivered reliable MEP and power transmission
            solutions across the UAE and Saudi Arabia, specializing in renewable
            energy, MV/LV systems, and complete electromechanical works with a
            focus on quality and safety.
          </p>
          <div className="social grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="content">
              <div>
                <FaPhoneAlt />
              </div>
              <div>
                <h5>Phone</h5>
                <h6>KSA : +966 54 755 4098</h6>
                <h6>UAE : +971 4 2599741</h6>
              </div>
            </div>
            <div className="content">
              <div>
                <MdOutlineMail />
              </div>
              <div>
                <h5>E-mail</h5>
                <h6>info@ptl.sa</h6>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="form"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Get in Touch</h2>
          <p>
            We're here to assist with all your Mechanical, Electrical, and
            Plumbing needs. Fill out the form below, and our team will respond
            promptly to help your next project.
          </p>
          <form
            action="https://formsubmit.co/moamenhussein2424@gmail.com"
            method="POST"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <input
                type="text"
                name="My Name Is :"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => {
                  const value = e.target.value;
                  const onlyLetters = /^[^0-9]*$/;
                  if (onlyLetters.test(value)) {
                    setName(value);
                  }
                }}
              />
              <input
                type="number"
                name="My Phone Is"
                required
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <input
                type="email"
                name="Email Is :"
                required
                placeholder="Your E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="Subject Is"
                required
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div>
              <textarea
                name="Message Is"
                placeholder="Type Message"
                className="w-full"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <input type="hidden" name="_captcha" value="false" />
            <button type="submit">
              Send Message <IoIosSend />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
