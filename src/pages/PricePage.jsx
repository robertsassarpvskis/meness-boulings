import { FaStar, FaBowlingBall, FaGlassCheers, FaClock } from "react-icons/fa";
import image from '../assets/header.jpg';
import image2 from '../assets/bowling2.jpg';
import Hero from '../components/Header';
import AttentionNotice from "../components/price/AttentionNotice";
import StudentOffers from "../components/price/StudentOffers";
import PriceTable from "../components/price/PriceTable";

const PricePage = () => {
  const pricingTiers = [
    {
      title: "Standard Bowling",
      icon: <FaBowlingBall className="text-2xl" />,
      price: "€12/hour",
      description: "Regular lane rental during off-peak hours",
      features: [
        "Up to 6 players per lane",
        "Shoe rental included",
        "Basic scoring system",
        "Weekdays 10AM-5PM"
      ],
      highlight: "Best for casual bowlers",
      bgImage: image,
      popular: false
    },
    {
      title: "Prime Time",
      icon: <FaClock className="text-2xl" />,
      price: "€18/hour",
      description: "Evening and weekend bowling experience",
      features: [
        "Cosmic bowling lights",
        "Premium lane surfaces",
        "Advanced scoring with replays",
        "Fri-Sun & holidays"
      ],
      highlight: "Most popular option",
      bgImage: image2,
      popular: true
    },
    {
      title: "Party Package",
      icon: <FaGlassCheers className="text-2xl" />,
      price: "€250/event",
      description: "All-inclusive celebration package",
      features: [
        "2 hours of bowling",
        "Food & drink package",
        "Private lane area",
        "Dedicated host",
        "Custom playlist"
      ],
      highlight: "Perfect for groups",
      bgImage: image,
      popular: false
    }
  ];

  return (
    <>
      <Hero
        title="Mūsu"
        highlight="Cenas"
        subtitle="Kosmiska atmosfēra, pieejamas cenas un neaizmirstami boulinga mirkļi Rīgā – uzzini vairāk!"
        backgroundClass="header-2"
      />

      <div className="min-h-screen bg-[#fed273] py-8 px-4 sm:px-6 lg:px-12">
        <AttentionNotice />
        <StudentOffers />
        <PriceTable />

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(253,185,39,0.3)] transition-all duration-500 group h-full min-h-[500px] border-2 border-[#FDB927]"
                style={{
                  transform: 'perspective(1000px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {tier.popular && (
                  <div className="absolute top-6 right-6 z-20 bg-[#FDB927] text-[#552583] px-4 py-2 rounded-full font-bold text-sm flex items-center">
                    <FaStar className="mr-2" /> MOST POPULAR
                  </div>
                )}

                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${tier.bgImage})`, transform: 'translateZ(0)' }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-b from-[#552583]/90 via-[#552583]/80 to-[#552583]/90 z-0"></div>

                <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-20 transition-opacity duration-500" style={{
                  backgroundImage: 'radial-gradient(#FDB927 1.5px, transparent 1.5px)',
                  backgroundSize: '20px 20px'
                }}></div>

                <div className="p-6 sm:p-8 h-full flex flex-col text-white relative z-10">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-[20px] ${tier.popular ? 'bg-white' : 'bg-[#FDB927]'} flex items-center justify-center ${tier.popular ? 'text-[#552583]' : 'text-[#552583]'} mb-6 sm:mb-8 group-hover:-translate-y-2 group-hover:rotate-[5deg] transition-all duration-500 shadow-lg group-hover:shadow-[0_15px_30px_rgba(253,185,39,0.5)]`}>
                    {tier.icon}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 tracking-tight group-hover:text-[#FDB927] transition-colors duration-300">
                    {tier.title}
                  </h3>

                  <div className="mb-4 sm:mb-6">
                    <p className="text-3xl sm:text-4xl font-bold text-[#FDB927]">{tier.price}</p>
                    <p className="text-white/80 text-sm sm:text-base">{tier.description}</p>
                  </div>

                  <ul className="mb-6 sm:mb-8 space-y-3 flex-grow text-sm sm:text-base">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-[#FDB927] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`mt-auto w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${tier.popular ? 'bg-[#FDB927] text-[#552583] hover:bg-white' : 'bg-[#552583] text-white hover:bg-[#FDB927] hover:text-[#552583]'} border-2 border-transparent hover:border-white`}>
                    Book Now
                  </button>

                  {tier.highlight && (
                    <p className="text-center mt-4 text-[#FDB927] font-medium text-sm sm:text-base">
                      {tier.highlight}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-12 rounded-3xl bg-gradient-to-br from-[#552583]/90 to-[#7b61df]/70 shadow-2xl border border-white/10 overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            <span className="text-[#FDB927]">FREQUENTLY</span> ASKED QUESTIONS
          </h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {[
              {
                question: "Do you offer group discounts?",
                answer: "Yes! Groups of 8+ receive 10% off lane rentals. For groups larger than 16, please contact us for special party rates."
              },
              {
                question: "Can I bring my own bowling shoes?",
                answer: "Absolutely! If you have your own bowling shoes, you're welcome to use them and we'll deduct €2 from your lane rental."
              },
              {
                question: "Is there an age limit?",
                answer: "We welcome all ages! Children under 12 must be supervised. Special lightweight balls and bumpers available for younger bowlers."
              },
              {
                question: "What's your cancellation policy?",
                answer: "Party packages can be cancelled up to 48 hours in advance for full refund. Lane rentals can be adjusted anytime before your reservation time."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-[#552583]/30 p-5 sm:p-6 rounded-xl border border-[#FDB927]/10 hover:border-[#FDB927]/30 transition-colors">
                <h3 className="text-lg sm:text-xl font-bold text-[#FDB927] mb-2 sm:mb-3">{faq.question}</h3>
                <p className="text-white/90 text-sm sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricePage;
