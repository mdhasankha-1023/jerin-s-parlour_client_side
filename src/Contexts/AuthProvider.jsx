import { createContext, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);


const auth  = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// eslint-disable-next-line react/prop-types
export default function AuthProvider({children}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] =  useState('hasan')

// google 
const google = () => {
  setLoading(true)
 return signInWithPopup(auth, googleProvider)
}

// github
const github = () => {
  setLoading(true)
 return signInWithPopup(auth, githubProvider)
}
  
//   data
const data = {
    user,
    google, github,
    error, loading,
}
    return (
    <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
  )
}
