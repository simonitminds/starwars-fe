# Hi there! Welcome to the frontend repo for the star wars project. Ntmu 👋

## Stack

The project must adhere to the following:

- Build in React using Vite
- Communicate with Api using [Apollo graphQL client](https://www.apollographql.com/docs/react/)
- Styling done with tailwind and fallback to inline styling where necessary

## Component structure

Components are a integral part of React (and modern frontend development in general). Therefore you should not be afraid to create them - components are **_cheap_** in React. Components in React can grow to be a complex topic, but for now, you should simply focus on writing small and simple components. Let your components have single responsibilites as much as possible. This helps both yourself, you fellow developers and enables React to optimize component rendering.

## Styling approach

We will be using [tailwind CSS](https://tailwindcss.com/) for styling. Tailwind is an unopiniated, utility-first CSS library, which provides most, if not all, of the base CSS building blocks you need to build basically every ui. It has become insanely popular in recent years, and with good right. Tailwind is framework agnostic, so it works across all css frameworks, and has amazing dev ex, including escape hatches for arbitrary values, prettier plugins and class intellisense.

Read [tailwinds explanation of utility first CSS](https://tailwindcss.com/docs/utility-first) to get an idea of the why and how of tailwind.

## Graphql

Graphql in it self is a massive topic, and a deep discussion of frontend graphql consumption is a matter for another day. In this project you will focus on creating a streamlined build system, so you can feel the power of integration Graphql deeply into your frontend workflow. This will be comprised of the following steps:

### Enabling intellisense

Graphql is a schema based protocol. This can be leveraged to enforce type checking in the client. Since the server always tell us excatly _how_ we can query and mutate data, our editor can help us always write valid operations, and even make our build fail on invalid operations.

Fortunately, the tooling for this is simple. Have a look at **_.graphqlrc.ts_** to see how it is set up in this project, and [the Guild docs](https://the-guild.dev/graphql/config/docs) for a more in depth explanation.

### Set up code generation

Intellisense is great in itself - but we can take it even further. When we are writing clients in typed languages (like typescript in this project), we often end up with a load of model type / interface / classes, which define our data model. The truth about this data model almost always originates in the back end. In classic rest backed projects, we would have to maintain these manually in the client. This creates two problems. Firstly it creates a lot of busywork for the frontend devs - always having to update and tweak models to fit a changing backend. Secondly, and most importantly, it does **_not_** improve reliability and trust across the **_system_**. On the contrary it creates a sense of false security. Many run time errors have happened because a endpoint definition changed and wasn't updated in the client - but hey, the builds passed so we a probably good right 🫣.

Wouldn't it be nice if we could generate the api types instead of writing them ourselves? Well, it turns out that we can! And with graphql, it works really well.

Using [The guilds graphql codegen](https://the-guild.dev/graphql/codegen) we can automagically generate typings as we write. No manual generation step is needed - the types for your operations appear as you write them.

Lets say that you have written a query:

```typescript
export const fooQuery = gql`
  query Foo($limit: Int) {
    foo(limit: $limit) {
      count
      next
      results {
        id
        name
        url
      }
    }
  }
`;
```

a corresponding typescript type will be generated:

(in a React component)

```typescript
const { data } = useQuery<FooQuery, FooQueryVariables>(fooQuery);
```

Data will now be typed. Neat right?

### Apollo

Apollo is a graphql client. It's not the only one. Alternatives like [urql](https://commerce.nearform.com/open-source/urql/) or [graphl-request](https://www.npmjs.com/package/graphql-request) are just as good in their own sense. It is, however, one of the widely used and battletested clients out there. Apollo pioneered the modern graphql consumption patterns we see in frontend development today. What makes Apollo and it's like are build around the following paradigms:

#### Colocated operations

In classic rest based clients, it's quite normal to see a horizontal architecture. The codebase will ofter be split into layers depending on their type. For example:

- Pure data model types **_Stateless data model_**
- Date access / repository / service **_Stateless functions / classes to fetch and post data_**
- State management / stores / atoms / boxes / ... **_Stateful obejcts of some kind that actually holds our state - often as global interconnected state _**
- Components **_What the user actually cares about. Putting pixels on the screen_**

This is quite a lot to take in. That's four layers just to put even the tiniest bit of server data onto the screen. The first two layers are pretty simple if you keep them strictly stateless and follow single responsibility principles - although they will invariably turn bloaty and cumbersome over time. What's worse is the state management layer. Once an applications grows complex enough it will invariably happen that state from one part of the application will bleed into another. It can either be intentional (hey - we already store the list of products in this store, lets just use that!), or unintentional (When i put an item in my cart, the entiry product tree is refetched, and I can't figure out why!), but it **_will_** happen. And when it does, it's usually so far into the development process that untangling the strands of side effects and possible regressions is way to costly.

Nobody wants that, right? So lets explore another way.

Instead of separating your codebase by type, you should separate it by feature (exceptions to this exist - all architecture should be pliable). That means, that instead of horizontal layers, you will end up with vertical slices. In this architecture, a high level component wil typically be reponsible for:

- Defining the data is needs **_Through graphql codegen and props_**
- Running the operations it needs **_Queries and mutations_**
- Orchestrating the corresponding layout **_Either on its own or by smaller sub components_**

That way, a component is a lot more self sufficient, and less prone to side effects. By using this approach, your codebase will primarily consist of more or less separate islands of functionality which can function more independent of each other.

Be aware, that not all component will need to fetch their own data. Once a component fetches its own data, it's locked to that use-case and no longer generic. A common approch is to place your data fetch on the page level, and from there pass the fetched data into the child components. This will result in fewer, but larger, requests, which is often faster, and allow you to create small and reusable sub-component with well-defined interfaces, and utilize them in high-level orchastration components.

But where should the query be written then? Should the high-level component defined all data that is needed?

No. it should not. Since the primary responsibility of the high-level component is orchestration and business logic handling, it should not be concerned with precicely what data each and every sub component under it needs. Instead, it should focus on **_orchestrating_** the required parts of data by fetching and providing them. For this we use [graphql fragments](https://www.apollographql.com/docs/react/data/fragments/). The name is quite self-explanatory. A fragment is simply a part of a graphlq query definition. It cannot be executed on its own.

```typescript
const fooFragment = gql`
  fragment FooDetails on Foo {
    id
    name
    email
  }
`;
```

The syntax for fragment and queries are similar. The primary difference is that for a fragment, you have to define which type it is a fragment for. That also means that a fragment can **_only define data for one type_**. In a wider graphql sense, fragment are often used for reusing common definitions, which are used across many queries. In client development, however, we can utilize them in a nifty way. The soon as a component uses domain data (data from the api) it should define this using a fragment. The generated type from this should then be part of its props. That way, the high-level component can simply combine the required fragments of its subcomponent into a unified query, and pass the data as props.

```typescript
import { fooFragment } from "...";

const somePageQuery = gql`
  query SomePage {
    foos(limit: 10) {
      items {
        ...FooDetails
      }
    }
  }
  ${fooFragment}
`;
```

```typescript
type Props = FooDetailsFragment & {
  // Whatever additional props, if any.
};

const FooDetails = ({ id, name, email }: Props) => {
  return <div>{name}</div>;
};
```

```typescript
const SomePage = () => {
  const { data } = useQuery<SomePageQuery>(somePageQuery);

  return (
    <SomeContainer>
      {data?.foos?.items?.map((item) => (
        <FooDetails {...item} />
      ))}
    </SomeContainer>
  );
};
```

There are a few caveats to this approach. The main one being, that we lose data sharing between components, since data is colocated with the components needing it. Luckily, Apollo is nere to save the day. In addition to executing our graphql operations, Apollo comes with a fully normalised cache.

Let that sink in for a moment. Fully. Normalised. And for the most part it works out of the box. It's the closest thing to magic in this setup.

The reason it works is, yet again, the schema based nature of graphql. Since all data in graphql must have a type with a typename, we can normalise the entity based on a few requirements:

- Typenames are unique
- All Types have a prop, or combination of props, with a unique value **_(often Id)_**

Under the hood, Apollo will keep track of which prop you have fetched on which entites, during which operations. The real life effect of this is that you rarely need to think about caching data. In most cases Apollo will handle it.

## Setting up your editor
