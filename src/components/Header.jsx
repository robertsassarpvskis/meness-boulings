import PropTypes from 'prop-types';

const Hero = ({ 
  title, 
  highlight, 
  subtitle, 
  backgroundClass = '', 
}) => {
  return (
    <div className={`relative h-screen w-full overflow-hidden ${backgroundClass}`}>
      {/* Background layer can be customized via backgroundClass */}
      <div className="absolute inset-0 z-0"></div>

      {/* Centered content */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="px-4 text-center">
          <h1 className="text-5xl md:text-9xl font-semibold font-bebeu text-white mb-0 tracking-tight uppercase">
            {title} <span className="text-[#FDB927]">{highlight}</span>
          </h1>
          
          {subtitle && (
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
           
        </div>
      </div>
    </div>
  );
};

// Hero.propTypes = {
//   title: PropTypes.string.isRequired,
//   highlight: PropTypes.string,
//   subtitle: PropTypes.string,
//   backgroundClass: PropTypes.string,
//   height: PropTypes.string,
// };

export default Hero;
