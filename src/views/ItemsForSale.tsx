import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const ItemsForSaleView = () => {
  const products = [
    {
      name: "Podracer Engine",
      type: "Vehicle Parts",
      price: 1500,
      description: "Slightly used Radon-Ulzer 620C podracer engine. Perfect for high-speed racing!",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Droid Motivator",
      type: "Droid Components",
      price: 350,
      description: "Essential component for astromech droids. Keep your R2 unit running smoothly!",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Hyperdrive Generator",
      type: "Starship Parts",
      price: 2000,
      description: "T-14 hyperdrive generator. Slightly singed, but still functional!",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Thermal Detonator",
      type: "Weapons",
      price: 750,
      description: "Highly explosive and compact. Use with extreme caution!",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Power Converter",
      type: "Electronics",
      price: 50,
      description: "Standard power converter. You can pick this up at Tosche Station.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Moisture Vaporator",
      type: "Farming Equipment",
      price: 500,
      description: "Slightly rusted, but still effective at harvesting moisture from the air.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className='min-h-screen p-8 text-[#8B4513]'>
      <div className='flex justify-center'>
        <header className='mb-10 bg-primary/80 px-5 py-2 text-center font-mono'>
          <h1 className='mb-2 text-5xl font-bold underline'>Watto's Junkshop</h1>
          <p className='text-xl italic'>The finest junk in Mos Espa!</p>
        </header>
      </div>
      <div className='flex grid-cols-4 flex-wrap gap-4'>
        {products.map((product, index) => (
          <Card
            key={index}
            className='overflow-hidden border-2 border-[#8B4513] bg-primary/80 shadow-lg'
          >
            <CardHeader>
              <img
                src={product.image}
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
                Haggle
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
