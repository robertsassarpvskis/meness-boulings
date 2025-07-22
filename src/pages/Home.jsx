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

      <div className="p-6 bg-[#fed273] min-h-screen">
        <ImageTextSection />
        <ServiceCards />
        
        <div className="max-w-7xl mx-auto mb-40 ">
          <div className="max-w-7xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center font-bebeu leading-tight">
              <span className="text-[#552583] drop-shadow-sm">{t('our_center.first_word')}</span>{' '}
              <span className="text-[#df9427] drop-shadow-sm">{t('our_center.second_word')}</span>
            </h2>
          </div>



          <div className="rounded-3xl overflow-hidden  bg-transparent">
            <GallerySwiper galerijasAtteli={galerijasAtteli} />
          </div>
        </div>


        <ReservationSection />
        <Map />
      </div>

    </>
  );
}