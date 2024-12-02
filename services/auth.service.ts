import { useMutation } from "@apollo/client";
import {
  LOGIN_MUTATION,
  REGISTER_MUTATION,
  RESET_PASSWORD_MUTATION,
  SET_NEW_PASSWORD_MUTATION,
  VERIFY_EMAIL_MUTATION,
} from "@/graphql/auth.graphql";

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}

export const useAuth = () => {
  const [loginMutation] = useMutation(LOGIN_MUTATION);
  const [registerMutation] = useMutation(REGISTER_MUTATION);
  const [resetPasswordMutation] = useMutation(RESET_PASSWORD_MUTATION);
  const [setNewPasswordMutation] = useMutation(SET_NEW_PASSWORD_MUTATION);
  const [verifyEmailMutation] = useMutation(VERIFY_EMAIL_MUTATION);

  return {
    login: async (email: string, password: string) => {
      try {
        const { data } = await loginMutation({
          variables: { email, password },
        });
        return data.login;
      } catch (error: any) {
        console.log({ error });
        if (error.networkError) {
          throw new AuthError("Network error: Failed to fetch");
        }
        throw new AuthError(error.message || "Invalid credentials");
      }
    },

    register: async (name: string, email: string, password: string) => {
      try {
        const { data } = await registerMutation({
          variables: { name, email, password },
        });
        return data.register;
      } catch (error: any) {
        if (error.message.includes("already exists")) {
          throw new AuthError("Email already registered");
        }
        throw new AuthError("Registration failed");
      }
    },

    resetPassword: async (email: string) => {
      try {
        const { data } = await resetPasswordMutation({
          variables: { email },
        });
        return data.resetPassword;
      } catch (error) {
        throw new AuthError("Password reset request failed");
      }
    },

    setNewPassword: async (token: string, password: string) => {
      try {
        const { data } = await setNewPasswordMutation({
          variables: { token, password },
        });
        return data.setNewPassword;
      } catch (error) {
        throw new AuthError("Failed to set new password");
      }
    },

    verifyEmail: async (token: string) => {
      try {
        const { data } = await verifyEmailMutation({
          variables: { token },
        });
        return data.verifyEmail;
      } catch (error) {
        throw new AuthError("Email verification failed");
      }
    },
  };
};
