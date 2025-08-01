'use client';
import './gallerypage.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './gallerypage.css';
import ImageGallery from '@/Components/gallerypagecomponent/imagegallery/ImageGallery';
export default function GalleryPage() {
  return (
    <>
      <section className="galleryPage">
        <motion.div
          className="container"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Gallery</h3>
          <p>Some of our Gallery photos</p>
          <div className="links">
            <Link href="/">Home</Link>
            <span> &gt; Gallery</span>
          </div>
        </motion.div>
      </section>
      <ImageGallery />
    </>
  );
}
