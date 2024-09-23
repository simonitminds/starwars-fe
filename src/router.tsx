import { createBrowserRouter } from "react-router-dom"
import { LoginView } from "./views/Login"
import { HomeView } from "./views/Home"
import { SpecificItemView } from "./views/SpecificItem"
import { AddItemView } from "./views/AddItem"

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/home",
    element: <HomeView />,
  },
  {
    path: "/item/:id",
    element: <SpecificItemView />,
  },
  {
    path: "/addItem",
    element: <AddItemView />,
  },
])
