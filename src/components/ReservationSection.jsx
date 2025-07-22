import {
  FaPhone,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { AlarmClock, CalendarClock } from "lucide-react";
import ReservationInfo from "./home/ReservationInfo";
import { Link } from 'react-router-dom'; // ← tas ir svarīgi!
const ReservationSection = () => {
  return (
    <section
      id="reservation"
      className="max-w-7xl mx-auto relative w-full py-24 px-4 md:px-12 lg:px-24 bg-gradient-to-br from-[#552583] to-[#3a1a5e] border-2 border-[#552583] overflow-hidden rounded-2xl my-12 font-sans"
    >
      {/* Decorative elements */}
      <div className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-white/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-white/5 rounded-full blur-[80px]" />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-transparent via-[#FDB927] to-transparent opacity-30" />

      {/* Content container */}
      <div className="relative z-10 text-start text-white">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left content */}
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-3 mb-6 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <FaRegCalendarAlt
                size={32}
                className="text-[#FDB927] transition-transform duration-300 hover:rotate-6"
              />
              <span className="text-lg font-semibold text-[#FDB927]">RESERVATIONS</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-bebeu tracking-tight mb-6">
              Rezervē savu <span className="text-[#FDB927]">boulinga ballīti Rīgā</span> jau šodien!
            </h2>

            <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
              Ideāla vieta dzimšanas dienām, draugu tikšanās reizēm vai uzņēmuma pasākumiem Rīgas centrā.
              Ātra un vienkārša rezervācija, draudzīga atmosfēra un moderni boulinga celiņi garantē neaizmirstamu pieredzi!
            </p>

            {/* CTA Button */}
            <Link
              to="/reservation" 
              className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold bg-[#FDB927] text-[#552583] hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl shadow-[#FDB927]/30 hover:shadow-[#FDB927]/50 group"
            >
              <CalendarClock
                className="inline-block mr-3 transition-transform group-hover:scale-110"
                size={20}
                strokeWidth={2.5}
              />
              Rezervēt tagad
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Right content - info cards */}
          <div className="flex-1 w-full lg:max-w-xl min-w-0">
            <ReservationInfo
              title="Darba laiks"
              whiteInfo="Pirmdiena - Svētdiena"
              yellowInfo="12:00 - 00:00"
              icon={<AlarmClock size={24} strokeWidth={2.5} />}
            />

            <ReservationInfo
              title="Atrašanās vieta"
              whiteInfo="Vaidavas iela 4"
              yellowInfo="Rīga, Latvija"
              icon={<FaMapMarkerAlt size={20} />}
              link="https://share.google/saLyTSzql1IJMmlfG"
            />

            <ReservationInfo
              title="Zvaniet mums"
              whiteInfo="+371 12345678"
              yellowInfo=""
              icon={<FaPhone size={20} />}
              isPhone={true}
              phoneHref="+37112345678"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
