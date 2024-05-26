  import { createContext, useState } from "react";
  import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
  import app from "../Firebase/firebase.config";
import Swal from "sweetalert2";

  export const AuthContext = createContext(null);


  const auth  = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // eslint-disable-next-line react/prop-types
  export default function AuthProvider({children}) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] =  useState('hasan')

  //success msg 
  const successMsg = (text) => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: {text},
      showConfirmButton: false,
      timer: 1500
    });
  }

  //error msg 
  const errorMsg = (text) => {
    Swal.fire({
      position: "top-center",
      icon: "error",
      title: {text},
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
    
  //   data
  const data = {
      user,
      google, github,
      loading,
      successMsg, errorMsg,
  }
      return (
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    )
  }
