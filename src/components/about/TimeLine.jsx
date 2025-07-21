// components/about/Timeline.jsx
import { FaHistory, FaTrophy, FaBowlingBall, FaUsers } from "react-icons/fa";
import GradientCard from "../GradientCard";

const Timeline = ({ items }) => {
  return (
    <GradientCard className="mb-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        <span>MŪSU</span> CEĻŠ
      </h2>

      <div className="relative">
        {/* Vidējā līnija */}
        <div className="absolute left-1/2 h-full w-1 bg-[#FDB927]/50 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}
            >
              <div className={`w-1/2 p-6 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                <div
                  className={`inline-block p-6 rounded-2xl ${
                    index % 2 === 0
                      ? "bg-[#FDB927] text-[#552583]"
                      : "bg-white text-[#552583]"
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <div className="mr-3">{item.icon}</div>
                    <h3 className="text-xl font-bold">{item.event}</h3>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>

              <div className="w-1/2 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#FDB927] flex items-center justify-center text-[#552583] font-bold text-xl border-4 border-white shadow-lg">
                  {item.year}
                </div>
              </div>

              <div className={`w-1/2 p-6 ${index % 2 === 0 ? "pl-12" : "pr-12 text-right"}`}>
                {/* Tukša vieta izlīdzināšanai */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </GradientCard>
  );
};

export default Timeline;
