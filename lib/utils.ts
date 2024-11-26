"use client";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleScroll = ({
  e,
  id,
  callback,
}: {
  e: React.MouseEvent;
  id?: string;
  callback?: () => void;
}) => {
  e.preventDefault();
  if (id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (callback) {
    callback();
  }
};

export const checkScrollPosition = (
  sectionId: string,
  setShowButton: (show: boolean) => void
) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const scrollPosition = window.scrollY + window.innerHeight;
  const sectionPosition = section.offsetTop;

  setShowButton(scrollPosition > sectionPosition);
};
