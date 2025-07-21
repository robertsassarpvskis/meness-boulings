import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/newlogo.png';
import { Menu, X } from 'lucide-react';

// Import your custom flag images
import lvFlag from '../assets/flags/lv.png';
import enFlag from '../assets/flags/en.webp';
import ruFlag from '../assets/flags/ru.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const handleLanguageChange = (lang) => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
  };

  const links = [
    { name: t('home'), to: '/' },
    { name: t('about'), to: '/about' },
    { name: t('gallery'), to: '/gallery' },
    { name: t('price'), to: '/price' },
    { name: t('contact'), to: '/contact' },
  ];

  const languages = [
    { code: 'lv', flag: lvFlag, name: 'Latviešu' },
    { code: 'en', flag: enFlag, name: 'English' },
    { code: 'ru', flag: ruFlag, name: 'Русский' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out py-4 px-4 sm:px-6
        ${scrolled ? 'bg-gradient-to-b from-[#6c30c2]/90 via-[#6c30c2]/70 to-transparent backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center shrink-0">
            <img src={logo} alt="Logo" className="w-28 sm:w-36 md:w-40 transition-all duration-300" />
          </a>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
            <ul className="flex space-x-6 lg:space-x-8">
              {links.map(({ name, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `relative font-medium text-sm uppercase tracking-wider transition-all duration-300
                      ${isActive ? 'text-[#FDB927]' : 'text-white hover:text-[#FDB927]'}
                      after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] 
                      after:bg-[#FDB927] after:transition-all after:duration-500
                      ${isActive ? 'after:w-full' : 'hover:after:w-full'}`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Custom Flags */}
            <div className="flex items-center gap-4 ml-4">
              {languages.map(({ code, flag }) => (
                <button
                  key={code}
                  onClick={() => handleLanguageChange(code)}
                  className={`relative cursor-pointer w-8 h-8 rounded-lg overflow-hidden transition-all duration-300 hover:scale-110
                    ${i18n.language === code 
                      ? 'ring-4 ring-[#FDB927] scale-110' 
                      : 'ring-2 ring-white/30 hover:ring-[#FDB927] grayscale hover:grayscale-0'}`}
                  aria-label={`Change language to ${code}`}
                >
                  <img 
                    src={flag} 
                    alt={`${code} flag`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white z-50 p-2 hover:bg-white/10 rounded-full transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 h-screen w-full bg-[#6c30c2]/95 backdrop-blur-md transition-all duration-500 ease-in-out z-40 
        ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`} style={{ top: 0 }}>
        <div className="flex justify-between items-center px-6 py-5">
          <img src={logo} alt="Logo" className="w-28 sm:w-32" />
          <button 
            onClick={() => setMenuOpen(false)} 
            className="text-white p-2 hover:bg-white/10 rounded-full transition-all"
            aria-label="Close Menu"
          >
            <X size={32} />
          </button>
        </div>

        <ul className="flex flex-col items-center mt-16 space-y-6 text-lg sm:text-xl">
          {links.map(({ name, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-medium uppercase tracking-wider transition-all duration-300 ${
                    isActive ? 'text-[#FDB927] scale-105' : 'text-white hover:text-[#FDB927] hover:scale-105'
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}

          {/* Language flags in mobile */}
          <li className="flex gap-8 mt-12">
            {languages.map(({ code, flag, name }) => (
              <div key={code} className="flex flex-col items-center">
                <button
                  onClick={() => {
                    handleLanguageChange(code);
                    setMenuOpen(false);
                  }}
                  className={`w-16 h-16 rounded-full overflow-hidden transition-all duration-300 hover:scale-110
                    ${i18n.language === code ? 'ring-4 ring-[#FDB927] scale-110' : 'ring-2 ring-white/30'}`}
                  aria-label={`Change language to ${code}`}
                >
                  <img 
                    src={flag} 
                    alt={`${code} flag`} 
                    className="w-full h-full object-cover"
                  />
                </button>
                <span className="text-white text-sm font-medium mt-2">{name}</span>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
}