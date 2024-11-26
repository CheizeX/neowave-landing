"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CounterProps {
  targetValue: number;
  duration?: number;
  step?: number;
  decimals?: number;
  className?: string;
}

export const CounterNumber = ({
  targetValue,
  duration = 1000,
  step = 0.05,
  decimals = 2,
  className,
}: CounterProps) => {
  const [displayValue, setDisplayValue] = useState(targetValue);
  const animationRef = useRef<NodeJS.Timeout>();
  const startTimeRef = useRef<number>();
  const currentValueRef = useRef(targetValue);

  const formatValue = useCallback(
    (val: number) => Number(val.toFixed(decimals)),
    [decimals]
  );

  const animate = useCallback(
    (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const diff = targetValue - currentValueRef.current;

      if (progress >= duration || Math.abs(diff) < step) {
        setDisplayValue(targetValue);
        currentValueRef.current = targetValue;
        return;
      }

      const newValue = currentValueRef.current + (diff > 0 ? step : -step);
      currentValueRef.current = formatValue(newValue);
      setDisplayValue(currentValueRef.current);

      animationRef.current = setTimeout(() => {
        animate(performance.now());
      }, 1000 / 60); // 60 FPS
    },
    [targetValue, duration, step, formatValue]
  );

  useEffect(() => {
    if (targetValue === displayValue) return;

    animate(performance.now());

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      startTimeRef.current = undefined;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetValue, animate]);

  const formattedValue = useMemo(
    () => displayValue.toFixed(decimals),
    [displayValue, decimals]
  );

  return <span className={cn(className)}>{formattedValue}</span>;
};
