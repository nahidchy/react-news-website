import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from './../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) =>{
        setLoading(true)
             return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        setLoading(true)
         return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
         const unSubscribe = onAuthStateChanged(auth,currentUser=>{
                setUser(currentUser);
                setLoading(false)
            });
            return ()=>{
                unSubscribe();
            }
    },[])
    const logOut = ()=>{
        setLoading(true)
         return signOut(auth)
    }
    const authInfo = {user,createUser,logOut,signIn,loading}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;