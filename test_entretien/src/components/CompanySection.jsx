import React from "react";
import { motion } from "framer-motion";

const companies = [
   {
      name: "SkyFreight",
      location: "Abidjan, Côte d'Ivoire",
      logo: "pp.webp",
   },
   {
      name: "Air Cargo",
      location: "Paris, France",
      logo: "pp.webp",
   },
   {
      name: "LogiCargo",
      location: "Cotonou, Bénin",
      logo: "pp.webp",
   },
   {
      name: "SkyFreight",
      location: "Abidjan, Côte d'Ivoire",
      logo: "pp.webp",
   },
];

const CompanySection = () => {
   return (
      <section className="relative z-10 overflow-hidden -mt-20">
         {/* FOND skewé */}
         <div className="transform  lg:rotate-15 bg-[#f3f2f2] lg:rounded-tl-[60px]  lg:rounded-[160px] px-6 md:px-20 py-20 mx-6 md:mx-10">
            {/* CONTENU redressé */}
            <div className="transform lg:-rotate-15">
               {/* Titre principal */}
               <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0d2d69] mb-4">
                     Les Entreprises qui recrutent
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                     Découvrez les entreprises partenaires du secteur cargo qui
                     proposent des opportunités passionnantes. Chaque jour, de
                     nouvelles offres sont publiées pour des postes à forte
                     valeur ajoutée. Lancez votre carrière dès aujourd’hui.
                  </p>
               </motion.div>

               {/* Grille des cartes */}
               <div className="grid md:grid-cols-4 gap-8">
                  {companies.map((company, index) => (
                     <motion.div
                        key={index}
                        className="bg-white shadow-md rounded-xl p-6 cursor-pointer flex flex-col items-center text-center hover:shadow-lg hover:shadow-[#0d2d69] transition"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                     >
                        <img
                           src={company.logo}
                           alt={company.name}
                           className="w-auto h-auto rounded-lg mb-4 object-cover"
                        />
                        <h3 className="text-lg font-semibold text-[#0d2d69] mb-2">
                           {company.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">
                           {company.location}
                        </p>
                        <button className="px-4 py-2 bg-gradient-to-r from-[#00b1f5] to-[#0d2d69] text-white rounded hover:shadow-[#0d2d69] hover:bg-orange-600 hover:shadow-2xl transition cursor-pointer">
                           Voir les offres
                        </button>
                     </motion.div>
                  ))}
               </div>

               {/* Bouton en bas */}
               <div className="flex justify-center items-center mt-12">
                  <button
                     type="button"
                     className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition cursor-pointer font-medium"
                  >
                     Voir tous les jobs disponibles
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CompanySection;
