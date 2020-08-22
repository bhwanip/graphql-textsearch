import { ApolloServer, gql } from 'apollo-server';
import { buildDataSources } from './datasources';
import {
  resolvers as mutationResolvers,
  typeDefs as mutationTypeDefs
} from './mutation';
import {
  resolvers as queryResolvers,
  typeDefs as queryTypeDefs
} from './query';

const baseSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export const createApolloServer = () =>
  new ApolloServer({
    typeDefs: [baseSchema, queryTypeDefs, mutationTypeDefs],
    resolvers: { ...queryResolvers, ...mutationResolvers },
    dataSources: buildDataSources
  });
