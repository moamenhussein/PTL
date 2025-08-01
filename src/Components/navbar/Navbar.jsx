'use client';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import Image from 'next/image';
import LogoImage from '../../assets/images/logo/logo.webp';
import './navbar.css';
export default function Navbar() {
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => setMenu((prev) => !prev);
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Projects', href: '/projectDetails' },
    { title: 'Gallery', href: '/gallerypage' },
    { title: 'Our Team', href: '/team' },
    { title: 'Certificates', href: '/certificates' },
  ];
  return (
    <header>
      <nav
        aria-label="Main Navigation"
        className="bg-white fixed top-0 left-0 w-full z-50 shadow"
      >
        <div className="container flex justify-between items-center h-[80px] mx-auto px-4">
          <div>
            <Link href="/">
              <Image src={LogoImage} alt="Logo Image" priority   />
            </Link>
          </div>
          <div
            className={`uls z-50 flex items-start px-5 py-10 transition-all duration-500 ease-in-out
              md:static md:min-h-fit md:w-auto md:flex-row md:items-center md:gap-[3vw] md:bg-transparent
              absolute top-[80px] min-h-[50%] w-full bg-[#f7f7ff] ${
                menu ? '-left-full' : 'left-0'
              }`}
          >
            <ul className="flex flex-col md:flex-row gap-8 md:gap-[2vw] md:text-black w-full md:w-auto">
              {navItems.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="block w-full md:w-auto hover:bg-[#000080] md:hover:bg-[#f15a24] hover:text-white md:hover:text-white px-2 py-1 transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="contact text-white font-medium hover:underline"
            >
              Contact Us
            </Link>
            <button
              onClick={toggleMenu}
              aria-label={menu ? 'Open menu' : 'Close menu'}
              className="relative w-8 h-8 md:hidden focus:outline-none"
            >
              <FaBars
                className={`absolute cursor-pointer top-0 left-0 text-3xl transition-all duration-300 ${
                  menu
                    ? 'opacity-100 scale-100 rotate-0'
                    : 'opacity-0 scale-0 rotate-90'
                }`}
              />
              <IoMdClose
                className={`absolute cursor-pointer top-0 left-0 text-3xl transition-all duration-300 ${
                  menu
                    ? 'opacity-0 scale-0 rotate-90'
                    : 'opacity-100 scale-100 rotate-0'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
