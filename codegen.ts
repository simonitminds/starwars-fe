import type { CodegenConfig } from "@graphql-codegen/cli"
import { loadEnv } from "./load_env"

loadEnv()

const url = `${process.env.VITE_API_URL}/graphql`

const config: CodegenConfig = {
  generates: {
    "./generated/graphql/": {
      preset: "client",
      config: {
        useTypeImports: true,
      },
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
        fragmentMasking: false,
      },
      schema: [url],
      documents: ["src/**/*.queries.ts"],
    },
  },
}

export default config
