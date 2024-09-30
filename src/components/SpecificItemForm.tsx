import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Item } from "@/gql/graphql"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string({ required_error: "ID is required" }),
  type: z.string(),
  price: z.coerce.number(),
  description: z.string(),
  forSale: z.boolean(),
})

export type FormType = z.infer<typeof formSchema>

export function SpecificItemForm(props: {
  item?: Item | null
  updateFunc: (vars: FormType) => void
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    //@ts-expect-error donger
    values: props.item || {
      id: 1,
      name: "Shadcn",
      type: "Type",
      price: 100,
      description: "Description",
      forSale: true,
    },
  })
  const { toast } = useToast()

  function onSubmit(values: z.infer<typeof formSchema>) {
    props.updateFunc(values)

    toast({
      title: "Item updated",
      description: `${values.name} has been updated`,
    })
  }

  return (
    <Form {...form}>
      <form onError={console.log} onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='type'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='price'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type='number' placeholder='00' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='forSale'
          render={({ field }) => (
            <FormItem>
              <FormLabel>For Sale</FormLabel>
              <FormControl>
                <Input
                  type='checkbox'
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>Update</Button>
      </form>
    </Form>
  )
}
