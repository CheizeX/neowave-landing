"use client";

import { Hamburger } from "@/components/Navbar/Hamburger";
import { MobileNav } from "@/components/Navbar/MobileNav";
import { Button } from "@/components/ui/button";
import { handleScroll } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SiteNavigationLinks, SitePaths } from "../../config/site-types";

const Navbar = () => {
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className='sticky top-0 mx-auto px-4 sm:px-8 py-4 flex items-center justify-between backdrop-blur-md bg-opacity-30 z-50'>
        <motion.div whileTap={{ scale: 0.95 }}>
          <Link
            href={SitePaths.HOME}
            onClick={(e) => handleScroll({ e })}
            as='a'
            className='flex items-center justify-center gap-2'>
            <div className='relative w-[52px] lg:w-[70px] h-[52px]'>
              <Image
                src='/images/logo-white.svg'
                alt='NeoWave Logo'
                fill
                priority
              />
            </div>
            <span className='text-2xl lg:text-3xl font-bold'>NeoWave</span>
          </Link>
        </motion.div>
        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-6 text-sm'>
          {Object.entries(SiteNavigationLinks).map(([key, value]) => (
            <Link
              key={key}
              href={SitePaths[key as keyof typeof SitePaths]}
              onClick={(e) =>
                handleScroll({ e, id: `${key.toLowerCase()}-section` })
              }
              className='hover:scale-105 transform transition-transform hover:font-bold lg:text-xl'>
              {value}
            </Link>
          ))}
          <div className='flex justify-between items-center border border-white rounded-full lg:h-11 lg:w-52 lg:px-[3px] p-[2px]'>
            <Button
              variant='ghost'
              className='hover:scale-105 transform transition-transform hover:bg-transparent lg:text-lg'>
              LOGIN
            </Button>
            <Button className='bg-foreground text-background hover:bg-foreground hover:opacity-90 lg:text-lg'>
              SIGNUP
            </Button>
          </div>
        </nav>
      </motion.header>
      {/* Mobile Navigation */}
      <div className='fixed top-7 right-6 z-[51] md:hidden'>
        <Hamburger />
      </div>
      <MobileNav />
    </>
  );
};

export default Navbar;
