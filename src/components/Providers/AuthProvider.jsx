import React, { createContext, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

// 1
const auth = getAuth(app);

// 4
export const AuthContext = createContext(null);

// 2
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
  };
    return (
    //   3
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
