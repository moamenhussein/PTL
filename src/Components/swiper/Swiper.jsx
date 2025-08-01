'use client';
import './swiper.css';
import image1 from '../../assets/images/swiper/image1.webp';
import image2 from '../../assets/images/swiper/image2.webp';
import image3 from '../../assets/images/swiper/image3.webp';
import image4 from '../../assets/images/swiper/image4.webp';
import image5 from '../../assets/images/swiper/image5.webp';
import image6 from '../../assets/images/swiper/image6.webp';
import image7 from '../../assets/images/swiper/image7.webp';
import image8 from '../../assets/images/swiper/image8.webp';
import image9 from '../../assets/images/swiper/image9.webp';
import { motion } from 'framer-motion';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function SwiperClients() {
  const clients = [
    {
      id: 1,
      img: image1,
      name: 'Faisal Al-Mutairi',
      paragraph:
        'Working with PTL was a great experience. Their commitment to quality and timely delivery really stood out. I would definitely work with them again.',
    },
    {
      id: 2,
      img: image2,
      name: 'Khalid Al-Mansoori',
      paragraph:
        'PTL demonstrated exceptional professionalism throughout our project. Their team was responsive, efficient, and highly skilled in power transmission works.',
    },
    {
      id: 3,
      img: image3,
      name: 'Abdullah Al-Dosari',
      paragraph:
        'I was impressed with PTL’s ability to handle complex projects with ease. Their engineering team knows exactly what they’re doing and executes perfectly.',
    },
    {
      id: 4,
      img: image4,
      name: 'Omar Al-Mahri',
      paragraph:
        'The PTL team was highly cooperative and skilled. They handled our project with dedication and delivered impressive outcomes.',
    },
    {
      id: 5,
      img: image5,
      name: 'Mansour Al-Fahad',
      paragraph:
        'PTL is a trusted partner. They combine technical expertise with strong project management. We’re very happy with their performance.',
    },
    {
      id: 6,
      img: image6,
      name: 'Salem Al-Naimi',
      paragraph:
        "One of the most reliable contractors we've dealt with. PTL delivered everything on time, with great attention to detail and safety standards.",
    },
    {
      id: 7,
      img: image7,
      name: 'Hamad Al-Sabah',
      paragraph:
        'PTL’s professionalism and commitment were remarkable. Every phase of the project was managed smoothly, and the results were outstanding.',
    },
    {
      id: 8,
      img: image8,
      name: 'Yousef Al-Mansoori',
      paragraph:
        'PTL delivered high-quality results and exceeded our expectations. The team maintained clear communication and showed strong technical knowledge.',
    },
    {
      id: 9,
      img: image9,
      name: 'Nasser Al-Harbi',
      paragraph:
        'Excellent service from start to finish. PTL’s team was always available, professional, and committed to delivering high standards of work.',
    },
  ];

  return (
    <section className="swiper">
      <div className="container">
        <motion.div
          className="headingtitle"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-6xl">What Our Clients Say</h3>
        </motion.div>
        <div className="swipercontent">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="client-slide text-black p-4 rounded-lg shadow-md h-full">
                  <img
                    src={client.img.src}
                    alt={client.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h4 className="font-bold text-lg mb-2">{client.name}</h4>
                  <p className="text-sm">{client.paragraph}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
