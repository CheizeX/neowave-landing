"use client";

import { Sparkles } from "@/components/shared/Sparkles";
import { Button } from "@/components/ui/button";
import { SiteNavigationLinks, SitePaths } from "@/config/site-types";
import { handleScroll } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <div
      aria-label='Vision and Values'
      className='flex flex-col items-center justify-center w-full h-1/2 overflow-hidden relative m-auto mt-40 sm:mt-80'>
      <div className='flex justify-center items-center gap-4 font-bold'>
        <div className='relative w-10 h-10 md:w-[60px] md:h-[52px]'>
          <Image src='/images/logo.svg' alt='NeoWave Logo' fill />
        </div>
        <span className='flex items-center justify-center pb-1 h-fit text-2xl md:text-4xl font-bold'>
          {" "}
          NeoWave
        </span>
      </div>

      <div className='relative h-40 lg:h-96 w-full overflow-hidden a-image before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#fa4715a1,transparent_30%)] before:opacity-100 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/2] after:w-[200%] after:rounded-[50%] after:shadow-[0_-5px_15px_-5px_rgba(250,69,21,1)] after:bg-[radial-gradient(circle_at_47%_top,#2d0b05,#000000_4%)] after:opacity-100'>
        <Sparkles
          color='#FA4515'
          density={300}
          size={1}
          direction='none'
          speed={0.5}
          className='absolute inset-x-0 top-0 h-full w-full'
        />
      </div>

      <article className='w-full flex flex-col items-center justify-center h-48 lg:h-20 text-white full mx-auto text-center z-10 relative transition-all duration-300 shadow-inner'>
        <div className='flex flex-col lg:flex-row w-full gap-4 justify-center items-center px-8 transition-all duration-300'>
          <div className='flex items-center gap-4 lg:mr-auto lg:w-24 transition-all duration-300'>
            <Link
              href='https://instagram.com'
              target='_blank'
              className='hover:text-primary transition-colors'>
              <SiInstagram size={24} />
            </Link>
            <Link
              href='https://facebook.com'
              target='_blank'
              className='hover:text-primary transition-colors'>
              <SiFacebook size={24} />
            </Link>
            <Link
              href='https://linkedin.com'
              target='_blank'
              className='hover:text-primary transition-colors'>
              <SiLinkedin size={24} />
            </Link>
          </div>
          <nav className='flex flex-col lg:flex-row items-center gap-6 text-sm mx-auto'>
            <div className='flex gap-6 pt-2 lg:pt-0'>
              {Object.entries(SiteNavigationLinks).map(([key, value]) => (
                <Link
                  key={key}
                  href={SitePaths[key as keyof typeof SitePaths]}
                  onClick={(e) =>
                    handleScroll({ e, id: `${key.toLowerCase()}-section` })
                  }
                  className='hover:scale-105 transform transition-transform hover:font-bold'>
                  {value}
                </Link>
              ))}
            </div>
            <div className='border border-white rounded-full'>
              <Button
                variant='ghost'
                className='hover:scale-105 transform transition-transform hover:bg-transparent'>
                LOGIN
              </Button>
              <Button className='bg-foreground text-background hover:bg-foreground hover:opacity-90 '>
                SIGNUP
              </Button>
            </div>
          </nav>
          <div className='w-24 ml-auto' />
        </div>
      </article>
      <span className='flex items-center gap-2 text-white/60 text-xs text-center pb-2'>
        <span className='ml-[12px] font-bold'>
          © {new Date().getFullYear()}{" "}
        </span>
        <div className='relative w-4 h-4'>
          <Image
            src='/images/logo-white.svg'
            alt='NeoWave Logo'
            fill
            priority
            className='opacity-60'
          />
        </div>
        <span className='flex items-center gap-2 font-bold'>NeoWave</span>
      </span>
    </div>
  );
};

export default Footer;
