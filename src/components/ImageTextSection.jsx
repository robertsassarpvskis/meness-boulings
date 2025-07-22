import React from 'react';
import { useTranslation } from 'react-i18next';
import GradientCard from './GradientCard';
import image from '../assets/header.jpg';

const ImageTextSection = () => {
  const { t } = useTranslation('home');
  const advantages = t('about_us.advantages.items', { returnObjects: true });

  return (
    <section className="relative py-16 px-4 sm:px-6 md:px-12 bg-transparent">
      {/* Decorative circles container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="
            absolute 
            top-[-20px] left-[-20px] 
            w-20 h-20 
            sm:w-36 sm:h-36 
            md:w-48 md:h-48
            bg-[#FDB927]/10 
            rounded-full 
            blur-3xl 
          "
        />
        <div
          className="
            absolute 
            bottom-[-20px] right-[-20px] 
            w-24 h-24 
            sm:w-40 sm:h-40 
            md:w-56 md:h-56
            bg-[#552583]/10 
            rounded-full 
            blur-3xl 
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
        {/* Image */}
        <div className="w-full lg:w-1/2 group rounded-2xl overflow-hidden shadow-lg max-h-[400px] sm:max-h-[500px] flex-shrink-0">
          <img
            src={image}
            alt={t('about_us.image_alt')}
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
          />
        </div>

        {/* Text content */}
        <div className="w-full lg:w-1/2 min-w-0">
          <h2 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bebeu font-extrabold text-[#552583] mb-8 leading-[1] text-start">
            <span>{t('about_us.title_start')} </span>
            <span className="text-[#df9427] drop-shadow-sm">{t('about_us.title_accent')}</span>
          </h2>




          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            {t('about_us.description.part1')}{' '}
            <span className="text-[#552583] font-semibold">"{t('about_us.description.highlight')}"</span>{' '}
            {t('about_us.description.part2')}
          </p>

          <GradientCard>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#FDB927] pb-2">
              {t('about_us.advantages.title')}
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-start mt-1 sm:mt-2">
                  <span className="text-[#FDB927] mr-2 text-lg sm:text-xl">•</span>
                  <span className="text-[#FDB927]">
                    <strong>{item.strong}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </GradientCard>

          <p className="text-gray-700 text-base sm:text-lg mt-6 leading-relaxed">
            {t('about_us.description.part3')}
          </p>

          <div className="flex flex-wrap gap-4 mt-6 sm:mt-8">
            <a 
              className="bg-[#552583] hover:bg-[#552583]/90 text-white font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-xl transition-all duration-300 shadow-md" 
              href="/contact"
            >
              {t('about_us.buttons.reserve')}
            </a>
            <a 
              className="bg-transparent hover:bg-[#552583]/10 text-[#552583] font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-xl border-2 border-[#552583] transition-all duration-300"
              href="#"
            >
              {t('about_us.buttons.learn_more')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
