/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authenticate = {
    googleLogin,
    createUser,
    logIn,
  };
  return (
    <AuthContext.Provider value={authenticate}>
      {children}
      {/* <h>f</h */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
