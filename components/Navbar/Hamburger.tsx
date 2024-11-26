"use client";

import { useStore } from "@/store/store";
import { motion } from "framer-motion";

export const Hamburger = () => {
  const { isNavOpen, toggleNav } = useStore();

  return (
    <button
      onClick={toggleNav}
      className='flex flex-col justify-center items-center md:hidden w-8 h-8 border-none '>
      <motion.span
        animate={isNavOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        className='w-6 h-0.5 bg-white mb-1.5'
      />
      <motion.span
        animate={isNavOpen ? { opacity: 0 } : { opacity: 1 }}
        className='w-6 h-0.5 bg-white mb-1.5'
      />
      <motion.span
        animate={isNavOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        className='w-6 h-0.5 bg-white'
      />
    </button>
  );
};
