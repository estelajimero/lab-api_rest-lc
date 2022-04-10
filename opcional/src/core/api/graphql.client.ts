import { GraphQLClient } from 'graphql-request';

const url = '/graphql';

export const graphqlClient = new GraphQLClient(url);
