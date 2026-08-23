import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContext"

function AuthenticatedRoute() {
    const {isLogin} = useAuthContext()
  return (
    isLogin ? <Outlet /> : <Navigate to='/sign-in' />
  )
}

export default AuthenticatedRoute