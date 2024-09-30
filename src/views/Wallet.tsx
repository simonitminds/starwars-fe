import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { gql, useQuery } from "@apollo/client"

const walletQuery = gql(`
    query userWallet {
        userWallet
    }
  `)

export const WalletView = () => {
  const { data } = useQuery(walletQuery)

  return (
    <div className='min-w-screen grid min-h-screen place-items-center'>
      <Card>
        <CardHeader>
          <CardTitle className='text-center'>Add credit to account</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-3'>
          <Input id='username' placeholder='Enter amount' />
        </CardContent>
        <CardFooter>
          <Button size={"lg"} variant={"default"}>
            Add
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
