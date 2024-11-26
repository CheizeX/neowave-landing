"use client";

import { useEffect, useId, useState } from "react";
import Particles from "react-particles";
import { tsParticles } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { SparklesProps } from "@/components/HomePage/Footer/Footer.types";

export function Sparkles({
  className,
  size = 1.2,
  minSize = null,
  density = 800,
  speed = 1.5,
  opacity = 1,
  direction = "none",
  opacitySpeed = 3,
  minOpacity = null,
  color = "#ffffff",
  hover = false,
  background = "transparent",
  options = {},
}: SparklesProps) {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    loadSlim(tsParticles).then(() => {
      setIsReady(true);
    });
  }, []);
  const id = useId();
  const defaultOptions = {
    background: {
      color: {
        value: background,
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: 300,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: hover,
          mode: "repulse",
        },
        resize: true,
      },
    },
    particles: {
      color: {
        value: color,
      },
      move: {
        direction: direction,
        enable: true,
        speed: speed,
        straight: false,
      },
      number: {
        value: density,
      },
      opacity: {
        value: {
          min: minOpacity || opacity / 10,
          max: opacity,
        },
        animation: {
          enable: true,
          speed: opacitySpeed,
        },
      },
      size: {
        value: {
          min: minSize || size / 1.5,
          max: size,
        },
      },
    },
    detectRetina: true,
  };
  return (
    isReady && (
      <Particles
        id={id}
        options={{ ...defaultOptions, ...options }}
        className={className}
      />
    )
  );
}