import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTiktok
} from "react-icons/fa";

import ContactCards from '../components/ContactCards';
import Hero from "../components/Header";
import GradientCard from "../components/GradientCard";
import NewContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Hero
        title="Sazinies"
        highlight="ar mums"
        subtitle="Mēs esam šeit, lai atbildētu uz jautājumiem un palīdzētu rezervēt tavu kosmisko boulinga pieredzi."
        backgroundClass="header-3"
      />

      <div className="min-h-screen bg-[#fed273] py-12 px-4 sm:px-6 lg:px-8">
        <ContactCards />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kontaktu forma */}
          <NewContactForm />

          {/* Karšu un sociālo mediju sadaļa */}
          <div className="space-y-8">
            {/* Google Karte */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#552583]/20 h-72 sm:h-80 md:h-96 lg:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4350.276394223657!2d24.173242877166846!3d56.963565198090606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eece42e480593b%3A0xfd9fbbea53135d9f!2sBoulinga%20sporta%20centrs%20%22M%C4%93ness%22!5e0!3m2!1sen!2sus!4v1752474874561!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale-50 contrast-125 brightness-90"
              ></iframe>
            </div>

            {/* Sociālie tīkli */}
            <GradientCard className="p-6 sm:p-8 rounded-3xl shadow-xl border border-[#FDB927]/10 backdrop-blur-sm bg-[#552583]/90">
              <div className="flex flex-col lg:flex-row justify-between gap-10">
                {/* Kontaktinformācija */}
                <div className="flex-1 space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#FDB927] tracking-wide text-center lg:text-left">
                    Sazinies ar mums
                  </h2>

                  <div className="space-y-4 text-white/90 text-sm sm:text-base">
                    <div className="flex items-center gap-3">
                      <FaPhone className="text-[#FDB927] text-lg" />
                      <span className="font-medium">+371 1234 5678</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaClock className="text-[#FDB927] text-lg" />
                      <span className="font-medium">Pirmd.–Svēt.: 10:00 – 22:00</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaMapMarkerAlt className="text-[#FDB927] text-lg" />
                      <span className="font-medium">Mēness boulinga centrs, Rīga, Latvija</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-[#FDB927] text-lg" />
                      <span className="font-medium">info@menessboulinga.lv</span>
                    </div>
                  </div>
                </div>

                {/* Sociālo tīklu saites */}
                <div className="flex-1 flex flex-col pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#FDB927]/20 lg:pl-10">
                  <p className="text-center lg:text-left text-white/60 text-xs mb-4 uppercase tracking-wider">
                    Sekojiet mums sociālajos tīklos
                  </p>

                  <div className="flex flex-col items-center lg:items-start gap-4">
                    {[
                      { icon: <FaFacebookF />, label: "Facebook", url: "https://facebook.com" },
                      { icon: <FaInstagram />, label: "Instagram", url: "https://instagram.com" },
                      { icon: <FaTiktok />, label: "TikTok", url: "https://tiktok.com" },
                    ].map((item, index) => (
                      <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group hover:scale-105 transition duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#FDB927]/20 flex items-center justify-center hover:bg-[#FDB927]/30 transition">
                            <div className="text-[#FDB927] text-lg group-hover:text-white">{item.icon}</div>
                          </div>
                          <span className="text-white/80 text-sm sm:text-base">{item.label}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </GradientCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
