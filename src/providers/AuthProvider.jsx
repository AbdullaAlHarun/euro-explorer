import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContex = createContext(null);

//Social Auth Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

// SignOut 
  const logout = () => {
    setLoading(true);
    setUser(null)
    signOut(auth)
}

  //Google Sign In 
  const googleLogin = () => {
    return signInWithPopup(auth,googleProvider)
  }
  //Github Sign In 
  const githubLogin = () => {
    return signInWithPopup(auth,githubProvider)
  }

  //obserber 
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("observing user", currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    creatUser,
    signInUser,
    logout,
    googleLogin,
    githubLogin,

  };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
