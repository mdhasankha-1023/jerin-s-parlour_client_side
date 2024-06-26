  import { createContext, useEffect, useState } from "react";
  import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
  import app from "../Firebase/firebase.config";
import Swal from "sweetalert2";

  export const AuthContext = createContext(null);


  const auth  = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // eslint-disable-next-line react/prop-types
  export default function AuthProvider({children}) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] =  useState({})

  //success msg 
  const successMsg = (text) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${text}`,
      showConfirmButton: false,
      timer: 1500
    });
  }

  //error msg 
  const errorMsg = (text) => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: `${text}`,
      showConfirmButton: false,
      timer: 1500
    });
  }

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

  // create user with email and password
  const createUser = (email, password)=> {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // create user with email and password
  const signIn = (email, password)=> {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
    
  // hold user data
  useEffect( ()=> {
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
      setLoading(false)
      setUser(currentUser)
    })
    return () => {
      return unSubscribe
    }
  } , [])

  // sing out
  const logOut = () => {
    return signOut(auth)
  }

  //   data
  const data = {
      user,
      google, github, createUser, logOut, signIn,
      loading,
      successMsg, errorMsg,
  }
      return (
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    )
  }
