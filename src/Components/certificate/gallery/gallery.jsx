'use client';
import { motion } from 'framer-motion';
import './gallery.css';
import Image from 'next/image';
import { IoEye } from 'react-icons/io5';
import { useState } from 'react';
import certificate1 from '../../../assets/images/certificate/certificate1.webp';
import certificate2 from '../../../assets/images/certificate/certificate2.webp';
import certificate3 from '../../../assets/images/certificate/certificate3.webp';
import certificate4 from '../../../assets/images/certificate/certificate4.webp';
import certificate5 from '../../../assets/images/certificate/certificate5.webp';
import certificate6 from '../../../assets/images/certificate/certificate6.webp';
import certificate7 from '../../../assets/images/certificate/certificate7.webp';
import certificate8 from '../../../assets/images/certificate/certificate8.webp';
import certificate9 from '../../../assets/images/certificate/certificate9.webp';
import certificate10 from '../../../assets/images/certificate/certificate10.webp';
import certificate11 from '../../../assets/images/certificate/certificate11.webp';
import certificate12 from '../../../assets/images/certificate/certificate12.webp';
import certificate13 from '../../../assets/images/certificate/certificate13.webp';
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const gallery = [
    { id: 1, img: certificate1 },
    { id: 2, img: certificate2 },
    { id: 3, img: certificate3 },
    { id: 4, img: certificate4 },
    { id: 5, img: certificate5 },
    { id: 6, img: certificate6 },
    { id: 7, img: certificate7 },
    { id: 8, img: certificate8 },
    { id: 9, img: certificate9 },
    { id: 10, img: certificate10 },
    { id: 11, img: certificate11 },
    { id: 12, img: certificate12 },
    { id: 13, img: certificate13 },
  ];
  return (
    <section className="gallery">
      <div className="container">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Certificates Gallery
        </motion.h2>
        <div className="gallerybox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((card) => (
            <motion.div
              className="galleryimage"
              key={card.id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image src={card.img} alt="Certificate" />
              <IoEye onClick={() => setSelectedImage(card.img)} />
            </motion.div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <Image
            src={selectedImage}
            alt="Preview"
            className="fullscreen-image"
          />
        </div>
      )}
    </section>
  );
}
