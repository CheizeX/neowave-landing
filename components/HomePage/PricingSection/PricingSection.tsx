"use client";

import { PRICING_PLANS } from "@/components/HomePage/PricingSection/PricingSection.shared";
import { BorderBeam } from "@/components/shared/BorderBeam";
import { CounterNumber } from "@/components/shared/CounterNumber";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";

function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const ANNUAL_DISCOUNT = 0.1;

  const calculatePrice = (basePrice: number) => {
    const price = isAnnual
      ? (basePrice * 12 * (1 - ANNUAL_DISCOUNT)) / 12
      : basePrice;
    return Number(price.toFixed(2));
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const maxPrice = Math.max(...PRICING_PLANS.map((plan) => plan.price));

  return (
    <div
      aria-label='Vision and Values'
      className='flex flex-col items-center justify-center w-full relative m-auto'>
      <div className='w-full aspect-square md:bg-[url("/images/backgrounds/bg-pricing-section.png")] bg-center bg-cover bg-no-repeat'>
        <div className='max-w-7xl mx-auto space-y-8 z-10 px-4 md:pt-[25vw]'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center space-y-4 mt-20'>
            <h1 className='text-2xl sm:text-4xl md:text-6xl text-center font-bold mb-4 font-[family-name:var(--font-transducer-regular)]'>
              Limited spots available!
            </h1>
            <p className='text-xl md:text-3xl text-gray-400'>
              Be one of the first 100 for just 10€ /month!
            </p>
            <div className='flex items-center justify-center gap-4 pt-4'>
              <Label
                htmlFor='billing'
                className='text-foreground font-bold text-md'>
                Monthly
              </Label>
              <Switch
                id='billing'
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className='bg-red-500'
              />
              <Label
                htmlFor='billing'
                className='text-foreground font-bold text-md'>
                Annually
              </Label>
            </div>
          </motion.div>

          <motion.div
            className='grid md:grid-cols-3 gap-8'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}>
            {PRICING_PLANS.map((plan) => {
              const isMaxPrice = plan.price === maxPrice;
              return (
                <motion.div
                  key={plan.name}
                  variants={cardVariants}
                  className={cn(
                    `relative rounded-2xl backdrop-blur-sm bg-background/30 border border-white/10 overflow-hidden`,
                    isMaxPrice ? "border-primary/20 bg-primary/20" : ""
                  )}>
                  <div className='p-3 xl:p-6 space-y-6'>
                    <Badge variant='pricing'>{plan.name}</Badge>
                    <div className='space-y-2'>
                      <div className='flex items-baseline font-[family-name:var(--font-transducer-regular)] mb-4'>
                        <CounterNumber
                          targetValue={calculatePrice(plan.price)}
                          className='text-5xl md:text-3xl lg:text-5xl font-bold text-white'
                        />
                        <span className='text-4xl font-bold text-white'>€</span>
                        <span className='ml-2 text-gray-400'>/month</span>
                      </div>
                      <Button className='w-full max-w-96 bg-primary hover:opacity-95 text-white'>
                        GET THIS PLAN
                      </Button>
                    </div>
                    <div className='space-y-1'>
                      {plan.features.map((feature) => (
                        <div
                          key={feature.name}
                          className='flex items-center gap-3'>
                          {feature.included ? (
                            <Check className='h-6 min-w-6 text-primary border border-primary rounded-full p-1' />
                          ) : (
                            <X className='h-6 min-w-6 border rounded-full p-1 text-border' />
                          )}
                          <span
                            className={feature.included ? "" : "text-gray-500"}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {plan.price === maxPrice && <BorderBeam />}
                  <div
                    className='absolute inset-0 pointer-events-none'
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)",
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
