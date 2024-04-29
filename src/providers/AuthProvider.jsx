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

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

// SignOut 
  const logout = () => {
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
      console.log("observing user", currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
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
