"use client";
import { useEffect, useState } from "react";
import { checkScrollPosition } from "@/lib/utils";

export function useScrollPosition(targetId: string) {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    checkScrollPosition(targetId, setShowScrollButton);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showScrollButton;
}
