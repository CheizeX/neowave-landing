"use client";
import { ResetPassword } from "@/components/Auth/ResetPassword";

export default function ResetPasswordPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background'>
      <div className='w-full max-w-md'>
        <ResetPassword />
      </div>
    </div>
  );
}
