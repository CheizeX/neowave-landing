import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

interface CarouselProps {
  children: React.ReactNode[];
  interval?: number;
}

export const Carousel = ({ children, interval = 5000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = children.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentIndex]);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, interval);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent, info: PanInfo) => {
    if (info.offset.x > 50) {
      prevSlide();
    } else if (info.offset.x < -50) {
      nextSlide();
    }
  };

  return (
    <div className='overflow-hidden relative flex items-start justify-center h-[280px] w-full'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            opacity: { duration: 0.2 },
          }}
          className='absolute flex items-center justify-center w-full'>
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
