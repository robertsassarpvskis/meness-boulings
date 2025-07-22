import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PricePage from '../pages/PricePage';
import ContactPage from '../pages/ContactPage';
import GalleryPage from '../pages/GalleryPage';
import AboutPage from '../pages/AboutPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/price" element={<PricePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}
