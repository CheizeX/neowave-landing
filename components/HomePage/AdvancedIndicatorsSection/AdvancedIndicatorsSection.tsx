"use client";

import { ADVANCED_INDICATORS_CARDS } from "@/components/HomePage/AdvancedIndicatorsSection/AdvancedIndicators.shared";
import { Position } from "@/components/HomePage/AdvancedIndicatorsSection/AdvancedIndicators.types";
import { CustomCard } from "@/components/HomePage/AdvancedIndicatorsSection/CustomCard";
import { Carousel } from "@/components/shared/Carousel";
import { useWindowSize } from "@/hooks/useWindowSize";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const calculatePosition = (index: number): Position => {
  const xPositions = [-380, -200, 0, 200, 380];
  const yPositions = [50, -60, -110, -60, 50];

  return {
    x: xPositions[index],
    y: yPositions[index],
  };
};

export const AdvancedIndicatorsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { width } = useWindowSize();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const rotate = useTransform(scrollYProgress, [0, 0.5], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value >= 0.5) {
        setAnimationCompleted(true);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const positions = useMemo(() => {
    return ADVANCED_INDICATORS_CARDS.map((_, index) =>
      calculatePosition(index)
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className='flex flex-col justify-center items-center min-h-screen w-full m-auto overflow-hidden'>
      <div className='relative w-full max-h-screen bg-[url("/images/backgrounds/bg-home-section.png")] bg-cover bg-center pb-[80%] sm:pb-[75%] '>
        <div className='left-0 sm:top-48 lg:top-32 2xl:top-96 relative'>
          <h1 className='text-3xl md:text-6xl text-center font-bold mb-4 font-[family-name:var(--font-transducer-regular)]'>
            Advanced indicators
            <br />
            to analyze the market
          </h1>
          {width && width < 1024 ? (
            <div className='absolute left-0 right-0 top-24 sm:top-40 min-h-[380px] w-full'>
              {/* MOBILE */}
              <Carousel interval={5000}>
                {ADVANCED_INDICATORS_CARDS.map((card, index) => (
                  <CustomCard
                    key={index}
                    text={card.text}
                    number={card.number}
                    isExpanded={false}
                    toggleExpand={() => {}}
                    modalContent={card.modalContent}
                  />
                ))}
              </Carousel>
            </div>
          ) : (
            <div className='absolute left-0 top-80 flex flex-col items-center w-full h-fit'>
              {/* DESKTOP */}
              <motion.div
                className='relative w-full h-96 mt-10'
                style={{
                  transformOrigin: "50% 100%",
                  rotate: animationCompleted ? 0 : rotate,
                  opacity: animationCompleted ? 1 : opacity,
                }}>
                {ADVANCED_INDICATORS_CARDS.map((card, index) => {
                  const position = positions[index];
                  const isExpanded = expandedCard === index;
                  return (
                    <CustomCard
                      key={index}
                      text={card.text}
                      number={card.number}
                      angle={card.angle}
                      position={position}
                      isExpanded={isExpanded}
                      toggleExpand={() =>
                        setExpandedCard(isExpanded ? null : index)
                      }
                      animationProps={card.animationProps}
                      modalContent={card.modalContent}
                    />
                  );
                })}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
