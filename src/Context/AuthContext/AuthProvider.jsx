import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {

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
    // logout
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // observer
    useEffect( ()=>{
        const unSubscriber = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('current user ', currentUser);
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
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;