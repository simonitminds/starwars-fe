import { makeVar } from "@apollo/client"

export const userVar = makeVar({ username: "", id: "", token: "" })
