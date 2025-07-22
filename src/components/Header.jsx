import PropTypes from 'prop-types';

const Hero = ({ 
  title, 
  highlight, 
  subtitle, 
  backgroundClass = '', 
}) => {
  return (
    <div className={`relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center ${backgroundClass}`}>
      {/* Background layer can be customized via backgroundClass */}
      <div className="absolute inset-0 z-0"></div>

      {/* Centered content */}
      <div className="relative z-10 w-full px-4 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-semibold font-bebeu text-white tracking-tight uppercase leading-tight mb-4">
          {title} <span className="text-[#FDB927]">{highlight}</span>
        </h1>
        
        {subtitle && (
          <p className="text-lg sm:text-lg md:text-xl text-white/80 max-w-xl mx-auto mt-4 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};


export default Hero;
