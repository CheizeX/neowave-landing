"use client";

import { CustomCardProps } from "@/components/HomePage/AdvancedIndicatorsSection/AdvancedIndicators.types";
import { useWindowSize } from "@/hooks/useWindowSize";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";

export const CustomCard = ({
  text,
  number,
  angle,
  position,
  isExpanded,
  toggleExpand,
  animationProps,
  modalContent,
}: CustomCardProps) => {
  const { width } = useWindowSize();
  const isMobile = width && width < 1024;

  return (
    <>
      {/* CARD */}
      {!isExpanded && (
        <motion.div
          animate={isMobile ? undefined : { y: animationProps?.y }}
          transition={
            isMobile
              ? undefined
              : {
                  duration: animationProps?.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: animationProps?.delay,
                }
          }
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          role='button'>
          <motion.div
            className={`p-4 overflow-hidden text-white transform transition-transform duration-300 ease-out border border-zinc-700/50 backdrop-saturate-150 backdrop-blur-[3px] cursor-pointer rounded-xl ${
              isExpanded ? "scale-110 z-10 border-primary/50" : "z-0"
            } ${
              isMobile
                ? "relative max-w-[screen] w-[350px] h-[280px] mx-auto"
                : "absolute w-[280px] h-[280px]"
            }`}
            style={{
              left: isMobile ? "auto" : `calc(50% + ${position?.x}px)`,
              top: isMobile ? "auto" : `${position?.y}px`,
              transform: isMobile
                ? "none"
                : `translate(-50%, 50%) rotate(${angle}deg) translateY(-50%)`,
              background: isExpanded
                ? "linear-gradient(to bottom left, rgba(25, 25, 25, 1), #1c1c1c)"
                : "linear-gradient(to bottom left, rgba(79, 79, 79, 0.7), rgba(20, 20, 20, 0))",
              boxShadow: isExpanded
                ? "0 0 20px rgba(255, 255, 255, 0)"
                : "0 0 15px rgba(0, 0, 0, 0.2)",
            }}
            layoutId={`card-${number}`}>
            <span className='absolute top-2 right-2 flex items-center justify-center border border-primary-foreground text-2xl rounded-full px-3 pt-1 font-[family-name:var(--font-biotcount-regular)]'>
              {number}
            </span>
            <p className='text-2xl pt-8'>{text}</p>
            <div className='absolute bottom-2 left-2 text-2xl font-bold font-[family-name:var(--font-biotcount-regular)]'>{`>>>`}</div>
          </motion.div>
        </motion.div>
      )}
      {/* CARD EXPANDED */}
      <AnimatePresence>
        {isExpanded && modalContent && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center bg-none'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            role='dialog'
            aria-modal='true'>
            <motion.div
              className='relative bg-white rounded-lg shadow-lg overflow-auto'
              style={{
                background:
                  "linear-gradient(to bottom left, rgba(25, 25, 25, 1), #1c1c1c)",
                boxShadow: "0 0 20px rgba(255, 255, 255, 0)",
                width: "60vw",
                height: "50vh",
                maxHeight: "80vh",
              }}
              initial={{
                backdropFilter: "blur(10px)",
                rotate: angle,
                x: position?.x,
                y: position?.y,
              }}
              animate={{
                rotate: 0,
                x: 0,
                y: 0,
              }}
              exit={{
                rotate: angle,
                x: position?.x,
                y: position?.y,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}>
              <button
                onClick={toggleExpand}
                aria-label='Close'
                className='absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 z-10'>
                <XIcon className='w-6 h-6' />
              </button>
              {modalContent.component && (
                <div className='p-4'>{modalContent.component}</div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
