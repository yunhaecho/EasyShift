"use client"

import { SignUpContext } from "@/app/context/SignUpContext";
import  {SignUpInfoProps } from '@/app/context/SignUpContext';
import { ReactNode, useState } from "react";
 

export const SignUpProvider = ({children}: {children : ReactNode}) => {
    const [signUpInfo, setSignUpInfo] = useState<SignUpInfoProps>({
        name:'',
        phoneNumber:'',
        role :'',
    })
    
    return <SignUpContext.Provider value={{signUpInfo, setSignUpInfo}}>{children}</SignUpContext.Provider>
}

