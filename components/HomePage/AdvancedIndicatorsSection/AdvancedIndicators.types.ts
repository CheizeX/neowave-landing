import { ReactNode } from "react";

export interface Position {
  x: number;
  y: number;
}

export interface CustomCardProps {
  text: ReactNode;
  number: string;
  angle?: number;
  position?: Position;
  isExpanded: boolean;
  toggleExpand: () => void;
  cardWidth?: number;
  animationProps?: {
    y: number[];
    duration: number;
    delay: number;
  };
  modalContent?: {
    imgSrc?: string;
    videoSrc?: string;
    component?: ReactNode;
  };
}
