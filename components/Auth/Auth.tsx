"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import usePrevious from "@/hooks/usePrevious";
import { useAuth } from "@/services/auth.service";
import useAuthModal from "@/store/useAuthModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { SquareArrowOutUpRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define schemas using zod
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Types
type AuthMode = "login" | "signup";
type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;
type FormData = LoginFormData | SignupFormData;

// Animation variants
const sphereAnimationVariants = {
  initial: { scale: 0.8 },
  animate: {
    scale: [0.8, 1.02, 1],
    transition: {
      duration: 0.5,
      times: [0, 0.6, 1],
    },
  },
  exit: {
    scale: 0.2,
    transition: { duration: 1 },
  },
};

const Logo = () => (
  <div className='relative w-14 h-14 sm:w-20 sm:h-20'>
    <Image src='/images/logo.svg' alt='NeoWave Logo' fill priority />
  </div>
);

const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className='absolute top-6 right-6 z-10 hover: transition-colors'>
    <X className='h-8 w-8' />
  </button>
);

export default function AuthModal() {
  const { login, register: registerUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { isOpen, type, closeModal } = useAuthModal();
  const authMode = type as AuthMode;
  const isLogin = authMode === "login";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(isLogin ? loginSchema : signupSchema),
    mode: "onChange",
  });

  const prevAuthMode = usePrevious(authMode);
  const direction = React.useMemo(
    () =>
      prevAuthMode === undefined
        ? 0
        : authMode === prevAuthMode
        ? 0
        : prevAuthMode === "login"
        ? -1
        : 1,
    [authMode, prevAuthMode]
  );

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      setError(null);

      if (isLogin) {
        const { token } = await login(
          (data as LoginFormData).email,
          (data as LoginFormData).password
        );
        localStorage.setItem("token", token);
        closeModal();
        router.push("/dashboard");
      } else {
        const signupData = data as SignupFormData;
        await registerUser(
          signupData.name,
          signupData.email,
          signupData.password
        );
        closeModal();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAuthMode = React.useCallback(() => {
    const { openLoginModal, openSignupModal } = useAuthModal.getState();
    if (isLogin) {
      openSignupModal();
    } else {
      openLoginModal();
    }
    reset();
  }, [isLogin, reset]);

  const handleForgotPassword = () => {
    closeModal();
    router.push("/reset-password");
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent
        className='max-w-screen w-screen h-screen bg-transparent flex justify-center backdrop-blur-sm z-[60] p-0 sm:p-6'
        showCloseButton={false}
        aria-describedby='auth-modal-description'>
        <DialogTitle>
          <span id='auth-modal-description' className='sr-only'>
            {isLogin ? "Login Modal" : "Sign Up Modal"}
          </span>
        </DialogTitle>
        <DialogDescription />
        <div className='w-full m-auto max-w-7xl max-h-[850px] h-screen overflow-hidden sm:rounded-[32px] flex'>
          <AnimatePresence initial={false} custom={direction}>
            {/* Sphere Panel */}
            <motion.div
              key='sphere-panel'
              custom={direction}
              initial={{
                x: direction > 0 ? "-100%" : direction < 0 ? "100%" : 0,
              }}
              animate={{ x: 0, zIndex: isLogin ? 1 : 0 }}
              exit={{ x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0 }}
              transition={{ duration: "in" }}
              className={`w-1/2 bg-background relative lg:block hidden ${
                isLogin ? "order-2" : "order-1"
              }`}>
              {/* Close button */}
              {isLogin && (
                <CloseButton onClick={closeModal} key='close-button-login' />
              )}

              {/* Sphere */}
              <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6'>
                {/* Logo */}
                {!isLogin && (
                  <div className='absolute top-6 left-8 z-10'>
                    <Logo key='logo-signup' />
                  </div>
                )}
                {/* Title above the sphere */}
                <h2 className='text-4xl text-primary font-bold mb-6'>
                  {isLogin
                    ? `How are you?
                  `
                    : "Join us"}
                </h2>

                <motion.div
                  key={`sphere-${isLogin ? "login" : "signup"}`}
                  variants={sphereAnimationVariants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  className='relative w-[240px] h-[240px] flex items-center justify-center p-4'>
                  {/* Core sphere */}
                  <div className='relative w-[200px] h-[200px] bg-gradient-to-b from-primary to-primary/80 rounded-full' />

                  {/* Bottom blur */}
                  <div className='absolute inset-0 top-1/2 bg-transparent backdrop-blur-[10px] backdrop-saturate-120' />
                </motion.div>

                {/* Subtitle below the sphere */}
                <p className='text-2xl text-zinc-400 mt-6 mb-8'>
                  {isLogin
                    ? "Don't you have an account yet?"
                    : "Already have an account?"}
                </p>

                {/* Call-to-action button */}
                <Button
                  variant='ghost'
                  className='px-2 transition text-xl text-primary hover:bg-transparent'
                  onClick={toggleAuthMode}>
                  {isLogin ? "Sign Up" : "Login"}
                  <SquareArrowOutUpRight size={16} className='pt-1 h-full' />
                </Button>
              </div>
            </motion.div>

            {/* Form Panel */}
            <motion.div
              key='form-panel'
              custom={direction}
              initial={{
                x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0,
              }}
              animate={{ x: 0, zIndex: isLogin ? 0 : 1 }}
              exit={{ x: direction > 0 ? "-100%" : direction < 0 ? "100%" : 0 }}
              transition={{ duration: 0.2 }}
              className={`w-full lg:w-1/2 bg-zinc-900 relative overflow-hidden ${
                isLogin ? "order-1" : "order-2"
              }`}>
              {/* Logo */}
              {isLogin && (
                <div className='absolute lg:top-6 lg:left-8 z-10 left-[calc(50%-25px)] top-12 lg:block'>
                  <Logo key='logo-login' />
                </div>
              )}
              {!isLogin ? (
                <>
                  <CloseButton onClick={closeModal} key='close-button-signup' />
                  <div className='absolute left-[calc(50%-25px)] top-12 z-10 lg:hidden'>
                    <Logo key='logo-login' />
                  </div>
                </>
              ) : (
                <div className='lg:hidden'>
                  <CloseButton onClick={closeModal} key='close-button-mobile' />
                </div>
              )}

              {/* Form */}
              <AnimatePresence mode='wait'>
                <motion.div
                  key={isLogin ? "login-form" : "signup-form"}
                  initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                  className='h-full flex items-center justify-center m-auto'>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-full sm:max-w-md mx-auto px-12 space-y-6 sm:space-y-10'>
                    {error && (
                      <div className='text-red-500 text-sm text-center'>
                        {error}
                      </div>
                    )}
                    <div className='sm:space-y-2'>
                      <h1 className='sm:block sm:text-4xl font-semibold '>
                        {isLogin ? "Welcome back" : "Nice to meet you"}
                      </h1>
                      <p className='text-sm sm:text-base text-zinc-400'>
                        {isLogin
                          ? "Please enter your details to log in."
                          : "Enter your personal details and start your journey with us!"}
                      </p>
                    </div>

                    <div className='space-y-6'>
                      {!isLogin && (
                        <div className='space-y-2'>
                          <Label htmlFor='name'>Name</Label>
                          <Input
                            id='name'
                            placeholder='Enter your name'
                            type='text'
                            {...register("name")}
                            className='h-12 bg-zinc-800 border-zinc-700  placeholder:sm:text-md placeholder:text-sm text-sm text-zinc-400 rounded-full'
                          />
                          {"name" in errors && (
                            <p className='text-red-500 text-sm'>
                              {errors.name?.message?.toString()}
                            </p>
                          )}
                        </div>
                      )}
                      <div className='space-y-2'>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                          id='email'
                          placeholder='Enter your email'
                          type='email'
                          {...register("email")}
                          className='h-12 bg-zinc-800 border-zinc-700  placeholder:sm:text-md placeholder:text-sm text-sm text-zinc-400 rounded-full'
                        />
                        {errors.email && (
                          <p className='text-red-500 text-sm'>
                            {errors.email.message?.toString()}
                          </p>
                        )}
                      </div>

                      <div className='flex flex-col space-y-3 pt-1'>
                        <Label htmlFor='password'>Password</Label>
                        <Input
                          id='password'
                          placeholder='Enter your password'
                          type='password'
                          {...register("password")}
                          className='h-12 bg-zinc-800 border-zinc-700  placeholder:sm:text-md placeholder:text-sm text-sm text-zinc-400 rounded-full'
                        />
                        {errors.password && (
                          <p className='text-red-500 text-sm'>
                            {errors.password.message?.toString()}
                          </p>
                        )}
                        {isLogin && (
                          <div className='flex justify-end'>
                            <Link
                              href='/reset-password'
                              onClick={handleForgotPassword}
                              className='px-0 text-primary'>
                              Forgot password?
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>

                    <Button
                      type='submit'
                      className='w-full h-12 bg-primary hover:bg-primary/90'
                      disabled={isLoading}>
                      {isLoading ? "Loading..." : isLogin ? "LOGIN" : "SIGN UP"}
                    </Button>
                  </form>

                  {/* Call-to-action button */}
                  <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 lg:hidden'>
                    <Button
                      variant='ghost'
                      className='px-2 transition text-xl text-primary hover:bg-transparent'
                      onClick={toggleAuthMode}>
                      {isLogin ? "Sign Up" : "Login"}
                      <SquareArrowOutUpRight
                        size={16}
                        className='pt-1 h-full'
                      />
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
