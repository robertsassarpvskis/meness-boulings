import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const CardSmall = ({ icon, title, description, highlight, bgImage, link, children }) => {
  const { t } = useTranslation('translation');

  return (
    <a
      href={link}
      className="block relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group h-full min-h-[380px] border-2 border-[#552583]/10 hover:border-[#552583]/30"
      style={{
        transform: 'perspective(1000px)',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url(${bgImage})`,
          transform: 'translateZ(0)'
        }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#552583]/90 via-[#552583]/80 to-[#552583]/90 z-0"></div>

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-15 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          backgroundImage: 'radial-gradient(#FDB927 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px'
        }}
      ></div>

      {/* Card content */}
      <div className="p-10 h-full flex flex-col text-white relative z-10">
        <div className="w-16 h-16 rounded-[20px] bg-[#FDB927] flex items-center justify-center text-[#552583] mb-8 group-hover:-translate-y-2 group-hover:rotate-[5deg] transition-all duration-500 shadow-lg group-hover:shadow-[0_15px_30px_rgba(253,185,39,0.5)]">
          {icon}
        </div>

        <h3 className="text-4xl font-bebeu font-bold mb-3 tracking-tight group-hover:text-[#FDB927] transition-colors duration-300">
          {title}
        </h3>
        <p className="mb-8 flex-grow text-white/90 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
          {description}
        </p>

        <div className="mt-auto">
          {highlight && (
            <p className="text-[#FDB927] font-semibold mb-6 text-xl group-hover:scale-105 transition-transform duration-300">
              {highlight}
            </p>
          )}
            {children}
          <div className="inline-flex items-center font-medium text-white group-hover:text-[#FDB927] transition-colors">
            <span className="relative text-lg after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#FDB927] after:transition-all after:duration-500 group-hover:after:w-full">
              {t('common.learn_more')}

            </span>
            <FaArrowRight className="ml-4 group-hover:translate-x-3 group-hover:rotate-180 transition-transform duration-500" />
          </div>
        </div>
      </div>

      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(253,185,39,0.15), transparent 40%)'
        }}
      ></div>

      {/* Border glow */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#FDB927]/30 transition-all duration-700 pointer-events-none"></div>
    </a>
  );
};

export default CardSmall;
