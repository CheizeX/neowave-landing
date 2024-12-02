"use client";

import { NewPassword } from "@/components/Auth/NewPassword";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function NewPasswordPage() {
  const params = useParams();
  const [resolvedParams, setResolvedParams] = useState<{
    token: string;
  } | null>(null);

  useEffect(() => {
    if (params && params.token) {
      if (typeof params.token === "string") {
        setResolvedParams({ token: params.token });
      }
    }
  }, [params]);

  if (!resolvedParams) {
    return <div>Loading...</div>;
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-background'>
      <div className='w-full max-w-md'>
        <NewPassword token={resolvedParams.token} />
      </div>
    </div>
  );
}