import type { CodegenConfig } from "@graphql-codegen/cli"
import { loadEnv } from "./load_env"

loadEnv()

const url = `${process.env.VITE_API_URL}/graphql`

const config: CodegenConfig = {
  schema: url,
  watch: true,
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
}
export default config
