const FormHeader = () => {
  return (
    <div className="mb-8 group">
      <h2 className="text-3xl font-bold text-white">
        <span className="text-[#FDB927] animate-pulse inline-block transition-transform group-hover:scale-110">
          SEND US
        </span> 
        <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">
          A MESSAGE
        </span>
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-[#FDB927] to-transparent mt-2 rounded-full group-hover:w-24 transition-all duration-300"></div>
    </div>
  );
};

export default FormHeader;