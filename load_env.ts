import dotenv from "dotenv"

// We have to load env vars manually, since this is run outside Vite (so no import.meta 😢)
export const loadEnv = () => {
  dotenv.config({
    path: __dirname + "/.env",
  })
}
