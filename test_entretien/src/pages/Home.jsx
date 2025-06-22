// src/pages/Home.jsx
import HeroSection from "../components/HeroSection";
import { motion } from "framer-motion";
import TikTokSection from "../components/TikTokSection";
import CompanySection from "../components/CompanySection";
import TrainingSection from "../components/TrainingSection";

export default function Home() {
   return (
      <>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
         >
            <HeroSection />
            <TikTokSection />
            <CompanySection />
            <TrainingSection />
         </motion.div>
      </>
   );
}
