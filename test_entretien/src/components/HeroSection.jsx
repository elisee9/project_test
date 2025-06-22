import { motion } from "framer-motion";
import React, { useState } from "react";
import Header from "./Header";

const Banner = () => {
   const [search, setSearch] = useState("");

   const handleSearch = (e) => {
      e.preventDefault();
      alert(`Recherche lancée pour : ${search}`);
   };

   return (
      <div className="relative h-auto min-h-screen overflow-hidden">
         <Header />
         <div
            style={{ backgroundImage: "bg.jpg" }}
            className="absolute bg-transparent bg-opacity-2 inset-0 bg-gradient-to-l from-[#1dc0f6] to-[#032651] transform lg:-rotate-15 lg:-mr-30 lg:-mb-28 origin-bottom-left rounded-br-[30px] md:rounded-br-[60px] rounded-bl-[200px] lg:ml-10 md:rounded-bl-[500px] z-0 -py-0"
         />

         <div className="absolute inset-0 z-10 flex items-center justify-center px-12 md:px-6 py-0">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
               <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 px-4 lg:pl-1 md:px-0"
               >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff5b5b] leading-tight  text-center md:text-center">
                     Votre Job board 100% <br className="hidden sm:block" />
                     dédié au secteur cargo
                  </h1>
                  <p className="text-base md:text-lg text-white/90 max-w-md text-center md:text-left lg:pl-10">
                     Découvrez tous les jobs disponibles, 100% Cargo !
                  </p>
               </motion.div>

               <motion.form
                  onSubmit={handleSearch}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col gap-4 items-center md:items-end w-full"
               >
                  {/* Input animé + bouton recherche */}
                  <div className="w-full max-w-md flex rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 gap-2">
                     <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Rechercher un poste"
                        className="flex-grow px-4 py-3 text-gray-900 outline-none bg-white transition-all duration-300 focus:ring-2 focus:ring-[#1dc0f6] focus:scale-[1.01]"
                     />
                     <button
                        type="submit"
                        className="bg-[#f64b3c] hover:bg-[#d7382b] text-white px-6 py-3 font-semibold transition-all duration-300 cursor-pointer"
                     >
                        Rechercher
                     </button>
                  </div>

                  {/* Bouton secondaire */}
                  <button
                     type="button"
                     className="w-full max-w-md bg-gradient-to-r from-[#00b1f5] to-[#0d2d69] text-white px-6 py-3 rounded-lg hover:opacity-90 transition cursor-pointer font-medium"
                  >
                     Voir tous les jobs disponibles
                  </button>
               </motion.form>
            </div>
         </div>
      </div>
   );
};

export default Banner;
