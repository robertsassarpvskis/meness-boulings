import React from 'react';

const Map = () => {
  return (
    <div className="w-full max-w-7xl h-[500px] rounded-xl my-12 overflow-hidden shadow-lg border-2 border-[#552583]">
      <iframe
        title="Mēness Boulinga atrašanās vieta"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4350.276732587824!2d24.175817799999997!3d56.9635623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eece42e480593b%3A0xfd9fbbea53135d9f!2sBoulinga%20sporta%20centrs%20%22M%C4%93ness%22!5e0!3m2!1slv!2slv!4v1752486756879!5m2!1slv!2slv"
        height="100%"
        width="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
