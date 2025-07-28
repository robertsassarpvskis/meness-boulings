import { FaClock, FaBowlingBall, FaUtensils } from "react-icons/fa";
import image from '../assets/header.jpg';
import image2 from '../assets/bowling2.jpg';
import CardSmall from './CardSmall';

const ContactCards = () => {
  const cards = [
    {
      icon: <FaClock className="text-2xl" />,
      title: "Darba laiks",
      description: (
        <>
          Mēs esam atvērti katru dienu:<br/>
          Pirmdiena–Svētdiena: 12:00–00:00 (Piektdienās un sestdienās līdz 01:00)<br/>
          <small>NB! Personām līdz 18 gadiem ieeja pēc 23:00 nav atļauta.</small>
        </>
      ),
      highlight: "Atvērts katru dienu līdz pusnaktij",
      bgImage: image,
      link: "/meness-boulings/contact"
    },
    {
      icon: <FaUtensils className="text-2xl" />,
      title: "Atrašanās vieta un kontakti",
      description: (
        <>
          Rīga, Purvciems<br/>
          Vaidavas iela 4<br/>
          Tālrunis: +371 67 840 505 / +371 67 840 506<br/>
          E-pasts: info@bowling.lv
        </>
      ),
      highlight: "Sazinies ar mums vai apmeklē boulinga centru",
      bgImage: image2,
      link: "/meness-boulings/contact"
    },
    {
      icon: <FaBowlingBall className="text-2xl" />,
      title: "Cenas un apavu īre",
      description: (
        <>
          Boulinga celiņu īre no €23 līdz €40 par 2 stundām, atkarībā no laika.<br/>
          Apavu noma iekļauta (ja nepieciešams, €1 par pāri).<br/>
          Piedāvājam atlaides studentiem un abonementu iespējas.
        </>
      ),
      highlight: "Cenas bez pārsteigumiem un caurspīdīgas",
      bgImage: image,
      link: "/pricing"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
        {cards.map((card, index) => (
          <CardSmall key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ContactCards;
