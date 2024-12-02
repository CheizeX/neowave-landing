import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth, AuthError } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const resetSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ResetFormData = z.infer<typeof resetSchema>;

export function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  console.log({ error });
  const router = useRouter();
  const { resetPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetFormData>({
    resolver: zodResolver(resetSchema),
  });

  const onSubmit = async (data: ResetFormData) => {
    try {
      setIsLoading(true);
      setError(null);
      await resetPassword(data.email);
      router.push("/reset-password/success");
    } catch (err) {
      setError(
        err instanceof AuthError ? err.message : "Reset password failed"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full bg-zinc-900 p-8 rounded-[32px] shadow-lg'>
      <h2 className='text-2xl font-bold mb-6'>Reset Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <Input
          {...register("email")}
          placeholder='Enter your email'
          type='email'
          autoComplete='email'
        />
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        <div className='flex justify-between mt-4'>
          <Button
            type='button'
            variant='ghost'
            onClick={() => router.push("/")}>
            Back to Login
          </Button>
          <Button type='submit' disabled={isLoading}>
            {isLoading ? "Sending..." : "Reset Password"}
          </Button>
        </div>
      </form>
    </div>
  );
}
