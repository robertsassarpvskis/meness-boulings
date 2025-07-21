const StudentOffers = () => {
  return (
    <div
      className="max-w-7xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-xl relative border-2 border-[#552583]/10 group"
      style={{
        transform: 'perspective(1000px)',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#552583]/90 to-[#552583]/70 z-0" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500"
        style={{
          backgroundImage: 'radial-gradient(#FDB927 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10">
        <h2 className="text-3xl font-bold text-[#FDB927] mb-6 text-center flex items-center justify-center">
  <span className="mr-3">🎓</span>
  <span>Īpašie piedāvājumi skolēniem un studentiem</span>
</h2>

<div className="space-y-6 text-white/90 text-lg">
  <div className="flex items-start">
    <div className="w-6 h-6 rounded-full bg-[#FDB927]/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
      <div className="w-2 h-2 rounded-full bg-[#FDB927]"></div>
    </div>
    <span>
      Uzrādot derīgu skolēna vai studenta apliecību, saņem <strong className="text-[#FDB927]">20% atlaidi spēlei</strong> darba dienās līdz plkst. 18:00.
    </span>
  </div>

  <div className="flex items-start">
    <div className="w-6 h-6 rounded-full bg-[#FDB927]/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
      <div className="w-2 h-2 rounded-full bg-[#FDB927]"></div>
    </div>
    <span>
      Pieejami izdevīgi <strong className="text-[#FDB927]">abonementi</strong> uz mēnesi vai sezonu — ideāli regulāriem spēlētājiem!
    </span>
  </div>

  <div className="flex items-start">
    <div className="w-6 h-6 rounded-full bg-[#FDB927]/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
      <div className="w-2 h-2 rounded-full bg-[#FDB927]"></div>
    </div>
    <span>
      Atlaides nav piemērojamas <strong className="text-[#FDB927]">nedēļas nogalēs un valsts svētku dienās</strong>.
    </span>
  </div>

  <div className="flex items-start">
    <div className="w-6 h-6 rounded-full bg-[#FDB927]/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
      <div className="w-2 h-2 rounded-full bg-[#FDB927]"></div>
    </div>
    <span>
      Skolēnu grupām no 10 personām piedāvājam <strong className="text-[#FDB927]">speciālus nosacījumus, grupu atlaides un priekšrocības rezervācijās</strong>.
    </span>
  </div>
</div>


        {/* Hover highlight effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(253,185,39,0.1), transparent 40%)',
          }}
        />
      </div>
    </div>
  );
};

export default StudentOffers;
