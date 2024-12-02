"use client";

import { NewPassword } from "@/components/Auth/NewPassword";

export default function NewPasswordPage({
  params,
}: {
  params: { token: string };
}) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background'>
      <div className='w-full max-w-md'>
        <NewPassword token={params.token} />
      </div>
    </div>
  );
}
