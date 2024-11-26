"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export const HomePageHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pause video when not in view
  useEffect(() => {
    const currentVideoRef = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentVideoRef?.play();
        } else {
          currentVideoRef?.pause();
        }
      },
      { threshold: 0.25 }
    );

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  return (
    <div className='flex items-center h-full w-full max-w-7xl sm:py-10 m-auto min-h-[calc(100vh-85px)]'>
      <div className='flex mx-auto px-4 sm:pl-8 sm:pr-0'>
        <div className='grid grid-cols-1 items-center justify-center md:grid-cols-[53%,47%]'>
          <div className='order-2 md:order-1 flex sm:gap-4 flex-col'>
            <div className='flex sm:gap-4 flex-col pb-1'>
              <h1 className='font-bold text-foreground text-4xl md:text-5xl lg:text-6xl mb-4 font-[family-name:var(--font-transducer-medium)]'>
                Your <span className='text-primary'>financial vision</span>,
                <br />
                clearer than ever.
              </h1>
              <p className='text-xl tracking-tight text-foreground max-w-md text-left '>
                We provide the possibility to create advanced financial analysis
                with an intuitive interface.
              </p>
            </div>
            <div className='flex flex-row gap-4 mt-8'>
              <Button size='lg' className='gap-4'>
                TRY IT FOR FREE
              </Button>
            </div>
          </div>
          <div className='order-1 w-fit m-auto md:order-2 relative h-fit sm:h-[300px] md:h-[400] lg:h-[500] xl:h-[600px] 2xl:h-[700px]'>
            <video
              ref={videoRef}
              className='object-cover w h-full'
              autoPlay
              muted
              loop
              playsInline
              preload='auto'>
              <source src='/videos/hero.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};
