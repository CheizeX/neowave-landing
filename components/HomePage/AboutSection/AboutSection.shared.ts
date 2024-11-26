export const SPHERE_VARIANTS = {
  one: {
    animate: {
      x: ["0%", "90%", "30%", "-70%", "0%"],
      y: ["0%", "10%", "-15%", "5%", "0%"],
      scale: [1, 1.2, 0.95, 1.1, 1],
      rotate: [0, 90, 180, 270, 360],
      transition: { duration: 30, repeat: Infinity, ease: "easeInOut" },
    },
  },
  two: {
    animate: {
      x: ["0%", "-80%", "60%", "0%"],
      y: ["0%", "-10%", "15%", "0%"],
      scale: [1.1, 0.95, 1.2, 1.1],
      transition: { duration: 25, repeat: Infinity, ease: "easeInOut" },
    },
  },
  three: {
    animate: {
      x: ["0%", "70%", "-60%", "0%"],
      y: ["0%", "-5%", "10%", "0%"],
      scale: [1.15, 1.2, 0.95, 1.15],
      rotate: [0, -120, -240, -360],
      transition: { duration: 35, repeat: Infinity, ease: "easeInOut" },
    },
  },
  four: {
    animate: {
      x: ["0%", "-50%", "80%", "-65%", "0%"],
      y: ["0%", "10%", "-5%", "5%", "0%"],
      scale: [1.1, 0.95, 1.2, 1.05, 1.1],
      transition: { duration: 28, repeat: Infinity, ease: "easeInOut" },
    },
  },
};

export const SPHERE_STYLES = {
  base: `absolute [background:radial-gradient(circle_at_center,_rgba(var(--circle-color),_0.8)_0,_rgba(var(--circle-color),_0)_50%)_no-repeat] [transform-origin:center] opacity-100`,
  sizes: {
    large: "w-[calc(var(--size)*0.8)] h-[calc(var(--size)*0.8)]",
    medium: "w-[calc(var(--size)*0.6)] h-[calc(var(--size)*0.6)]",
    small: "w-[calc(var(--size)*0.5)] h-[calc(var(--size)*0.5)]",
  },
};

export const ABOUT_TEXT_ITEMS = [
  ["Driven by a desire to understand", "the world's dynamics"],
  ["Committed to understanding", "the forces that shape our world"],
  ["Our vision is to uncover the mechanisms", "behind global events"],
  ["We aim to decode the complexities", "of the world"],
  ["We strive to make sense of the", "world's complexities"],
];
