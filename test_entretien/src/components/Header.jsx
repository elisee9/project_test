import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaPlaneDeparture, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
   { name: "Accueil", path: "/" },
   { name: "Offres", path: "/offres" },
   { name: "Formations", path: "/formations" },
];

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   const menuRef = useRef(null);

   useEffect(() => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";

      const handleClickOutside = (event) => {
         if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
         }
      };

      if (isOpen) {
         document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
         document.body.style.overflow = "auto";
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [isOpen]);

   return (
      <motion.header
         initial={{ y: -80, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
         className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#032651] to-[#1dc0f6] shadow-lg"
      >
         <div className="container mx-auto flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <NavLink
               to="/"
               className="flex items-center gap-2 text-xl font-bold text-white tracking-wide"
               onClick={() => setIsOpen(false)}
            >
               <FaPlaneDeparture className="text-orange-500" /> CargoJob
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center pr-10">
               {navLinks.map((link) => (
                  <NavLink
                     key={link.name}
                     to={link.path}
                     className={({ isActive }) =>
                        `relative text-white text-lg font-medium px-2 py-1 transition-all duration-300 pr-10 group ${
                           isActive
                              ? "text-orange-500"
                              : "hover:text-orange-500"
                        }`
                     }
                  >
                     {link.name}
                     <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
               ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
               className="md:hidden text-white text-2xl z-50"
               onClick={() => setIsOpen(!isOpen)}
               aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
               {isOpen ? <FaTimes /> : <FaBars />}
            </button>
         </div>

         {/* Mobile Navigation */}
         <AnimatePresence>
            {isOpen && (
               <>
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="fixed inset-0 bg-black/60 z-40 md:hidden"
                  />
                  <motion.div
                     ref={menuRef}
                     initial={{ x: "100%" }}
                     animate={{ x: 0 }}
                     exit={{ x: "100%" }}
                     transition={{ type: "tween", duration: 0.3 }}
                     className="fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-[#1dc0f6] to-[#032651] z-50 shadow-lg p-6 flex flex-col pt-20"
                  >
                     {navLinks.map((link) => (
                        <NavLink
                           key={link.name}
                           to={link.path}
                           className={({ isActive }) =>
                              `text-lg font-medium my-2 transition-all ${
                                 isActive
                                    ? "text-orange-500"
                                    : "text-white hover:text-orange-500"
                              }`
                           }
                           onClick={() => setIsOpen(false)}
                        >
                           {link.name}
                        </NavLink>
                     ))}
                  </motion.div>
               </>
            )}
         </AnimatePresence>
      </motion.header>
   );
};

export default Header;
