import React from 'react';
import { useTranslation } from 'react-i18next';
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
  
  // Format subtitle with proper line breaks
  const formattedSubtitle = t('hero.subtitle').replace(/\\n/g, '\n');

  return (
    <>
      <Hero
        title={t('hero.title')}
        highlight={t('hero.highlight')}
        subtitle={formattedSubtitle}
        backgroundClass="header-1"
      />

      <div className="p-6 text-center bg-[#fed273] min-h-screen flex flex-col items-center">
        <ImageTextSection />
        <ServiceCards />
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-6xl font-bold text-[#552583] mb-8 text-center mt-12 font-bebeu">
            <span className="text-[#552583]">{t('our_center.first_word')}</span> {t('our_center.second_word')}
          </h2>
          <GallerySwiper galerijasAtteli={galerijasAtteli} />
        </div>
        <ReservationSection />
        <Map />
      </div>
    </>
  );
}