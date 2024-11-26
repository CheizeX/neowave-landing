"use client";

import {
  SPHERE_STYLES,
  SPHERE_VARIANTS,
} from "@/components/HomePage/AboutSection/AboutSection.shared";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundAnimation = ({
  size = "65%",
  children,
  className,
  containerClassName,
}: {
  size?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  useEffect(() => {
    document.body.style.setProperty("--circle-color", "250, 69, 21");
    document.body.style.setProperty("--size", size);
  }, [size]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  const createSphere = (
    variant: keyof typeof SPHERE_VARIANTS,
    size: keyof typeof SPHERE_STYLES.sizes,
    position: string
  ) => (
    <motion.div
      variants={SPHERE_VARIANTS[variant]}
      animate='animate'
      className={cn(
        SPHERE_STYLES.base,
        SPHERE_STYLES.sizes[size],
        position,
        `[mix-blend-mode:var(--blending-value)]`
      )}
    />
  );

  return (
    <div
      className={cn(
        "h-full w-full relative overflow-hidden top-0 left-0 right-0 bottom-0 pt-[100px] pb-[200px]",
        containerClassName
      )}>
      <svg className='hidden'>
        <defs>
          <filter id='blurMe'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='10'
              result='blur'
            />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
              result='goo'
            />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}>
        {createSphere("one", "large", "top-[10%] left-[10%]")}
        {createSphere("two", "medium", "top-[10%] left-[65%]")}
        {createSphere("three", "large", "top-[65%] left-[15%]")}
        {createSphere("four", "small", "top-[65%] left-[65%]")}
      </div>
    </div>
  );
};

export default BackgroundAnimation;
