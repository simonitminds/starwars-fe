import { Navigate } from "react-router-dom"
import { useReactiveVar } from "@apollo/client"
import { userVar } from "@/state/userState"

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = useReactiveVar(userVar)

  if (!user) {
    return <Navigate to='/login' />
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to='/saleItems' />
  }

  return children
}

export default ProtectedRoute
