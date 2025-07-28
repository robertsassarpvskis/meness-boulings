import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/newlogo.png';
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
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out py-4 px-4 sm:px-6 ${
          scrolled
            ? 'bg-gradient-to-b from-[#6c30c2]/90 via-[#6c30c2]/70 to-transparent backdrop-blur-md '
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <motion.img
              src={logo}
              alt="Logo"
              className="w-28 sm:w-36 md:w-40"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {links.map(({ name, to }, index) => (
  <motion.li
    key={to}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
    whileHover={{ scale: 1.08, y: -2 }}
  >
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative font-semibold text-sm uppercase tracking-wider transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full after:transition-all after:duration-500 ${
          isActive
            ? 'text-[#FDB927] after:w-full after:bg-[#FDB927]'
            : 'text-white hover:text-[#FDB927] after:w-0 hover:after:w-full hover:after:bg-[#FDB927]'
        }`
      }
    >
      {name}
    </NavLink>
  </motion.li>
))}

            </ul>

            {/* Language Switch */}
            <div className="flex items-center gap-3 ml-6">
              {languages.map(({ code, flag }) => (
                <motion.button
                  key={code}
                  onClick={() => handleLanguageChange(code)}
                  whileHover={{ scale: 1.1 }}
                  className={`w-8 h-8 rounded-full overflow-hidden transition-all ring-2 ${
                    i18n.language === code
                      ? 'ring-[#FDB927] scale-110'
                      : 'ring-white/30 hover:ring-[#FDB927] grayscale hover:grayscale-0'
                  }`}
                  aria-label={`Change language to ${code}`}
                >
                  <img src={flag} alt={`${code} flag`} className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white z-[60] p-2 hover:bg-white/10 rounded-full transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-full h-screen z-40 bg-[#6c30c2]/95 backdrop-blur-sm flex flex-col justify-center"
          >
            <ul className="flex flex-col items-center space-y-8 text-lg sm:text-xl font-medium uppercase">
              {links.map(({ name, to }, index) => (
  <motion.li
    key={to}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 * index }}
    whileHover={{ scale: 1.08 }}
  >
    <NavLink
      to={to}
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) =>
        `tracking-widest transition-all ${
          isActive
            ? 'text-[#FDB927] scale-105'
            : 'text-white hover:text-[#FDB927] hover:scale-105'
        }`
      }
    >
      {name}
    </NavLink>
  </motion.li>
))}

            </ul>

            {/* Language Switcher (Bottom) */}
            <div className="flex justify-center gap-10 mt-16">
              {languages.map(({ code, flag, name }) => (
                <div key={code} className="flex flex-col items-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      handleLanguageChange(code);
                      setMenuOpen(false);
                    }}
                    className={`w-16 h-16 rounded-full overflow-hidden transition-all ${
                      i18n.language === code
                        ? 'ring-4 ring-[#FDB927] scale-110'
                        : 'ring-2 ring-white/30'
                    }`}
                    aria-label={`Change language to ${code}`}
                  >
                    <img src={flag} alt={`${code} flag`} className="w-full h-full object-cover" />
                  </motion.button>
                  <span className="text-white text-sm mt-2">{name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
