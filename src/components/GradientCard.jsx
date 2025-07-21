const GradientCard = ({ children }) => (
  <div
    className="max-w-7xl mx-auto mb-6 rounded-3xl overflow-hidden shadow-xl relative border-2 border-[#552583]/10 group"
    style={{
      transform: 'perspective(1000px)',
      transformStyle: 'preserve-3d',
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#552583]/90 to-[#552583]/70 z-0"></div>
    <div
      className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500"
      style={{
        backgroundImage: 'radial-gradient(#FDB927 1.5px, transparent 1.5px)',
        backgroundSize: '20px 20px',
      }}
    />
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background:
          'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(253,185,39,0.1), transparent 40%)',
      }}
    />
    <div className="relative z-10 py-6 px-10">{children}</div>
  </div>
);

export default GradientCard;
