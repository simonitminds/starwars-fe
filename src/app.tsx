import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "./components/NavBar"
import { useEffect } from "react"
import { userVar } from "./state/userState"

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData")
    if (storedUserData) {
      const userData = JSON.parse(storedUserData)
      userVar(userData)

      if (userData.token) {
        if (location.pathname === "/login" || location.pathname === "/") {
          navigate("/")
        }
      } else {
        navigate("/login")
      }
    } else {
      navigate("/login")
    }
  }, [location, navigate])

  return (
    <div className='flex min-h-screen flex-col bg-stone-900'>
      <NavBar />
      <div className='mx-6 flex h-full flex-grow flex-col gap-3 bg-junkshop'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
