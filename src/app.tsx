import { RouterProvider } from "react-router-dom"
import { routes } from "./router"
import NavBar from "./components/NavBar"
import { useEffect } from "react"
import { userVar } from "./state/userState"
import { useReactiveVar } from "@apollo/client"
import { LoginView } from "./views/Login"

function App() {
  const user = useReactiveVar(userVar)

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData")
    if (storedUserData) {
      const userData = JSON.parse(storedUserData)
      userVar(userData)
    }
  }, [])

  return (
    <div className='bg-stone-900'>
      <NavBar />
      <div className='mx-6 flex max-h-screen flex-grow flex-col gap-3 bg-junkshop'>
        {user.token ? <RouterProvider router={routes} /> : <LoginView />}
      </div>
    </div>
  )
}

export default App
