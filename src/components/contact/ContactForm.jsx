import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnvelopeIcon, UserIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import GradientCard from "../GradientCard";
import { AlarmClock, CalendarClock } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      subject: formData.subject.trim() === "",
      message: formData.message.trim() === ""
    };
    setFormErrors(errors);
    return !Object.values(errors).some(Boolean);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    if (formErrors[id]) {
      setFormErrors(prev => ({
        ...prev,
        [id]: false
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        setSubmitSuccess(false);
      }, 3500);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <GradientCard >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-7xl mx-auto  py-5 rounded-3xl "
    >
      <div className="mb-10 text-center">
        <div className="inline-flex text-6xl font-bebeu font-bold text-[#FDB927] rounded-lg backdrop-blur-sm">     
          <span className="">RESERVATIONS</span>
        </div>
        <p className="mt-2 text-gray-300 tracking-wide font-medium">
          We'd love to hear from you — send us a message!
        </p>
      </div>

      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="mb-8 px-6 py-4 rounded-xl bg-green-600/20 border border-green-400 text-green-100 text-center font-semibold select-none shadow-md"
          >
            🎉 Message sent successfully! We'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <InputField
            id="name"
            label="Full Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            error={formErrors.name}
            icon={<UserIcon className="h-6 w-6" />}
          />
          <InputField
            id="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={formErrors.email}
            icon={<EnvelopeIcon className="h-6 w-6" />}
          />
        </div>

        <InputField
          id="subject"
          label="Subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          error={formErrors.subject}
          icon={<ChatBubbleBottomCenterTextIcon className="h-6 w-6" />}
        />

        <TextAreaField
          id="message"
          label="Your Message"
          value={formData.message}
          onChange={handleChange}
          error={formErrors.message}
          placeholder="Your cosmic message..."
          rows={6}
        />

       <a
          href="/rezervacija"
          className="inline-flex items-center px-8 py-4 rounded-full text-lg font-bold bg-[#FDB927] text-[#552583] hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl shadow-[#FDB927]/30 hover:shadow-[#FDB927]/50 group"
        >
          <CalendarClock 
            className="inline-block mr-3 transition-transform group-hover:scale-110" 
            size={20} 
            strokeWidth={2.5} 
          />
          Rezervēt tagad
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </a>


      </form>
    </motion.div>
    </GradientCard>
    </>
  );
};

const InputField = ({ id, label, type = "text", value, onChange, error, icon }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.trim() !== "";

  return (
    <div className="relative">
      <div
        className={`flex items-center gap-3 p-4 rounded-2xl cursor-pointer bg-white/10 backdrop-blur-md border transition-all duration-300
          ${error ? "border-red-400 bg-red-500/20" : "border-transparent hover:border-yellow-400"}
          ${isFocused && !error ? "border-yellow-400 shadow-yellow-400/50 shadow-md" : ""}
        `}
      >
        <div
          className={`flex-shrink-0 text-yellow-400 transition-colors duration-300 ${
            error ? "text-red-400" : ""
          }`}
        >
          {icon}
        </div>

        <div className="flex-grow relative w-full">
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder=""
            className={`w-full bg-transparent text-white
              focus:outline-none text-lg tracking-wide
              ${error ? "placeholder-red-400" : "placeholder-yellow-300/60"}
            `}
          />

          <label
            htmlFor={id}
            className={`absolute left-4 top-1 text-sm font-semibold
              select-none pointer-events-none transition-opacity duration-300
              ${
                isFocused || hasValue
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }
              ${error ? "text-red-400" : "text-yellow-300/70"}
            `}
          >
            {label}
          </label>
        </div>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-1 ml-1 text-sm font-medium text-red-400 select-none"
          >
            This field is required
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};



const TextAreaField = ({ id, label, value, onChange, error, placeholder, rows = 4 }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.trim() !== "";

  return (
    <div className="relative">
      <div
        className={`p-4 rounded-2xl bg-white/10 backdrop-blur-md border transition-all duration-300
          ${error ? "border-red-400 bg-red-500/20" : "border-transparent hover:border-yellow-400"}
          ${isFocused && !error ? "border-yellow-400 shadow-yellow-400/50 shadow-md" : ""}
        `}
      >
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder=""
          rows={rows}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full bg-transparent resize-none text-white placeholder-yellow-300/60
            focus:outline-none text-lg tracking-wide
            ${error ? "placeholder-red-400" : ""}
          `}
        />

        <label
          htmlFor={id}
          className={`absolute left-6 top-6 text-sm font-semibold
            select-none pointer-events-none transition-opacity duration-300
            ${
              isFocused || hasValue
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }
            ${error ? "text-red-400" : "text-yellow-300/70"}
          `}
        >
          {label}
        </label>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-1 ml-2 text-sm font-medium text-red-400 select-none"
          >
            This field is required
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};


export default ContactForm;
