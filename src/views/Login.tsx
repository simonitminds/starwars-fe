import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { graphql } from "@/gql"
import { userVar } from "@/state/userState"
import { useMutation } from "@apollo/client"
import { useState } from "react"

const testQuery = graphql(`
  mutation Login($username: String!) {
    login(username: $username) {
      token
      user {
        id
        name
      }
    }
  }
`)
export const LoginView = () => {
  const [username, setUsername] = useState("")
  const [login] = useMutation(testQuery)

  const submitClick = () => {
    login({ onCompleted: console.log, variables: { username } }).then((x) => {
      if (x.data?.login) {
        const userData = {
          id: x.data.login?.user?.id || -1,
          token: x.data.login.token || "",
          username: x.data?.login?.user?.name || "",
        }
        localStorage.setItem("userData", JSON.stringify(userData))
        if (x.data.login?.token) {
          localStorage.setItem("token", x.data.login.token)
        }
        console.log(userData)
        userVar(userData)
      }
    })
  }
  return (
    <div className='min-w-screen grid min-h-screen place-items-center'>
      <Card>
        <CardHeader>
          <CardTitle className='text-center'>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            onChange={(x) => setUsername(x.target.value)}
            id='username'
            placeholder='Enter username'
          />
        </CardContent>
        <CardFooter>
          <Button size={"lg"} variant={"default"} onClick={submitClick}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
