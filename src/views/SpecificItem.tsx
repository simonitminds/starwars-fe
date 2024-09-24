import { FormType, SpecificItemForm } from "@/components/SpecificItemForm"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

import { graphql } from "@/gql"
import { ItemsByUserDocument, UpdateItemMutation, UpdateItemMutationVariables } from "@/gql/graphql"
import { userVar } from "@/state/userState"
import { useMutation, useQuery, useReactiveVar } from "@apollo/client"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const itemQuery = graphql(`
  query item($id: Int!) {
    item(id: $id) {
      id
      name
      type
      price
      description
    }
  }
`)

const updateItemQuery = graphql(`
  mutation updateItem($item: ItemInput!) {
    updateItem(item: $item) {
      id
      name
      type
      price
      description
    }
  }
`)

export const SpecificItemView = () => {
  const user = useReactiveVar(userVar)
  const [update, { data: smaata }] = useMutation<UpdateItemMutation, UpdateItemMutationVariables>(
    updateItemQuery,
    {
      refetchQueries: [{ query: ItemsByUserDocument, variables: { userId: user.id } }],
    },
  )
  const { id } = useParams<{ id: string }>()
  const itemId = parseInt(id ?? "0")
  const { data } = useQuery(itemQuery, { variables: { id: itemId } })
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

  const updateFunc = (vars: FormType) => {
    if (!data?.item?.id) return
    update({ variables: { item: { ...vars, id: Number(data.item.id), userId: Number(user.id) } } })
    navigate("/myItems")
  }

  return (
    <div className='min-w-screen grid min-h-screen place-items-center'>
      <Card>
        <CardHeader>
          <CardTitle className='text-center'>Update item details</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-3'>
          <SpecificItemForm updateFunc={updateFunc} item={data?.item}></SpecificItemForm>
        </CardContent>
      </Card>
    </div>
  )
}
