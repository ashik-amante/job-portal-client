import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { tr } from 'motion/react-client';

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login
    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // sign in with google
    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth ,googleProvider)
    }
    // logout
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // observer
    useEffect( ()=>{
        const unSubscriber = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            // console.log('current user ', currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscriber()
        }
    },[])

    const authInfo = {
        createUser,
        user,
        loading,
        logIn,
        logOut,
        signInWithGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;