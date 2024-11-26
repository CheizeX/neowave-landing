"use client";

import { Button } from "@/components/ui/button";
import { SiteNavigationLinks, SitePaths } from "@/config/site-types";
import { handleScroll } from "@/lib/utils";
import { useStore } from "@/store/store";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const MobileNav = () => {
  const { isNavOpen, toggleNav } = useStore();

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      toggleNav();
    }
  };

  const handleLogin = () => {
    toggleNav();
  };

  const handleSignup = () => {
    toggleNav();
  };

  return (
    <AnimatePresence>
      {isNavOpen && (
        <motion.div
          onClick={handleBackdropClick}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className='fixed inset-0 bg-background/95 backdrop-blur-sm z-50 md:hidden'>
          <div className='flex flex-col items-center justify-center h-full gap-8'>
            <div className='relative w-[52px] h-[52px] cursor-pointer'>
              <Image
                src='/images/logo-white.svg'
                alt='NeoWave Logo'
                fill
                priority
              />
            </div>
            <Link
              className='relative cursor-pointer'
              onClick={(e) => {
                handleScroll({ e, id: "home-section", callback: toggleNav });
              }}
              href={SitePaths.HOME}>
              <span className='flex items-center justify-center text-2xl hover:text-muted-foreground'>
                HOME
              </span>
            </Link>

            {Object.keys(SiteNavigationLinks).map((key) => (
              <Link
                key={key}
                href={SitePaths[key as keyof typeof SitePaths]}
                onClick={(e: React.MouseEvent) => {
                  handleScroll({
                    e,
                    id: `${key.toLowerCase()}-section`,
                    callback: toggleNav,
                  });
                }}
                className='text-2xl hover:text-muted-foreground'>
                {SiteNavigationLinks[key as keyof typeof SiteNavigationLinks]}
              </Link>
            ))}

            <div className='w-[180px] flex flex-col gap-4'>
              <Button variant='outline' onClick={handleLogin}>
                LOGIN
              </Button>
              <Button onClick={handleSignup}>SIGNUP</Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
