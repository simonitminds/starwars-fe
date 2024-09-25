import { createBrowserRouter } from "react-router-dom"
import { LoginView } from "./views/Login"
import { SpecificItemView } from "./views/SpecificItem"
import { AddItemView } from "./views/AddItem"
import { MyItemsView } from "./views/MyItems"
import { ItemsForSaleView } from "./views/ItemsForSale"
import ProtectedRoute from "./components/protectedRoute"

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/myItems",
    element: (
      <ProtectedRoute allowedRoles={"ADMIN"}>
        <MyItemsView />
      </ProtectedRoute>
    ),
  },
  {
    path: "/item/:id",
    element: (
      <ProtectedRoute allowedRoles={"ADMIN"}>
        <SpecificItemView />
      </ProtectedRoute>
    ),
  },
  {
    path: "/addItem",
    element: (
      <ProtectedRoute allowedRoles={"ADMIN"}>
        <AddItemView />
      </ProtectedRoute>
    ),
  },
  {
    path: "/saleItems",
    element: <ItemsForSaleView />,
  },
])
