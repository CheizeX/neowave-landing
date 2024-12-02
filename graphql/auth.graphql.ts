import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation SignIn($input: InputAuth!) {
    signIn(input: $input) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export const RESET_PASSWORD_MUTATION = gql`
  mutation ResetPassword($email: String!) {
    resetPassword(email: $email) {
      success
      message
    }
  }
`;

export const VERIFY_EMAIL_MUTATION = gql`
  mutation VerifyEmail($token: String!) {
    verifyEmail(token: $token) {
      success
      message
    }
  }
`;

export const SET_NEW_PASSWORD_MUTATION = gql`
  mutation SetNewPassword($token: String!, $password: String!) {
    setNewPassword(token: $token, password: $password) {
      success
      message
    }
  }
`;
