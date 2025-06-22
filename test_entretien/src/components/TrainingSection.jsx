import React from "react";
import { motion } from "framer-motion";

const TrainingSection = () => {
   return (
      // FOND avec skew
      <section className="relative -mt-20 z-10 overflow-hidden">
         <div className="relative z-10 bg-gradient-to-r from-[#ff512f] to-[#f09819] text-white py-20 px-6 md:px-20 lg:rounded-tl-[200px] lg:rounded-br-[200px] overflow-hidden lg:rounded-bl-[200px] lg:rounded-tr-[200px] lg:ml-10 transform lg:-skew-y-10 lg:mb-26 md:mb-34 mt-28">
            {/* CONTENU inversé pour le redresser */}
            <div className="transform lg:skew-y-10">
               <div className="text-center mb-6 mt-12">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                     Découvrez les entreprises partenaires du secteur cargo{" "}
                  </h1>
                  <p className="text-gray-200 max-w-2xl mx-auto text-lg">
                     Chaque jour, de nouvelles offres sont publiées pour des
                     postes à forte valeur ajoutée. Lancez votre carrière dès
                     aujourd’hui. 
                  </p>
               </div>
               <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Texte à gauche avec animation */}
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Les Formations aux métiers du CARGO
                     </h2>
                     <p className="mb-6 text-lg">
                        Notre IA vous aide à trouver la formation qui vous
                        correspond dans les métiers du transport, de la
                        logistique et du fret aérien.
                     </p>
                     <button className="px-6 py-3 bg-gradient-to-r from-[#00b1f5] to-[#0d2d69] text-white cursor-pointer font-semibold rounded hover:shadow-[#0d2d69] hover:bg-orange-100 transition">
                        Trouver ma formation
                     </button>
                  </motion.div>

                  {/* Image à droite avec animation */}
                  <motion.div
                     className="w-full max-w-md mx-auto"
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6 }}
                  >
                     <img
                        src="imagepc.png"
                        alt="Formation Cargo"
                        className="w-full rounded-xl"
                     />
                  </motion.div>
               </div>

               {/* Bouton centré */}
               <div className="flex justify-center items-center mt-6">
                  <button
                     type="button"
                     className="bg-gradient-to-r from-[#00b1f5] to-[#0d2d69] text-white px-6 py-3 rounded-lg hover:opacity-90 transition cursor-pointer font-medium hover:shadow-[#0d2d69]"
                  >
                     Voir tous les jobs disponibles
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default TrainingSection;
