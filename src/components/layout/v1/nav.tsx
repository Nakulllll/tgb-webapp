import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Logo from "../../../../public/logo/icon.svg";
import Button from "@/components/ui/button";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });

  const mobileMenuVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
  };

  const renderMobileMenu = () => (
    <AnimatePresence>
      {showMobileMenu && (
        <motion.div
          className="fixed top-0 left-0 h-full w-full bg-primary p-5 overflow-auto z-50"
          initial="closed"
          animate="open"
          exit="closed"
          variants={mobileMenuVariants}
        >
          <button
            onClick={() => setShowMobileMenu(false)}
            className="absolute right-5 text-3xl top-5 bg-transparent border-none outline-none"
          >
            &#10005;
          </button>
          <div className="flex flex-col items-center justify-center h-full space-y-4 pt-20">
            <a href="/">Home</a>
            <a href="/">Contact Us</a>
            <a href="/">About Us</a>
            <a href="/">FAQ</a>
            <a href="/signin" className="bg-white px-6 py-2 rounded-2xl">
              Login
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="w-full px-4 py-2 flex flex-row items-center text-xl justify-between z-50">
      <div className="flex flex-row space-x-10">
        <a href="/">
          <Image src={Logo} alt="" className="w-52 py-5" />
        </a>
      </div>
      {isMobile ? (
        <button
          className="text-3xl"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          ☰
        </button>
      ) : (
        <div className="flex flex-row items-center justify-center space-x-10 text-lg md:text-big-text">
          <a href="/" className="hover:text-yellow_text transition-all">
            Home
          </a>
          <a href="/" className="hover:text-yellow_text transition-all">
            Contact Us
          </a>
          <a href="/" className="hover:text-yellow_text transition-all">
            About Us
          </a>
          <a href="/" className="hover:text-yellow_text transition-all">
            FAQ
          </a>

          <div className="">
            <a
              href="/signin"
              className="w-56 px-10 py-3 my-2 bg-primary rounded-3xl hover:bg-button_hover transition-all"
            >
              Login
            </a>
          </div>
        </div>
      )}
      {renderMobileMenu()}
    </div>
  );
};

export default Navbar;
