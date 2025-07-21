import GradientCard from "../GradientCard";

const AttentionNotice = () => {
  return (
      <GradientCard>

        <h2 className="text-3xl font-bold text-[#FDB927] mb-6 text-center flex items-center justify-center">
          <span className="mr-3">⚠️</span>
          <span>Noteikumi un svarīga informācija apmeklētājiem</span>
        </h2>

        <ul className="space-y-4 text-lg text-white/90 pl-2">
          <li className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-[#FDB927]/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#FDB927]"></div>
            </div>
            <span>Visiem apmeklētājiem ir jālieto <strong className="text-[#FDB927]">maiņas apavi</strong> vai jāiznomā <strong className="text-[#FDB927]">boulinga apavi</strong>, lai nodrošinātu drošu un higiēnisku vidi.</span>
          </li>

          <li className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-[#FDB927]/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#FDB927]"></div>
            </div>
            <span>Skolēniem un studentiem tiek piešķirtas <strong className="text-[#FDB927]">atlaides</strong> tikai uzrādot <strong className="text-[#FDB927]">derīgu apliecību</strong>.</span>
          </li>

          <li className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-[#FDB927]/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#FDB927]"></div>
            </div>
            <span>Administrācija patur tiesības <strong className="text-[#FDB927]">atteikt ieeju</strong> vai <strong className="text-[#FDB927]">lūgt pamest telpas</strong> nepiedienīgas uzvedības vai neatbilstoša apģērba gadījumā.</span>
          </li>

          <li className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-[#FDB927]/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#FDB927]"></div>
            </div>
            <span><strong className="text-[#FDB927]">Bērni līdz 12 gadu vecumam</strong> drīkst apmeklēt boulinga zāli tikai pieaugušo – vecāku vai aizbildņu – uzraudzībā.</span>
          </li>

          <li className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-[#FDB927]/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#FDB927]"></div>
            </div>
            <span>Visas norādītās cenas <strong className="text-[#FDB927]">iekļauj PVN</strong>, un <strong className="text-[#FDB927]">slēptas maksas netiek piemērotas</strong>.</span>
          </li>
        </ul>


        {/* Hover effects */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(253,185,39,0.1), transparent 40%)'
          }}
        ></div>
      </GradientCard>
  );
};

export default AttentionNotice;