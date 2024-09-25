import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { gql, useQuery, useReactiveVar } from "@apollo/client"
import { userVar } from "@/state/userState"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Item } from "@/gql/graphql"

const itemsForSaleQuery = gql(`
    query itemsForSale {
        itemsForSale {
        id
        name
        type
        price
        description
        }
    }
    `)

export const ItemsForSaleView = () => {
  const navigate = useNavigate()
  const user = useReactiveVar(userVar)
  const { data } = useQuery(itemsForSaleQuery)

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData")
    if (storedUserData) {
      const userData = JSON.parse(storedUserData)
      userVar(userData)
    } else {
      navigate("/login")
    }
  }, [navigate])

  const products = data?.itemsForSale || []
  return (
    <div className='min-h-screen p-8 text-[#8B4513]'>
      <div className='flex justify-center'>
        <header className='mb-10 bg-primary/80 px-5 py-2 text-center font-mono'>
          <h1 className='mb-2 text-5xl font-bold underline'>Watto's Junkshop</h1>
          <p className='text-xl italic'>The finest junk in Mos Espa!</p>
        </header>
      </div>
      <div className='flex max-h-[75vh] w-full flex-wrap gap-4 overflow-y-auto'>
        {products.map((product: Item) => (
          <Card
            key={product.id}
            className='w-[calc(20%_-_1rem)] border-2 border-[#8B4513] bg-primary/80 shadow-lg'
          >
            <CardHeader>
              <img
                alt={product.name}
                width={200}
                height={200}
                className='h-48 w-full rounded-md object-cover'
              />
            </CardHeader>
            <CardContent>
              <CardTitle className='mb-2 text-2xl text-[#8B4513]'>{product.name}</CardTitle>
              <Badge variant='secondary' className='mb-2 bg-[#C19A6B] text-[#4A3933]'>
                {product.type}
              </Badge>
              <CardDescription className='mb-4 text-[#6B4423]'>
                {product.description}
              </CardDescription>
            </CardContent>
            <CardFooter className='flex items-center justify-between'>
              <span className='text-2xl font-bold text-[#8B4513]'>{product.price} credits</span>
              <Badge
                variant='outline'
                className='cursor-pointer border-[#8B4513] text-[#8B4513] transition-colors hover:bg-[#8B4513] hover:text-[#E6D2B5]'
              >
                Add to cart
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
