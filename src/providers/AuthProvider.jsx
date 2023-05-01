import React, { createContext } from 'react';
import app from '../firebase/firebase.config';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const user = null;

    //for the register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //for the login form

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {

        user, createUser, signIn
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;