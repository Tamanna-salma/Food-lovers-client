import React, {  createContext, useEffect, useState } from 'react'
import  app  from '../Firebase/Firebase.config';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

const AuthContext=createContext()
const googleProvider=new GoogleAuthProvider();
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setloading]=useState(true);

const createUser=(email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
//  ,,,,,,,,,,,,,,signIn

const signInUser=(email,password)=>{
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

const signInwithgoogle=()=>{
    setloading(true)
   return signInWithPopup(auth,googleProvider);
}

const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const passwordReset = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }


    const logOut = () => {
        return signOut(auth);
    }

useEffect(()=>{
 const unsubscribe=onAuthStateChanged(auth,(curentUser)=>{
        setUser(curentUser);
        setloading(false)

    })
    return ()=>{
        unsubscribe()
    }
},[])
  
const authInfo={
        createUser,
      signInUser,
      signInwithgoogle,
        user,
        loading,
        updateUser,
        passwordReset,
        logOut,
        setUser,
        setloading
        
    }
    
  return (
 <div>
    <AuthContext value={authInfo} >{children}

    </AuthContext>
 </div>
  )
}
export {AuthContext}
export default AuthProvider