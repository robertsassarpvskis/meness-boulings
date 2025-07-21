import React from 'react';
import { useTranslation } from 'react-i18next';
import GradientCard from './GradientCard';
import image from '../assets/header.jpg';

const ImageTextSection = () => {
  const { t } = useTranslation('home');
  const advantages = t('about_us.advantages.items', { returnObjects: true });

  return (
    <section className="relative py-16 px-6 md:px-12 bg-transparent">
      {/* Decorative circles */}
      <div className="absolute top-[-60px] left-[-60px] w-48 h-48 bg-[#FDB927]/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-60px] right-[-60px] w-56 h-56 bg-[#552583]/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full lg:w-1/2 group rounded-2xl overflow-hidden shadow-lg">
          <img
            src={image}
            alt={t('about_us.image_alt')}
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
          />
        </div>

        {/* Text content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl sm:text-6xl font-bebeu font-extrabold text-[#552583] mb-6">
            {t('about_us.title')}
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {t('about_us.description.part1')}{' '}
            <span className="text-[#552583] font-semibold">"{t('about_us.description.highlight')}"</span>{' '}
            {t('about_us.description.part2')}
          </p>

          <GradientCard>
            <h3 className="text-2xl font-semibold text-[#FDB927] pb-2">
              {t('about_us.advantages.title')}
            </h3>
            <ul className="space-y-2 text-gray-800">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-start mt-2">
                  <span className="text-[#FDB927] mr-2 text-xl">•</span>
                  <span className="text-[#FDB927]">
                    <strong>{item.strong}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </GradientCard>

          <p className="text-gray-700 text-lg mt-6 leading-relaxed">
            {t('about_us.description.part3')}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a 
              className="bg-[#552583] hover:bg-[#552583]/90 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-md" 
              href="/contact"
            >
              {t('about_us.buttons.reserve')}
            </a>
            <a 
              className="bg-transparent hover:bg-[#552583]/10 text-[#552583] font-bold py-3 px-8 rounded-xl border-2 border-[#552583] transition-all duration-300"
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