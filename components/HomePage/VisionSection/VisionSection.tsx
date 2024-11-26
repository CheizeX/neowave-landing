"use client";

import { VISION_ITEMS } from "./VisionSection.shared";
import { VisionItemId } from "./VisionSection.types";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VisionSection = () => {
  const [selectedId, setSelectedId] = useState<VisionItemId>(
    VISION_ITEMS[0].id
  );
  const [isDesktop, setIsDesktop] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();

  const startInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setSelectedId((currentId) => {
        const currentIndex = VISION_ITEMS.findIndex(
          (item) => item.id === currentId
        );
        const nextIndex = (currentIndex + 1) % VISION_ITEMS.length;
        return VISION_ITEMS[nextIndex].id;
      });
    }, 10000);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleItemClick = (id: VisionItemId) => {
    setSelectedId(id);
    startInterval();
  };

  return (
    <div
      aria-label='Vision and Values'
      className='flex flex-col items-center justify-center w-full min-h-screen overflow-hidden relative max-w-7xl m-auto py-12'>
      <h2 className='text-2xl md:text-[2.8rem] font-bold md:leading-10 mb-8 md:mb-20 px-4 xl:px-0 text-pretty'>
        Our vision is built on a foundation of relentless pursuit of knowledge,
        advanced technology, and an unwavering commitment to innovation.
      </h2>
      <div className='bg-background text-foreground font-bold w-full px-4'>
        <div
          className={`mx-auto ${
            isDesktop ? "grid md:grid-cols-2 gap-8 items-start" : ""
          }`}>
          {isDesktop ? (
            <>
              <div className='space-y-0' role='tablist'>
                {VISION_ITEMS.map((item, index) => (
                  <motion.button
                    key={item.id}
                    role='tab'
                    aria-selected={selectedId === item.id}
                    aria-controls={`panel-${item.id}`}
                    whileHover={selectedId !== item.id ? { scale: 1.02 } : {}}
                    whileTap={{ scale: 0.98 }}
                    animate={
                      selectedId === item.id
                        ? {
                            opacity: [1, 0.5, 1],
                            transition: {
                              duration: 0.3,
                              times: [0, 0.5, 1],
                              ease: "easeInOut",
                            },
                          }
                        : {}
                    }
                    className={`flex items-between justify-between w-full text-left relative group py-2 md:py-6 px-4 bg-primary/5 ${
                      selectedId === item.id
                        ? "border-y border-primary"
                        : index !== VISION_ITEMS.length - 1
                        ? "border-y border-primary/20"
                        : ""
                    }`}
                    onClick={() => handleItemClick(item.id)}>
                    <div
                      className={`text-2xl md:text-4xl transition-colors duration-200 ${
                        selectedId === item.id
                          ? "text-white font-semibold"
                          : "text-neutral-400 group-hover:text-white"
                      }`}>
                      {item.title}
                    </div>
                    {selectedId === item.id && (
                      <motion.div
                        className=''
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}>
                        <div className='w-10 h-10 rounded-full border border-white flex items-center justify-center'>
                          <ArrowRight className='w-4 h-4' />
                        </div>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
              <div
                className='relative h-[200px] md:h-auto px-4'
                role='tabpanel'
                id={`panel-${selectedId}`}>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={selectedId}
                    initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className='text-lg leading-6 md:text-2xl font-light'>
                    {
                      VISION_ITEMS.find((item) => item.id === selectedId)
                        ?.content
                    }
                  </motion.div>
                </AnimatePresence>
              </div>
            </>
          ) : (
            <Accordion
              type='single'
              value={selectedId}
              onValueChange={(value) => {
                if (value !== selectedId) {
                  setSelectedId(value as VisionItemId);
                  startInterval();
                }
              }}>
              {VISION_ITEMS.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className='border-primary/30'>
                  <motion.div
                    animate={
                      selectedId === item.id
                        ? {
                            opacity: [1, 0.5, 1],
                            transition: {
                              duration: 0.3,
                              times: [0, 0.5, 1],
                              ease: "easeInOut",
                            },
                          }
                        : {}
                    }>
                    <AccordionTrigger
                      className={`flex items-center justify-between w-full text-left relative group py-6 px-4 bg-primary/5 [&[data-state=open]>svg]:hidden [&>svg]:hidden hover:no-underline ${
                        selectedId === item.id
                          ? "border-y border-primary"
                          : index !== VISION_ITEMS.length - 1
                          ? "border-y border-primary/20"
                          : ""
                      }`}>
                      <div
                        className={`text-2xl transition-colors duration-200 ${
                          selectedId === item.id
                            ? "text-white font-semibold"
                            : "text-neutral-400 group-hover:text-white"
                        }`}>
                        {item.title}
                      </div>
                      {selectedId === item.id && (
                        <motion.div
                          className='ml-4'
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                          }}>
                          <div className='w-10 h-10 rounded-full border border-white flex items-center justify-center'>
                            <ArrowDown className='w-4 h-4' />
                          </div>
                        </motion.div>
                      )}
                    </AccordionTrigger>
                  </motion.div>
                  <AccordionContent className='bg-primary/5 px-4 py-6'>
                    <motion.div
                      initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className='text-lg leading-6 font-light'>
                      {item.content}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisionSection;

