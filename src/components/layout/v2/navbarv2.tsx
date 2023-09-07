import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Logo from "../../../../public/logo/logo-full.svg";

import Msg from "../../../../public/wrapper/msg.svg";
import Alarm from "../../../../public/wrapper/alarm.svg";
import User from "../../../../public/wrapper/user.png";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const mobileMenuVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
  };

  const renderMobileMenu = () => (
    <AnimatePresence>
      {showMobileMenu && (
        <motion.div
          className="fixed top-0 left-0 h-full w-full bg-[#0A204A] p-5 overflow-auto z-50"
          initial="closed"
          animate="open"
          exit="closed"
          variants={mobileMenuVariants}
        >
          <button
            onClick={() => setShowMobileMenu(false)}
            className="absolute right-5 text-3xl top-5 bg-transparent text-white border-none outline-none"
          >
            &#10005;
          </button>

          <div className="flex flex-col items-center justify-center text-2xl font-bold h-full pt-20">
            <a href="/dashboard">
              <Image src={Logo} alt="" className="w-42 py-5" />
            </a>
            <div className="flex flex-col items-center justify-center text-2xl space-y-20 font-bold h-full pt-20">
              <a
                href="/dashboard"
                className="text-white hover:text-yellow_text"
              >
                Home
              </a>
              <a
                href="/humans-of-guidingbee"
                className="text-white hover:text-yellow_text"
              >
                Humans of Guiding Bee
              </a>
              <a href="/mentors" className="text-white hover:text-yellow_text">
                Mentors
              </a>
              <a
                href="/ai"
                className="text-white hover:text-yellow_text transition-all"
              >
                Ask AI
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="w-[100vw] px-16 flex flex-row items-center text-xl bg-[#0A204A] gap-x-20 justify-between z-50">
      <div className="flex flex-row space-x-10">
        <a href="/dashboard">
          <Image src={Logo} alt="" className="w-36 h-auto py-5" />
        </a>
      </div>
      {isMobile ? (
        <button
          className="text-3xl text-white"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          ☰
        </button>
      ) : (
        <div className="flex flex-row text-white items-center justify-end w-full gap-x-6 text-lg md:text-big-text">
          <div className="flex flex-row items-center gap-x-12 w-full">
            <a
              href="/dashboard"
              className="hover:text-yellow_text transition-all"
            >
              Home
            </a>
            <a
              href="/humans-of-guidingbee"
              className="text-white hover:text-yellow_text"
            >
              Blogs
            </a>
            <a
              href="/mentors"
              className="hover:text-yellow_text transition-all"
            >
              Mentors
            </a>
            <a href="/ai" className="hover:text-yellow_text text-white">
              Ask AI
            </a>
          </div>

          <div className="flex flex-row justify-center items-center w-full gap-x-6">
            <Image src={Msg} alt="" className="w-5" />
            <Image src={Alarm} alt="" className="w-5" />
            <input
              className="border border-[#D5DAE1] rounded-2xl font-normal px-4 py-1"
              type="search"
              placeholder="Search"
            />
            <Image src={User} alt="User" className="w-8 h-8" />
          </div>
        </div>
      )}
      {renderMobileMenu()}
    </div>
  );
};

export default Navbar;
