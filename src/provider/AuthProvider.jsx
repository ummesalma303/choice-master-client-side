import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';
import axios from 'axios';
import Swal from 'sweetalert2';

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
        signOut(auth)
        .then((res) => {
            // Swal.fire({
            //     title: "Success",
            //     text: "Sign out Successful",
            //     icon: "success"
            //   });
             
          }).catch((error) => {
            Swal.fire({
                   icon: "error",
                   title: `${error.message}`,
                   text: "Something went wrong!",
                 });
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
            // setUser(currentUser)
            // console.log(currentUser?.email)
            // console.log("current user =>", currentUser)
            if (currentUser?.email) {
                const user ={email:currentUser?.email}

            axios.post('https://b10a11-server-side-ummesalma303.vercel.app/jwt',user,  { withCredentials: true })
            .then(res=>{
                // console.log(res.data)
                // setUser(cuu)
            setUser(currentUser)
                setLoading(false)
            })
            .catch(err=>console.log(err))
            }else{
                axios.post('https://b10a11-server-side-ummesalma303.vercel.app/logOut',{},  { withCredentials: true })
                .then(res=>{
                    setUser(currentUser)
                    setLoading(false)
                    // console.log('log out',res.data)
                })
                .catch(err=>console.log(err))
            }

            // setLoading(false)
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
    // console.log(loading)
    return (
        <div>
           <AuthContext.Provider value={info}>
            {children}
            </AuthContext.Provider>  
        </div>
    );
};

export default AuthProvider;