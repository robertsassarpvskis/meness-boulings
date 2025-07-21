import { FaBowlingBall, FaBirthdayCake, FaUsers, FaTrophy, FaCalendarAlt, FaGlassCheers } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import image from '../assets/header.jpg';
import image2 from '../assets/bowling2.jpg';
import Hero from '../components/Header';

// Importē Swiper stilus
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const PakalpojumuLapa = () => {
  const pakalpojumi = [
    {
      title: "Kosmiskais Boulings",
      icon: <FaBowlingBall className="text-3xl" />,
      description: "Gaismas efekti tumšā ar UV gaismu un neona krāsām",
      features: [
        "Piektdienas un sestdienu vakaros",
        "DJ izklaide",
        "Speciālie gaismas efekti",
        "Vecums 16+ pēc 21:00"
      ],
      image: image,
      cta: "Rezervēt Kosmisko Boulingu"
    },
    {
      title: "Dzimšanas Dienas Svinības",
      icon: <FaBirthdayCake className="text-3xl" />,
      description: "Visaptveroši svinību pakalpojumi",
      features: [
        "2 stundas boulinga",
        "Privāta celiņu zona",
        "Pielāgojamas ēdienu iespējas",
        "Dedzēts svinību vadītājs",
        "Tēmatiskas dekorācijas"
      ],
      image: image2,
      cta: "Plānot Savas Svinības"
    },
    {
      title: "Boulinga Līgas",
      icon: <FaTrophy className="text-3xl" />,
      description: "Sacensības visiem spēlētāju līmeņiem",
      features: [
        "Iknedēļas mači",
        "Handikapa sistēma",
        "Sezonas beigu turnīri",
        "Naudas balvas",
        "Komandu atlaides"
      ],
      image: image,
      cta: "Pievienoties Līgai"
    },
    {
      title: "Korporatīvie Pasākumi",
      icon: <FaUsers className="text-3xl" />,
      description: "Komandas veidošana un klientu izklaide",
      features: [
        "Pielāgoti turnīri",
        "Audio-vizuālā tehnika",
        "Keteringa iespējas",
        "Brandēšanas iespējas",
        "Dedzēts pasākumu koordinators"
      ],
      image: image2,
      cta: "Pieprasīt Piedāvājumu"
    }
  ];

  const galerijasAtteli = [
    { img: image, caption: "Kosmiskais Boulinga Vakars" },
    { img: image2, caption: "Dzimšanas Dienas Svinības" },
    { img: image, caption: "Līgu Turnīri" },
    { img: image2, caption: "Korporatīvā Komandas Veidošana" }
  ];

  const atsauksmes = [
    {
      quote: "Labākās dzimšanas dienas svinības! Bērniem ļoti patika kosmiskais boulings un personāls bija lielisks.",
      author: "Anna K., Rīga",
      rating: 5
    },
    {
      quote: "Mūsu uzņēmuma pasākums bija milzīgs panākums, pateicoties Mēness Boulinga komandai.",
      author: "Māris L., IT Uzņēmums",
      rating: 5
    },
    {
      quote: "Esmu spēlējis līgās šeit jau 3 gadus - labākie celiņi un kopiena Latvijā.",
      author: "Jānis B., Līgas Spēlētājs",
      rating: 5
    }
  ];

  return (
    <>
      <Hero
        title="Mūsu"
        highlight="Pakalpojumi"
        subtitle="Augstākās klases boulinga pieredze jebkurai gadījumam"
        backgroundClass="header-2"
      />
      
      <div className="min-h-screen bg-[#fed273] py-4 px-4">
        {/* Pakalpojumu Režģis */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-[#552583] mb-12 text-center">
            <span className="text-[#FDB927]">IZPĒTI</span> MŪSU PIEDĀVĀJUMUS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pakalpojumi.map((pakalpojums, index) => (
              <div 
                key={index}
                className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(253,185,39,0.3)] transition-all duration-500 group h-full min-h-[400px] border-2 border-[#FDB927]"
              >
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${pakalpojums.image})` }}
                ></div>
                
                <div className="absolute inset-0 bg-gradient-to-b from-[#552583]/10 via-[#552583]/70 to-[#552583]/90 z-0"></div>
                
                <div className="p-8 h-full flex flex-col justify-between relative z-10">
                  <div>
                    <div className="w-16 h-16 rounded-full bg-[#FDB927] flex items-center justify-center text-[#552583] mb-4">
                      {pakalpojums.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{pakalpojums.title}</h3>
                    <p className="text-[#FDB927] mb-4">{pakalpojums.description}</p>
                    <ul className="space-y-2 mb-6">
                      {pakalpojums.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-white/90">
                          <svg className="w-5 h-5 text-[#FDB927] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full py-3 px-6 bg-[#FDB927] text-[#552583] font-bold rounded-xl hover:bg-white transition-colors duration-300">
                    {pakalpojums.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Galerijas Sekcija */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-[#552583] mb-8 text-center">
            <span className="text-[#FDB927]">PAKALPOJUMU</span> GALERIJA
          </h2>
          
          <Swiper
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            effect={'fade'}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="rounded-3xl shadow-2xl"
          >
            {galerijasAtteli.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-96 md:h-[500px] w-full">
                  <img 
                    src={item.img} 
                    alt={item.caption} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#552583]/90 to-transparent flex items-end p-10">
                    <h3 className="text-2xl font-bold text-white">
                      {item.caption}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Atsauksmes */}
        <div className="max-w-7xl mx-auto mb-20 bg-[#552583]/80 rounded-3xl p-10 backdrop-blur-sm border border-[#FDB927]/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-[#FDB927]">KLIENTU</span> ATSAUKSMES
          </h2>
          
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
          >
            {atsauksmes.map((atsauksme, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/10 p-6 rounded-xl border border-[#FDB927]/20 h-full">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < atsauksme.rating ? 'text-[#FDB927]' : 'text-white/20'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/90 italic mb-4">"{atsauksme.quote}"</p>
                  <p className="text-[#FDB927] font-medium">— {atsauksme.author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Rezervācijas Sekcija */}
        <div className="max-w-7xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border-2 border-[#FDB927]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#552583] mb-4">
                <span className="text-[#FDB927]">GATAVS</span> REZERVĒT?
              </h2>
              <p className="text-[#552583]/90 mb-6">
                Rezervējiet savu celiņu tiešsaistē vai sazinieties ar mūsu pasākumu komandu īpašiem pasūtījumiem.
                Mēs piedāvājam elastīgu grafiku grupām jebkāda izmēra.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#552583] rounded-full flex items-center justify-center text-[#FDB927] mr-4 flex-shrink-0">
                    <FaCalendarAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#552583]">Darba Laiks</h4>
                    <p className="text-[#552583]/90">
                      Pirmd.-Ceturtd.: 10:00-23:00<br />
                      Piektd.-Sestd.: 10:00-01:00<br />
                      Svētd.: 11:00-22:00
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#552583] rounded-full flex items-center justify-center text-[#FDB927] mr-4 flex-shrink-0">
                    <FaGlassCheers />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#552583]">Īpaši Pasākumi</h4>
                    <p className="text-[#552583]/90">
                      Kosmiskais Boulings: Piektd.-Sestd. no 20:00<br />
                      Līgu Vakari: Otrd. & Trešd. 18:00-21:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#552583]/5 p-8 rounded-xl border-2 border-[#552583]/10">
              <h3 className="text-xl font-bold text-[#552583] mb-6 text-center">Ātrā Rezervācija</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-[#552583]/80 mb-1">Pakalpojuma Veids</label>
                  <select className="w-full p-3 rounded-lg border border-[#552583]/20 bg-white">
                    <option>Standarta Boulings</option>
                    <option>Kosmiskais Boulings</option>
                    <option>Dzimšanas Dienas Svinības</option>
                    <option>Korporatīvais Pasākums</option>
                    <option>Līgu Spēles</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#552583]/80 mb-1">Datums</label>
                    <input type="date" className="w-full p-3 rounded-lg border border-[#552583]/20" />
                  </div>
                  <div>
                    <label className="block text-[#552583]/80 mb-1">Laiks</label>
                    <input type="time" className="w-full p-3 rounded-lg border border-[#552583]/20" />
                  </div>
                </div>
                <div>
                  <label className="block text-[#552583]/80 mb-1">Dalībnieku Skaits</label>
                  <input type="number" min="1" className="w-full p-3 rounded-lg border border-[#552583]/20" />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-3 px-6 bg-[#FDB927] text-[#552583] font-bold rounded-lg hover:bg-[#552583] hover:text-white transition-colors duration-300"
                >
                  Pārbaudīt Pieejamību
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PakalpojumuLapa;