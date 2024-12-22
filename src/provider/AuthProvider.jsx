import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    /* ---------------------------- login with google --------------------------- */
    const loginWithGoogle = () => {
        setLoading(true)
       return signInWithPopup(auth, provider)
    }
    /* ------------------------------ sign Out user ----------------------------- */
    const signOutUser = () => {
        setLoading(true)
        signOut(auth).then((res) => {
            console.log(res)
          }).catch((error) => {
            console.log(error)
          });
    }
    /* --------------------- sign in with email and password -------------------- */
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    /* ----------------------------- create new user ---------------------------- */
    const newUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
   
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log("current user =>", currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[])
    // console.log(user)
    const info= {
        // theme: "dark",
        user,
        loginWithGoogle,
        signOutUser,
        newUser,
        loginUser,
        setUser,
        loading,
        setLoading
        // updateUser,
    }
    console.log(loading)
    return (
        <div>
           <AuthContext.Provider value={info}>
            {children}
            </AuthContext.Provider>  
        </div>
    );
};

export default AuthProvider;