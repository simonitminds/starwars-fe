/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createItem(\n    $name: String!\n    $type: String!\n    $price: Float!\n    $description: String!\n    $userId: Int!\n  ) {\n    createItem(\n      name: $name\n      type: $type\n      price: $price\n      description: $description\n      userId: $userId\n    ) {\n      id\n      name\n      type\n      price\n      description\n      user {\n        id\n        name\n      }\n    }\n  }\n": types.CreateItemDocument,
    "\n  query items {\n    items {\n      id\n      name\n      type\n      price\n      description\n    }\n  }\n": types.ItemsDocument,
    "\n  mutation Login($username: String!) {\n    login(username: $username) {\n      token\n      user {\n        id\n        name\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  query item($id: Int!) {\n    item(id: $id) {\n      id\n      name\n      type\n      price\n      description\n    }\n  }\n": types.ItemDocument,
    "\n  mutation updateItem($item: ItemInput!) {\n    updateItem(item: $item) {\n      id\n      name\n      type\n      price\n      description\n    }\n  }\n": types.UpdateItemDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createItem(\n    $name: String!\n    $type: String!\n    $price: Float!\n    $description: String!\n    $userId: Int!\n  ) {\n    createItem(\n      name: $name\n      type: $type\n      price: $price\n      description: $description\n      userId: $userId\n    ) {\n      id\n      name\n      type\n      price\n      description\n      user {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createItem(\n    $name: String!\n    $type: String!\n    $price: Float!\n    $description: String!\n    $userId: Int!\n  ) {\n    createItem(\n      name: $name\n      type: $type\n      price: $price\n      description: $description\n      userId: $userId\n    ) {\n      id\n      name\n      type\n      price\n      description\n      user {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query items {\n    items {\n      id\n      name\n      type\n      price\n      description\n    }\n  }\n"): (typeof documents)["\n  query items {\n    items {\n      id\n      name\n      type\n      price\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($username: String!) {\n    login(username: $username) {\n      token\n      user {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($username: String!) {\n    login(username: $username) {\n      token\n      user {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query item($id: Int!) {\n    item(id: $id) {\n      id\n      name\n      type\n      price\n      description\n    }\n  }\n"): (typeof documents)["\n  query item($id: Int!) {\n    item(id: $id) {\n      id\n      name\n      type\n      price\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateItem($item: ItemInput!) {\n    updateItem(item: $item) {\n      id\n      name\n      type\n      price\n      description\n    }\n  }\n"): (typeof documents)["\n  mutation updateItem($item: ItemInput!) {\n    updateItem(item: $item) {\n      id\n      name\n      type\n      price\n      description\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;