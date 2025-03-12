import React, { createContext } from 'react';

export type SignUpInfoProps = {
  phoneNumber: string;
  name: string;
  role: string;
};

export type SignUpContextProps = {
  signUpInfo: SignUpInfoProps;
  setSignUpInfo: React.Dispatch<React.SetStateAction<SignUpInfoProps>>;
};

export const SignUpContext = createContext<SignUpContextProps | null>(null);
