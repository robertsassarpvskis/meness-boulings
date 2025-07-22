import { FaFacebookF, FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaArrowRight } from "react-icons/fa";
import logo from "../assets/logo-white.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer 
      className="bg-gradient-to-tr from-[#552583] to-[#241042] text-[#FDB927] px-6 py-16 relative overflow-hidden"
      style={{
        transform: 'perspective(1000px)',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#552583]/90 to-[#552583]/70 z-0"></div>
      
      {/* Static radial dot pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500"
        style={{
          backgroundImage: 'radial-gradient(#FDB927 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
        }}
      />
      
      {/* Interactive radial gradient that follows mouse */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(253,185,39,0.1), transparent 40%)',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main content grid with enhanced spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Logo column with enhanced hover effects */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <div className="mb-8 relative group rounded-2xl overflow-hidden">
              {/* Fona slānis aiz logo */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl z-0 border border-[#FDB927]/20 shadow-lg" />
              <a href="/" className="cursor-pointer relative z-10 block"> 
              <img 
                src={logo}
                alt="Boulinga centrs logo" 
                className="relative z-10 h-auto w-full object-contain rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              </a>
              {/* Dekoratīvais gradient pārklājums hover efektam */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FDB927]/0 via-[#FDB927]/0 to-[#FDB927]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
            </div>

            <p className="text-2xl font-bold italic text-[#FDB927] mb-3 transform group-hover:-translate-y-1 transition-transform duration-300">
              "Labākie metieni Rīgā!"
            </p>

            <p className="text-[#FDB927]/80 text-lg">
              Mēness Boulinga centrs ir vieta, kur sporta azarts satiekas ar draudzīgu atmosfēru. Kopš 2015. gada mēs piedāvājam kvalitatīvu izklaidi ģimenēm, draugiem un uzņēmumiem – neatkarīgi no pieredzes līmeņa.
            </p>
          </div>


          {/* Quick links column with enhanced animations */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-[#FDB927]/30 w-max hover:border-[#FDB927]/60 transition-colors duration-300 ">Saites</h3>
           

              <ul className="space-y-4">
                {[
                  { name: "Sākums", path: "/" },
                  { name: "Cenas un Piedāvājumi", path: "/price" },
                  { name: "Rezervācija", path: "/booking" },
                  { name: "Pasākumi", path: "/events" },
                  { name: "Kontakti", path: "/contact" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path} 
                      className="group flex items-center text-lg hover:text-white transition-all duration-300"
                    >
                      <span className="mr-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-2 transition-all duration-500">
                        <FaArrowRight className="text-sm text-[#FDB927] group-hover:rotate-180 transition-transform duration-500" />
                      </span>
                      <span className="relative font-semibold">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FDB927] transition-all duration-500 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
          </div>

          {/* Contact column with enhanced interaction */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-[#FDB927]/30 w-max hover:border-[#FDB927]/60 transition-colors duration-300">Kontakti</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-5 group">
                <div className="p-3 bg-[#FDB927]/10 rounded-xl group-hover:bg-[#FDB927]/20 transition-all duration-500 group-hover:rotate-[5deg] shadow-sm">
                  <FaPhone className="text-xl text-[#FDB927] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                  <p className="text-sm text-[#FDB927]/80">Zvani mums</p>
                  <p className="text-xl font-medium group-hover:text-white transition-colors duration-300">+371 123 4567</p>
                </div>
              </li>

              <li className="flex items-start gap-5 group">
                <div className="p-3 bg-[#FDB927]/10 rounded-xl group-hover:bg-[#FDB927]/20 transition-all duration-500 group-hover:rotate-[5deg] shadow-sm">
                  <FaMapMarkerAlt className="text-xl text-[#FDB927] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                  <p className="text-sm text-[#FDB927]/80">Apskati mūs kartē</p>
                  <a 
                    href="https://maps.app.goo.gl/PM4YAEbCnexbgssc9" 
                    target="_blank" 
                    rel="noopener" 
                    className="text-xl font-medium hover:underline flex items-center group/link"
                  >
                    <span className="mr-2 opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-0 -translate-x-1 transition-all duration-500">
                      <FaArrowRight className="text-xs  text-[#FDB927] group-hover/link:rotate-180 transition-transform duration-500" />
                    </span>
                    Vaidavas iela 4, Rīga
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-5 group">
                <div className="p-3 bg-[#FDB927]/10 rounded-xl group-hover:bg-[#FDB927]/20 transition-all duration-500 group-hover:rotate-[5deg] shadow-sm">
                  <FaEnvelope className="text-xl text-[#FDB927] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                  <p className="text-sm text-[#FDB927]/80">Raksti mums</p>
                  <a 
                    href="mailto:info@boulingacentrs.lv" 
                    className="text-xl font-medium hover:underline flex items-center group/link"
                  >
                    <span className="mr-2 opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-0 -translate-x-1 transition-all duration-500">
                      <FaArrowRight className="text-xs text-[#FDB927] group-hover/link:rotate-180 transition-transform duration-500" />
                    </span>
                    info@boulingacentrs.lv
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-5 group">
                <div className="p-3 bg-[#FDB927]/10 rounded-xl group-hover:bg-[#FDB927]/20 transition-all duration-500 group-hover:rotate-[5deg] shadow-sm">
                  <FaClock className="text-xl text-[#FDB927] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                  <p className="text-sm text-[#FDB927]/80">Darba laiks</p>
                  <p className="text-xl font-medium group-hover:text-white transition-colors duration-300">Darba dienās: 10:00 - 22:00</p>
                  <p className="text-xl font-medium group-hover:text-white transition-colors duration-300">Brīvdienās: 9:00 - 24:00</p>
                </div>
              </li>
            </ul>

          </div>

          {/* Social & Legal column with enhanced effects */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-[#FDB927]/30 w-max hover:border-[#FDB927]/60 transition-colors duration-300">Sociālie tīkli</h3>
            
            <div className="flex gap-5 mb-10">
              {[
                { icon: <FaFacebookF className="text-2xl" />, url: "https://facebook.com" },
                { icon: <FaInstagram className="text-2xl" />, url: "https://instagram.com" },
                { icon: <FaTiktok className="text-2xl" />, url: "https://tiktok.com" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 rounded-2xl bg-[#FDB927]/10 flex items-center justify-center hover:bg-[#FDB927] hover:text-[#552583] transition-all duration-500 transform hover:-translate-y-2 hover:rotate-[5deg] shadow-md hover:shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-xl group">
                <span className="group-hover:text-white transition-colors duration-300">© 2025 Mēness Boulinga</span>
              </p>
              <div className="flex gap-5">
                <a href="/privacy" className="text-[#FDB927]/80 hover:text-[#FDB927] hover:underline transition-colors duration-500 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-1 transition-all duration-500">
                    <FaArrowRight className="text-xs group-hover:rotate-180 transition-transform duration-500" />
                  </span>
                  <span className="group-hover:text-white transition-colors duration-300">Privacy</span>
                </a>
                <a href="/terms" className="text-[#FDB927]/80 hover:text-[#FDB927] hover:underline transition-colors duration-500 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-1 transition-all duration-500">
                    <FaArrowRight className="text-xs group-hover:rotate-180 transition-transform duration-500" />
                  </span>
                  <span className="group-hover:text-white transition-colors duration-300">Terms</span>
                </a>
              </div>
              <p className="text-[#FDB927]/60 text-base group">
                <span className="group-hover:text-[#FDB927]/80 transition-colors duration-300">We use essential cookies</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom divider with enhanced animation */}
        <div className="mt-16 pt-8 border-t border-[#FDB927]/20 hover:border-[#FDB927]/40 transition-colors duration-500">
          <p className="text-center text-[#FDB927]/60 text-lg group">
            <span className="group-hover:text-[#FDB927]/80 transition-colors duration-300">Bowling excellence since 2015</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;