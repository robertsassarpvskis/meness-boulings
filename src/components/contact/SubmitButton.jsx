const SubmitButton = () => {
  return (
    <button 
      type="submit" 
      className="w-full py-3 px-6 bg-gradient-to-r from-[#FDB927] to-[#FFB800] text-[#552583] rounded-xl font-bold text-lg hover:from-white hover:to-[#FDB927] transition-all duration-500 border-2 border-transparent hover:border-[#552583] relative overflow-hidden group"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          SEND MESSAGE
        </span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-1" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-[#552583] to-[#2C106A] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
    </button>
  );
};

export default SubmitButton;