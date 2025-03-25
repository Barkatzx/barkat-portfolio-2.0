"use client"; // Add this directive at the very top

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../public/img/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: { opacity: 0, y: -20 },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <header className="container mx-auto bg-[#f9f6f3] sticky top-0 z-40 flex items-center justify-between px-5 md:px-20 py-10 rounded-t-2xl">
      {/* Logo */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="text-xl font-bold">
          <Image src={logo} alt="logo" width={160} height={40} priority />
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 justify-center backdrop-blur-sm px-6 py-2">
        <motion.div
          className="flex space-x-6"
          initial="hidden"
          animate="visible"
        >
          {["Home", "About", "Contact"].map((item, i) => (
            <motion.div
              key={item}
              variants={navItemVariants}
              custom={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors font-semibold"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </nav>

      {/* Mobile Menu Button */}
      <motion.div
        className="md:hidden flex-1 flex justify-end"
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-blue-600 focus:outline-none bg-green-300 p-2 rounded-md"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FiX size={24} className="text-red-500" />
          ) : (
            <FiMenu size={24} />
          )}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-25 left-0 right-0 bg-[#f9f6f3] shadow-lg z-50"
          >
            <nav className="flex flex-col items-center py-4">
              {["Home", "About", "Contact"].map((item, i) => (
                <motion.div
                  key={item}
                  variants={navItemVariants}
                  custom={i}
                  className="w-full text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="block py-3 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right spacer for desktop */}
      <div className="hidden md:block flex-1"></div>
    </header>
  );
}
