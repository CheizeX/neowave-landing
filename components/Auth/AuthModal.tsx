import Auth from "./Auth";
import useAuthModal from "@/store/useAuthModal";
import { ResetPassword } from "@/components/Auth/ResetPassword";

export default function AuthModal() {
  const { type } = useAuthModal();

  return <>{type === "resetPassword" ? <ResetPassword /> : <Auth />}</>;
}
