import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firbase/firebase.config";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect (()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return()=>{
            unSubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;