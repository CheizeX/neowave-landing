import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const newPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type NewPasswordFormData = z.infer<typeof newPasswordSchema>;

interface NewPasswordProps {
  token: string;
}

export function NewPassword({ token }: NewPasswordProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { setNewPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPasswordFormData>({
    resolver: zodResolver(newPasswordSchema),
  });

  const onSubmit = async (data: NewPasswordFormData) => {
    try {
      setIsLoading(true);
      setError(null);
      await setNewPassword(token, data.password);
      router.push("/login?passwordReset=success");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to set new password"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full bg-zinc-900 p-8 rounded-[32px] shadow-lg'>
      <h2 className='text-2xl font-bold mb-6'>Set New Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <Input
            {...register("password")}
            type='password'
            placeholder='New password'
            autoComplete='new-password'
          />
          {errors.password && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}
        </div>
        <div>
          <Input
            {...register("confirmPassword")}
            type='password'
            placeholder='Confirm password'
            autoComplete='new-password'
          />
          {errors.confirmPassword && (
            <p className='text-red-500'>{errors.confirmPassword.message}</p>
          )}
        </div>
        {error && <p className='text-red-500'>{error}</p>}
        <Button type='submit' className='w-full' disabled={isLoading}>
          {isLoading ? "Setting new password..." : "Set New Password"}
        </Button>
      </form>
    </div>
  );
}
