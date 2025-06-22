import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const TikTokSection = () => {
   return (
      <section className="relative z-0 bg-white py-16 px-4 md:px-20 mb-30 ">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texte avec animation */}
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
            >
               <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
                  Postulez avec une <br /> vidéo TIK TOK !
               </h2>
               <p className="text-gray-700 mb-2">
                  Soyez créatif·ve et démarquez-vous auprès des entreprises du
                  secteur CARGO !
               </p>
               <p className="text-gray-700 mb-6 font-semibold">
                  Soyez créatif·ve et démarquez-vous auprès des entreprises du
                  secteur CARGO !
               </p>
               <button className="px-6 py-3 bg-orange-500 cursor-pointer  hover:shadow-[#0d2d69]  text-white rounded hover:bg-orange-600 transition">
                  Créer ma vidéo maintenant
               </button>
            </motion.div>

            {/* Image/Vidéo avec animation */}
            <motion.div
               className="relative w-full max-w-md mx-auto"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
            >
               <img
                  src="tiktok-video.jpg"
                  alt="TikTok vidéo"
                  className="w-full rounded-lg shadow-lg"
               />
               <div className="absolute inset-0 flex justify-center items-center">
                  <button className="bg-gradient-to-r from-[#00b1f5] to-[#0d2d69] p-4 rounded-full shadow-md hover:scale-110 transition">
                     <FaPlay className="text-white text-xl" />
                  </button>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default TikTokSection;
