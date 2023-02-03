import React, { createContext, useEffect, useState } from 'react';
import app from './../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signOut, updateProfile} from 'firebase/auth';


const auth = getAuth(app)
export const userAuth = createContext();
const AuthContext = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState({});

    // Email And Password SignUp System...
    const emailSignup = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photo) => {
        
        return updateProfile(auth.currentUser, {
            displayName: name
        })
        
    }

    // Email And Password Login system...
    const emailSignIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    


    
    // 
    const signOutSystem = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        })
        return () => {
            unsubscribe();
        }
    }, [user])
    const authInfo = { user, loader,setLoader, emailSignup,  signOutSystem, updateUser, emailSignIn }
    return (
        <userAuth.Provider value={authInfo}>
            {children}
        </userAuth.Provider>
    );
};

export default AuthContext;