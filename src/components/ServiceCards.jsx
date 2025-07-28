import React, { useEffect, useState } from 'react';
import { FaClock, FaUtensils, FaBowlingBall } from "react-icons/fa";
import image from '../assets/header.jpg';
import image2 from '../assets/bowling2.jpg';
import image3 from '../assets/billiard.jpg';
import CardSmall from './CardSmall';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const ServiceCards = () => {
  const { t } = useTranslation('home');

  const cards = [
    {
      icon: <FaBowlingBall className="text-2xl" />,
      title: t('services.pricing.title'),
      description: t('services.pricing.description'),
      highlight: t('services.pricing.highlight'),
      bgImage: image,
      link: "/price"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: t('services.hours.title'),
      description: t('services.hours.description'),
      highlight: t('services.hours.highlight'),
      bgImage: image2,
      link: "/contact"
    },
    {
      icon: <FaUtensils className="text-2xl" />,
      title: t('services.menu.title'),
      description: t('services.menu.description'),
      highlight: t('services.menu.highlight'),
      bgImage: image3,
      link: "/"
    }
  ];

  // State to track window width
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Condition: If window width >= 1024 (large screen), show static cards (no Swiper)
  const isLargeScreen = windowWidth >= 1024;

  return (
    <div className="max-w-7xl mx-auto py-24 relative">
      {isLargeScreen ? (
        <div className="grid grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <CardSmall key={index} {...card} />
          ))}
        </div>
      ) : (
  
        <div className="relative z-10 min-h-[420px]">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
              renderBullet: (index, className) =>
                `<span class="${className} custom-bullet"></span>`,
            }}
            spaceBetween={24}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="relative z-10"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="h-full min-h-[420px] flex">
                  <CardSmall {...card} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows positioned below swiper */}
          <div className="absolute top-[95%] w-full mt-4 flex justify-between px-6">
            <div className="swiper-button-prev-custom custom-arrow left-30">❮</div>
            <div className="swiper-button-next-custom custom-arrow right-30">❯</div>
          </div>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom mt-16 flex justify-center gap-2" />
        </div>

      )}

      {/* Custom Styles */}
      <style jsx>{`
    .custom-bullet {
        width: 20px;
        height: 5px;
        display: inline-block;
        background-color: #7b4fe8;
        border-radius: 3px;
        transition: all 0.3s ease;
        opacity: 0.5;
    }

    @media (min-width: 640px) {
      .custom-bullet {
        width: 28px;
        height: 6px;
      }
    }

    .swiper-pagination-bullet-active.custom-bullet {
        background-color: #ef7d02;
        width: 32px;
        opacity: 1;
    }

    @media (min-width: 640px) {
      .swiper-pagination-bullet-active.custom-bullet {
        width: 44px;
      }
    }

    .custom-arrow {
        position: absolute;
        transform: translateY(-50%);
        background: #552583;
        color: #FDB927;
        padding: 0.75rem;
        font-size: 1.75rem;
        font-weight: bold;
        border: 3px solid #FDB927;
        border-radius: 9999px;
        box-shadow: 0 0 20px rgba(253, 185, 39, 0.7);
        cursor: pointer;
        z-index: 20;
        transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
      }

    @media (min-width: 640px) {
      .custom-arrow {
        padding: 1.25rem;
        font-size: 2rem;
      }
    }

    .custom-arrow:hover {
        transform: translateY(-50%) scale(1.15);
        background: #6d3fc9;
        box-shadow: 0 0 30px rgba(253, 185, 39, 0.9);
    }
    `}</style>
    </div>
  );
};

export default ServiceCards;
