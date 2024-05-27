import { Navigate } from "react-router-dom";
import Auth from "../Contexts/Auth"

// eslint-disable-next-line react/prop-types
export default function PrivetRoute({ children }) {
    const { user, loading } = Auth();

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (user) {
        return children
    }

    return (
        <Navigate to={'/signIn'}></Navigate>
    )
}
