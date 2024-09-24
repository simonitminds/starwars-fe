import { createBrowserRouter } from "react-router-dom"
import { LoginView } from "./views/Login"
import { SpecificItemView } from "./views/SpecificItem"
import { AddItemView } from "./views/AddItem"
import { MyItemsView } from "./views/MyItems"
import { ItemsForSaleView } from "./views/ItemsForSale"

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/myItems",
    element: <MyItemsView />,
  },
  {
    path: "/item/:id",
    element: <SpecificItemView />,
  },
  {
    path: "/addItem",
    element: <AddItemView />,
  },
  { path: "/saleItems", element: <ItemsForSaleView /> },
])
