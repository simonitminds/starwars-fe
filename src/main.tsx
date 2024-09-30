import React from "react"
import ReactDOM from "react-dom/client"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { routes } from "./router.tsx"
import { Toaster } from "./components/ui/toaster.tsx"

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL + "/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={routes} />
    </ApolloProvider>
    <Toaster />
  </React.StrictMode>,
)
