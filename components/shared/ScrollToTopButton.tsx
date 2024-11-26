"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollToTopButton = ({ show }: { show: boolean }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key='scroll-button'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className='fixed bottom-10 right-4 z-50'>
          <Button
            onClick={scrollToTop}
            className='rounded-full aspect-square w-12 h-12 bg-primary hover:bg-primary/90'>
            <ArrowUp className='text-white w-6 h-6' />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
