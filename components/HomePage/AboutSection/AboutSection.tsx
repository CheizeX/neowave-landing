"use client";

import { ABOUT_TEXT_ITEMS } from "@/components/HomePage/AboutSection/AboutSection.shared";
import BackgroundAnimation from "@/components/HomePage/AboutSection/BackgroundAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const getVisibleItems = () => {
    const currentIndex = activeIndex;
    const nextIndex = (currentIndex + 1) % ABOUT_TEXT_ITEMS.length;
    const prevIndex =
      (currentIndex - 1 + ABOUT_TEXT_ITEMS.length) % ABOUT_TEXT_ITEMS.length;

    return [
      { text: ABOUT_TEXT_ITEMS[prevIndex], position: -1, index: prevIndex },
      {
        text: ABOUT_TEXT_ITEMS[currentIndex],
        position: 0,
        index: currentIndex,
      },
      { text: ABOUT_TEXT_ITEMS[nextIndex], position: 1, index: nextIndex },
    ];
  };

  const variants = {
    enter: {
      y: 150,
      opacity: 0,
      scale: 0.5,
      filter: "blur(10px)",
    },
    center: (position: number) => ({
      y: position * 100,
      opacity: position === 0 ? 1 : 0.5,
      scale: position === 0 ? 1 : 0.6,
      filter: "blur(0px) ",
      zIndex: position === 0 ? 2 : 1,
    }),
    exit: {
      y: -150,
      opacity: 0,
      scale: 0.5,
      filter: "blur(10px)",
      zIndex: 0,
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % ABOUT_TEXT_ITEMS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      className='flex flex-col w-full h-[calc(100vh-84px)] sm:h-screen overflow-hidden md:mt-20 relative'>
      <BackgroundAnimation>
        <motion.div
          className='absolute inset-0 flex items-center justify-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          <div className='flex flex-col w-full items-center h-3/4'>
            <h1 className='z-10 text-3xl md:text-6xl text-center font-bold mb-12 font-[family-name:var(--font-transducer-regular)] '>
              About Us
            </h1>

            <div className='h-full w-full relative flex flex-col items-center justify-center overflow-hidden'>
              <AnimatePresence initial={false}>
                {getVisibleItems().map(({ text, position, index }) => (
                  <motion.div
                    key={`about-text-${index}`}
                    className='absolute w-full text-center sm:px-4'
                    custom={position}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    variants={variants}
                    transition={{
                      y: { type: "spring", stiffness: 300, damping: 40 },
                      opacity: { duration: 0.5 },
                      scale: { duration: 0.4 },
                      filter: { duration: 1 },
                    }}>
                    <p className='text-2xl sm:text-4xl lg:text-5xl'>
                      {text[0]}
                    </p>
                    <p className='text-2xl sm:text-4xl lg:text-5xl opacity-90'>
                      {text[1]}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </BackgroundAnimation>
    </div>
  );
};

export default AboutSection;
