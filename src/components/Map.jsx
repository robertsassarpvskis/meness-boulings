import React from 'react';

const Map = () => {
  return (
    <div className="max-w-7xl mx-auto mb-36">
      <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#552583]/20 h-[500px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4350.276394223657!2d24.173242877166846!3d56.963565198090606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eece42e480593b%3A0xfd9fbbea53135d9f!2sBoulinga%20sporta%20centrs%20%22M%C4%93ness%22!5e0!3m2!1sen!2sus!4v1752474874561!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale-50 contrast-125 brightness-90"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
