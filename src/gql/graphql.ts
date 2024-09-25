/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** A user */
export type AuthInputObject = {
  __typename?: 'AuthInputObject';
  id?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Item>>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  wallet?: Maybe<Scalars['Float']['output']>;
};

export type AuthObject = {
  __typename?: 'AuthObject';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<AuthInputObject>;
};

/** An item for sale */
export type Item = {
  __typename?: 'Item';
  description?: Maybe<Scalars['String']['output']>;
  forSale?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user?: Maybe<AuthInputObject>;
};

export type ItemInput = {
  description: Scalars['String']['input'];
  forSale: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  type: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem?: Maybe<Item>;
  login?: Maybe<AuthObject>;
  updateItem?: Maybe<Item>;
};


export type MutationCreateItemArgs = {
  item: ItemInput;
};


export type MutationLoginArgs = {
  username: Scalars['String']['input'];
};


export type MutationUpdateItemArgs = {
  item: ItemInput;
  itemId: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  item?: Maybe<Item>;
  items?: Maybe<Array<Item>>;
  itemsByUser?: Maybe<Array<Item>>;
  users?: Maybe<Array<AuthInputObject>>;
};


export type QueryItemArgs = {
  id: Scalars['Int']['input'];
};


export type QueryItemsByUserArgs = {
  userId: Scalars['Int']['input'];
};

export type CreateItemMutationVariables = Exact<{
  item: ItemInput;
}>;


export type CreateItemMutation = { __typename?: 'Mutation', createItem?: { __typename?: 'Item', id?: string | null, name?: string | null, type?: string | null, price?: number | null, description?: string | null, forSale?: boolean | null } | null };

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthObject', token?: string | null, user?: { __typename?: 'AuthInputObject', id?: number | null, name?: string | null } | null } | null };

export type ItemsByUserQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type ItemsByUserQuery = { __typename?: 'Query', itemsByUser?: Array<{ __typename?: 'Item', id?: string | null, name?: string | null, type?: string | null, price?: number | null, description?: string | null, forSale?: boolean | null }> | null };

export type ItemQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ItemQuery = { __typename?: 'Query', item?: { __typename?: 'Item', id?: string | null, name?: string | null, type?: string | null, price?: number | null, description?: string | null } | null };

export type UpdateItemMutationVariables = Exact<{
  item: ItemInput;
  itemId: Scalars['Int']['input'];
}>;


export type UpdateItemMutation = { __typename?: 'Mutation', updateItem?: { __typename?: 'Item', id?: string | null, name?: string | null, type?: string | null, price?: number | null, description?: string | null } | null };


export const CreateItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"item"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"item"},"value":{"kind":"Variable","name":{"kind":"Name","value":"item"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"forSale"}}]}}]}}]} as unknown as DocumentNode<CreateItemMutation, CreateItemMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const ItemsByUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"itemsByUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemsByUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"forSale"}}]}}]}}]} as unknown as DocumentNode<ItemsByUserQuery, ItemsByUserQueryVariables>;
export const ItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"item"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<ItemQuery, ItemQueryVariables>;
export const UpdateItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"item"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ItemInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"item"},"value":{"kind":"Variable","name":{"kind":"Name","value":"item"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<UpdateItemMutation, UpdateItemMutationVariables>;