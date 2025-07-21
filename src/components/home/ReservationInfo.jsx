const ReservationInfo = ({ title, whiteInfo, yellowInfo, icon, isPhone = false, phoneHref = "", link }) => (
  <a
    className={`w-full flex items-center gap-4 p-6 cursor-pointer target:_bla rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FDB927] transition-all duration-300 ${isPhone ? 'mt-6' : 'mb-6'} group relative overflow-hidden`}
href={isPhone ? `tel:${phoneHref}` : link}
  >
    {/* Icon block */}
    <div className="p-3 bg-gradient-to-br from-[#FDB927] to-[#FFD56A] text-[#552583] rounded-lg shadow-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110 mt-1">
      <div className="transition-transform duration-300 group-hover:rotate-[-5deg]">
        {icon}
      </div>
    </div>

    {/* Text content */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-[#FDB927] mb-1">{title}</h3>
      <p className="text-2xl font-bebeu text-white">
        {whiteInfo}
        <br />
        <span className={`${isPhone ? 'text-white' : 'text-[#FDB927]'}`}>
          {yellowInfo}
        </span>
      </p>
    </div>

    {/* Arrow icon for all items */}
    <div className="absolute right-6 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center w-10 h-10 rounded-full bg-[#FDB927] text-[#552583] hover:bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-200 hover:translate-x-1"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </div>

    {/* Invisible overlay link for better click target on phones (keep only if needed) */}
    {isPhone && <a href={`tel:${phoneHref}`} className="absolute inset-0 z-10 opacity-0" aria-hidden="true" />}
  </a>
);

export default ReservationInfo;
