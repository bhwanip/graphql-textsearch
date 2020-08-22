import { createApolloServer } from './createApolloServer';
import { DataSourcesType } from './datasources';
import { logMessage } from './utils/log';

export interface Context {
  dataSources: DataSourcesType;
}

const server = createApolloServer();

server.listen().then(({ url }) => {
  logMessage(`🚀  Server ready at ${url}`);
});
