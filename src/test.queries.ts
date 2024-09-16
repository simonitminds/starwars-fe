import { gql } from "@apollo/client"

export const testQuery = gql`
  query Test {
    items {
      edges {
        node {
          id
        }
      }
    }
  }
`
