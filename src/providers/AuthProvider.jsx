import React, { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const googleAuthProvider = new GoogleAuthProvider();
const gitHubAuthProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [toyInfo, settoyInfo] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    };
    const signInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubAuthProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        fetch("http://localhost:5000/toys")
            .then((res) => res.json())
            .then((data) => {
                settoyInfo(data);
                setLoading(true);
            })
            .catch((err) => console.log(err));
    }, []);
    // console.log(user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            // console.log("Logged in user inside auth state Observer", loggedUser);
            setUser(loggedUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        toyInfo,
        loading,
        createUser,
        setUser,
        signIn,
        signInWithGoogle,
        signInWithGitHub,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
}

export default AuthProvider;