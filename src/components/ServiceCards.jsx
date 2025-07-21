import { FaClock, FaUtensils, FaBowlingBall } from "react-icons/fa";
import image from '../assets/header.jpg';
import image2 from '../assets/bowling2.jpg';
import image3 from '../assets/billiard.jpg';
import CardSmall from './CardSmall';
import { useTranslation } from 'react-i18next';

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

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <CardSmall key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;