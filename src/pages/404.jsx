import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#552583] to-[#FDB927] text-white overflow-hidden px-4">
      {/* Dekoratīvie apļi */}
      <div className="absolute w-[400px] h-[400px] bg-white opacity-10 rounded-full top-[-120px] left-[-120px] z-0"></div>
      <div className="absolute w-[300px] h-[300px] bg-black opacity-15 rounded-full bottom-[-100px] right-[-100px] z-0"></div>

      <div className="z-10">
        <h1 className="text-9xl font-bebas tracking-wider">404</h1>
        <p className="text-2xl md:text-3xl mt-4 font-semibold">Šī lapa nav atrasta...</p>
        <p className="text-lg mt-2 text-white/90">Iespējams, adrese ir nepareiza vai lapa ir pārvietota.</p>

        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 text-[#552583] bg-[#FDB927] rounded-xl font-semibold text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 shadow-lg"
        >
          Atgriezties sākumā
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
