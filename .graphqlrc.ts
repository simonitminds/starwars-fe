import type { IGraphQLConfig } from "graphql-config"
import { loadEnv } from "./load_env"

loadEnv()

// Substitute for your own env var name
const schema = `${process.env.VITE_API_URL}/graphql`

const config: IGraphQLConfig = {
  schema,
  documents: ["src/**/*.tsx"],
}

export default config
