'use client';
import './imagegallery.css';
import { motion } from 'framer-motion';
import project1 from '../../../assets/images/gallery/project1.webp';
import Image from 'next/image';
import { IoEye } from 'react-icons/io5';
import { useState } from 'react';
export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImage = [
    { id: 1, image: project1 },
    { id: 2, image: project1 },
    { id: 3, image: project1 },
    { id: 4, image: project1 },
    { id: 5, image: project1 },
    { id: 6, image: project1 },
    { id: 7, image: project1 },
    { id: 8, image: project1 },
    { id: 9, image: project1 },
  ];
  return (
    <section className="imageGallery">
      <div className="container">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Gallery
        </motion.h2>
        <div className="galleryImage grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImage.map((image) => (
            <motion.div
              className="image"
              key={image.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={image.image} alt="Gallery Image" />
              <IoEye onClick={() => setSelectedImage(image.image)} />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <motion.div
          className="imageModal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <Image src={selectedImage} alt="Full View" className="fullImage" />
        </motion.div>
      )}
    </section>
  );
}
