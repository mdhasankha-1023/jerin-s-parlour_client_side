import { useContext } from "react"
import { AuthContext } from "./AuthProvider"

export default function Auth() {
    const userInfo = useContext(AuthContext)
  return userInfo
}
