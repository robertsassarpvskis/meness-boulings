import { FaStar, FaBowlingBall, FaUsers, FaTrophy, FaHistory } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import image from '../assets/header.jpg';
import image2 from '../assets/bowling2.jpg';
import Hero from '../components/Header';
import GallerySwiper from "../components/about/GallerySwiper";
import ServiceCards from "../components/ServiceCards";

// Importē Swiper stilus
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Timeline from "../components/about/TimeLine";

const AboutPage = () => {
  const komandasDalibnieki = [
    {
      name: "Jānis Bērziņš",
      role: "Dibinātājs & Vadītājs",
      bio: "Profesionāls boulinga spēlētājs ar vairāk nekā 20 gadu pieredzi. Dibināja Mēness Boulingu 2010. gadā, lai dalītos ar savu aizraušanos.",
      image: image
    },
    {
      name: "Anna Ozola",
      role: "Operāciju Vadītāja",
      bio: "Nodrošina, ka mūsu celiņi darbojas nevainojami un katram viesim ir neaizmirstama pieredze.",
      image: image2
    },
    {
      name: "Māris Liepa",
      role: "Galvenais Mehāniķis",
      bio: "Mūsu boulinga burvis, kurš uztur visu aprīkojumu čempionāta stāvoklī.",
      image: image
    },
    {
      name: "Līga Kalniņa",
      role: "Pasākumu Koordinatorē",
      bio: "Padara katras dzimšanas dienas svinības un korporatīvos pasākumus neaizmirstamus.",
      image: image2
    }
  ];

  const galerijasAtteli = [
    image,
    image2,
    image,
    image2,
    image,
    image2
  ];

  const nozimegieNotikumi = [
    {
      year: "2010",
      event: "Mēness Boulinga Dibināšana",
      icon: <FaHistory className="text-2xl" />,
      description: "Atvērām pirmo vietni ar 12 celiņiem Rīgas centrā"
    },
    {
      year: "2014",
      event: "Čempionāta Norises Vieta",
      icon: <FaTrophy className="text-2xl" />,
      description: "Svinīgi uzņēmām pirmo valsts boulinga čempionātu"
    },
    {
      year: "2018",
      event: "Lielais Paplašinājums",
      icon: <FaBowlingBall className="text-2xl" />,
      description: "Paplašinājāmies līdz 24 celiņiem ar kosmiskā boulinga tehnoloģiju"
    },
    {
    year: "2022",
    event: "Kopienas Balva",
    icon: <FaUsers className="text-2xl" />,
    description: "Saņēmām pilsētas \"Labākā Ģimenes Izklaides Vieta\" balvu"
  }
];

  return (
    <>
      <Hero
        title="Mūsu"
        highlight="Vēsture"
        subtitle="Kur kosmiskā atmosfēra satiekas ar augstākās klases boulinga pieredzi"
        backgroundClass="header-2"
      />
      
      <div className="min-h-screen bg-[#fed273] py-4 px-4">
        {/* Ievada Sekcija */}
        <div className="max-w-7xl mx-auto mb-20 bg-[#552583]/80 rounded-3xl p-10 backdrop-blur-sm border border-[#FDB927]/20">
          <h2 className="text-5xl font-bebeu font-bold text-white mb-3 text-center">
            <span className="text-[#FDB927]">KAS MĒS</span> ESAM?
          </h2>
          <p className="text-white/90 text-center max-w-4xl mx-auto text-lg">
            Mēness Boulinga centrs ir vadošā boulinga vieta, kas apvieno modernas iespējas ar draudzīgu un jautru atmosfēru.
            Kopš 2010. gada mēs apkalpojam kopienu, piedāvājot ideālu vietu ģimeņu izklaidei,
            korporatīviem pasākumiem un konkurētspējīgām boulinga līgām.
          </p>
        </div>
        <ServiceCards />

        {/* Galerijas Sekcija ar Swiper */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-[#552583] mb-8 text-center">
            <span className="text-[#FDB927]">MŪSU</span> CENTRS
          </h2>
          
          <GallerySwiper galerijasAtteli={galerijasAtteli} />
        </div>

        {/* Komandas Sekcija */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-6xl font-bold font-bebeu  text-[#552583] mb-8 text-center">
          IEKOPJAM KOMANDU
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {komandasDalibnieki.map((dalibnieks, index) => (
              <div 
                key={index}
                className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(253,185,39,0.3)] transition-all duration-500 group h-full min-h-[400px] border-2 border-[#FDB927]"
              >
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${dalibnieks.image})` }}
                ></div>
                
                <div className="absolute inset-0 bg-gradient-to-b from-[#552583]/10 via-[#552583]/70 to-[#552583]/90 z-0"></div>
                
                <div className="p-8 h-full flex flex-col justify-end text-white relative z-10">
                  <h3 className="text-2xl font-bold mb-1">{dalibnieks.name}</h3>
                  <p className="text-[#FDB927] font-medium mb-4">{dalibnieks.role}</p>
                  <p className="text-white/90">{dalibnieks.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
          
        <div className="relative">
          {/* Laika līnija */}
          <Timeline items={nozimegieNotikumi} />
        </div>
        
        {/* Misijas Sekcija */}
        {/* <div className="max-w-7xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border-2 border-[#FDB927]">
          <h2 className="text-3xl font-bold text-[#552583] mb-6 text-center">
            <span className="text-[#FDB927]">MŪSU</span> MISIJA
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#552583] rounded-full flex items-center justify-center text-[#FDB927] text-3xl mx-auto mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold text-[#552583] mb-2">Kopiena</h3>
              <p className="text-[#552583]/90">Veidojam savienības caur kopīgu boulinga pieredzi</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#552583] rounded-full flex items-center justify-center text-[#FDB927] text-3xl mx-auto mb-4">
                <FaBowlingBall />
              </div>
              <h3 className="text-xl font-bold text-[#552583] mb-2">Ekselence</h3>
              <p className="text-[#552583]/90">Nodrošinām augstākās klases iespējas un servisu</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#552583] rounded-full flex items-center justify-center text-[#FDB927] text-3xl mx-auto mb-4">
                <FaStar />
              </div>
              <h3 className="text-xl font-bold text-[#552583] mb-2">Izklaide</h3>
              <p className="text-[#552583]/90">Radām neaizmirstamus prieka mirkļus</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default AboutPage;