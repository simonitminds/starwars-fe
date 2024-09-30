import { createBrowserRouter } from "react-router-dom"
import { LoginView } from "./views/Login"
import { SpecificItemView } from "./views/SpecificItem"
import { AddItemView } from "./views/AddItem"
import { MyItemsView } from "./views/MyItems"
import { ItemsForSaleView } from "./views/ItemsForSale"

import { CartView } from "./views/Cart"
import App from "./app"
import { WalletView } from "./views/Wallet"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
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
      {
        path: "/saleItems",
        element: <ItemsForSaleView />,
      },
      {
        path: "/cart",
        element: <CartView />,
      },
      {
        path: "/wallet",
        element: <WalletView />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginView />,
  },
])
