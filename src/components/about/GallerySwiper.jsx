import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

const GallerySwiper = ({ galerijasAtteli }) => {
  
  return (
    <div className="relative max-w-7xl mx-auto ">
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="relative z-10"
      >
        {galerijasAtteli.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-60 sm:h-80 md:h-[400px] lg:h-[500px] xl:h-[580px] w-full rounded-3xl overflow-hidden  bg-cover bg-center"
            >
              <img
                src={img}
                alt={`Galerija ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#552583]/90 to-transparent flex items-end p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg">
                  Mēness Boulinga {index % 2 === 0 ? 'Celiņi' : 'Atpūtas Zona'}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom mt-6 flex justify-center gap-2" />

      {/* Custom Arrows */}
      <div className="swiper-button-prev-custom absolute top-1/2 left-4 -translate-y-1/2 bg-[#552583] text-[#FDB927] p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition">
        ❮
      </div>
      <div className="swiper-button-next-custom absolute top-1/2 right-4 -translate-y-1/2 bg-[#552583] text-[#FDB927] p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition">
        ❯
      </div>

      {/* Custom Styles */}
      {/* Custom Arrows */}
    <div className="swiper-button-prev-custom custom-arrow left-4">
    ❮
    </div>
    <div className="swiper-button-next-custom custom-arrow right-4">
    ❯
    </div>

    {/* Custom Styles */}
    <style jsx>{`
    .custom-bullet {
        width: 20px;
        height: 5px;
        display: inline-block;
        // background-color: #7b4fe8;
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
        top: 50%;
        transform: translateY(-50%);
        background: #552583;
        color: #FDB927;
        padding: 0.75rem;
        font-size: 1.25rem;
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
        font-size: 1.75rem;
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

export default GallerySwiper;
