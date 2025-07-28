import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

import Hero from '../components/Header';
import ServiceCards from '../components/ServiceCards';
import Map from '../components/Map';
import ImageTextSection from '../components/ImageTextSection';
import ReservationSection from '../components/ReservationSection';
import GallerySwiper from '../components/about/GallerySwiper';

import image from '../assets/header.jpg';
import image2 from '../assets/bowling2.jpg';

export default function Home() {
  const { t } = useTranslation('home');
  const galerijasAtteli = [image, image2, image, image2, image, image2];

  const formattedSubtitle = t('hero.subtitle').replace(/\\n/g, '\n');

  const galleryRef = useRef(null);
  const isGalleryInView = useInView(galleryRef, { once: true, margin: '-100px' });

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <>
      <Hero
        title={t('hero.title')}
        highlight={t('hero.highlight')}
        subtitle={formattedSubtitle}
        backgroundClass="header-1"
      />

      <div className="p-6 bg-[#fed273] min-h-screen space-y-24">
        {/* ImageTextSection Motion */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <ImageTextSection />
        </motion.div>

        {/* Services */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <ServiceCards />
        </motion.div>

        {/* Gallery Heading */}
        <motion.div
          className="max-w-7xl mx-auto mb-8 md:mb-16 px-4 sm:px-6 lg:px-8"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center font-bebeu leading-tight">
            <span className="text-[#552583] drop-shadow-sm">{t('our_center.first_word')}</span>{' '}
            <span className="text-[#df9427] drop-shadow-sm">{t('our_center.second_word')}</span>
          </h2>
        </motion.div>

        {/* Gallery */}
        <motion.div
          ref={galleryRef}
          className="max-w-7xl mx-auto mb-40 rounded-3xl overflow-hidden bg-transparent"
          initial="hidden"
          animate={isGalleryInView ? 'visible' : 'hidden'}
          variants={fadeInVariants}
        >
          <GallerySwiper galerijasAtteli={galerijasAtteli} />
        </motion.div>

        {/* Reservation */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <ReservationSection />
        </motion.div>

        {/* Map */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Map />
        </motion.div>
      </div>
    </>
  );
}
