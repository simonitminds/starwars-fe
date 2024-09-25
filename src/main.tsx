import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app.tsx"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import "./index.css"

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
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
