import { AddItemForm } from "@/components/AddItemForm"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { userVar } from "@/state/userState"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { graphql } from "@/gql"

const createItem = graphql(`
  mutation createItem(
    $name: String!
    $type: String!
    $price: Float!
    $description: String!
    $userId: Int!
  ) {
    createItem(
      name: $name
      type: $type
      price: $price
      description: $description
      userId: $userId
    ) {
      id
      name
      type
      price
      description
      user {
        id
        name
      }
    }
  }
`)

export const AddItemView = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData")
    if (storedUserData) {
      const userData = JSON.parse(storedUserData)
      userVar(userData)
    } else {
      navigate("/login")
    }
  }, [navigate])

  return (
    <div className='min-w-screen grid min-h-screen place-items-center'>
      <Card>
        <CardHeader>
          <CardTitle className='text-center'>Add a new item</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-3'>
          <AddItemForm></AddItemForm>
        </CardContent>
      </Card>
    </div>
  )
}
