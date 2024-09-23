import { makeVar } from "@apollo/client"

export const userVar = makeVar({ username: "", id: 0, token: "" })
