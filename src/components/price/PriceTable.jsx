import React from "react";

const PriceTable = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-8 my-5 rounded-3xl bg-gradient-to-br from-[#552583]/90 to-[#7b61df]/70 shadow-2xl border border-white/10 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-56 h-56 bg-[#FDB927]/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-16 w-72 h-72 bg-[#552583]/30 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      
      <div className="relative z-10">
        <h2 className="text-6xl font-bold text-[#FDB927] mb-6 text-center drop-shadow-md  font-bebeu">
          Cenu tabula
        </h2>
        
       

        {/* Bowling prices */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {/* Regular prices */}
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-[#FDB927]/40">
              Boulinga tarifi
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-[#FDB927]/30">
                    <th className="text-left pb-2 font-semibold">Laiks</th>
                    <th className="text-right pb-2 font-semibold">Cena/st.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#FDB927]/20">
                  <tr>
                    <td className="py-3">Pirmdiena 12:00-18:00</td>
                    <td className="text-right font-bold text-[#FDB927]">13.80 €</td>
                  </tr>
                  <tr>
                    <td className="py-3">Pirmdiena 18:00-00:00</td>
                    <td className="text-right font-bold text-[#FDB927]">15.60 €</td>
                  </tr>
                  <tr>
                    <td className="py-3">Otrdiena-Trešdiena 12:00-18:00</td>
                    <td className="text-right font-bold text-[#FDB927]">13.80 €</td>
                  </tr>
                  <tr>
                    <td className="py-3">Otrdiena-Trešdiena 18:00-00:00</td>
                    <td className="text-right font-bold text-[#FDB927]">19.80 €</td>
                  </tr>
                  <tr>
                    <td className="py-3">Piektdiena 12:00-18:00</td>
                    <td className="text-right font-bold text-[#FDB927]">15.60 €</td>
                  </tr>
                  <tr>
                    <td className="py-3">Piektdiena 18:00-00:00</td>
                    <td className="text-right font-bold text-[#FDB927]">24.00 €</td>
                  </tr>
                  <tr>
                    <td className="py-3">Sestdiena/Svētki 12:00-00:00</td>
                    <td className="text-right font-bold text-[#FDB927]">24.00 €</td>
                  </tr>
                  <tr>
                    <td className="py-3">Svētdiena 12:00-00:00</td>
                    <td className="text-right font-bold text-[#FDB927]">22.20 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-sm text-white/80">
              <p>Uz viena celiņa līdz 6 spēlētājiem</p>
              <p>Abonements: 10 stundas - 156.00 €</p>
            </div>
          </div>
          
          {/* Special offers */}
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-[#FDB927]/40">
              Speciālie piedāvājumi
            </h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#FDB927] mb-3">Skolēniem/studentiem (2 stundu pakete)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-white">
                  <thead>
                    <tr className="border-b border-[#FDB927]/30">
                      <th className="text-left pb-2 font-semibold">Laiks</th>
                      <th className="text-right pb-2 font-semibold">Cena</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#FDB927]/20">
                    <tr>
                      <td className="py-3">Pirmdiena 12:00-20:00</td>
                      <td className="text-right font-bold text-[#FDB927]">23.00 €</td>
                    </tr>
                    <tr>
                      <td className="py-3">Pirmdiena 20:00-00:00</td>
                      <td className="text-right font-bold text-[#FDB927]">26.00 €</td>
                    </tr>
                    <tr>
                      <td className="py-3">Otrdiena-Trešdiena 12:00-20:00</td>
                      <td className="text-right font-bold text-[#FDB927]">23.00 €</td>
                    </tr>
                    <tr>
                      <td className="py-3">Otrdiena-Trešdiena 20:00-00:00</td>
                      <td className="text-right font-bold text-[#FDB927]">33.00 €</td>
                    </tr>
                    <tr>
                      <td className="py-3">Piektdiena 12:00-20:00</td>
                      <td className="text-right font-bold text-[#FDB927]">26.00 €</td>
                    </tr>
                    <tr>
                      <td className="py-3">Piektdiena 20:00-00:00</td>
                      <td className="text-right font-bold text-[#FDB927]">40.00 €</td>
                    </tr>
                    <tr>
                      <td className="py-3">Sestdiena/Svētki 12:00-00:00</td>
                      <td className="text-right font-bold text-[#FDB927]">40.00 €</td>
                    </tr>
                    <tr>
                      <td className="py-3">Svētdiena 12:00-00:00</td>
                      <td className="text-right font-bold text-[#FDB927]">37.00 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-[#FDB927] mb-2">Biljards</h4>
              <p className="text-white text-xl font-bold">8.40 €/st.</p>
            </div>
          </div>
        </div>
        
        {/* Additional rules */}
        <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
          <h3 className="text-xl font-bold text-[#FDB927] mb-4">Noteikumi</h3>
          <ul className="space-y-3 text-white text-sm md:text-base">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Studentu tarifi darbojas, ja vismaz 50% spēlētāju uz celiņa ir studenti</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Par abonementa izmantošanu jāpaziņo administratoram pirms spēles sākuma</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Visas cenas norādītas ar PVN</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Administratoram ir tiesības pārbaudīt personas dokumentus</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;