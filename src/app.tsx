import { RouterProvider } from "react-router-dom"
import { routes } from "./router"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className='bg-stone-900'>
      <NavBar />
      <div className='mx-6 flex max-h-screen flex-grow flex-col gap-3 bg-junkshop'>
        <RouterProvider router={routes} />
      </div>
    </div>
  )
}

export default App
