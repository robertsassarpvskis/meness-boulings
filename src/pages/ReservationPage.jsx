import Hero from "../components/Header";
import GradientCard from "../components/GradientCard";
import { AlarmClock } from "lucide-react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useState } from "react";
import { Contact } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";
import ReservationInfo from "../components/home/ReservationInfo";

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Šeit vari pievienot formu apstrādi vai API izsaukumu
    alert(`Rezervācija veikta: ${formData.name}, ${formData.date} plkst. ${formData.time}`);
  };

  return (
    <>
      <Hero
        title="Rezervē"
        highlight="savu vietu"
        subtitle="Nodrošini vietu Mēness boulinga centrā – aizpildi formu un sagatavojies kosmiskai izklaidei!"
        backgroundClass="header-3"
      />

      <div className="min-h-screen bg-[#fed273] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rezervācijas forma */}
          <ContactForm />

          {/* Informācijas karte */}
          <GradientCard className="p-8 rounded-3xl shadow-2xl border border-[#FDB927]/30 backdrop-blur-md bg-gradient-to-br from-[#552583]/90 via-[#713dbc]/70 to-[#FDB927]/80 text-white flex flex-col justify-center space-y-8">
            <h2 className="text-3xl font-extrabold mb-6 text-[#FDB927] tracking-wide">Mūsu darba laiks un kontakti</h2>

            <div className=" text-white/95 text-base sm:text-lg py-2">
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

          
            </GradientCard>

        </div>
      </div>
    </>
  );
};

export default ReservationPage;
