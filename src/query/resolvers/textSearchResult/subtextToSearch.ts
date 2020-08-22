import { DataSourcesType } from '../../../datasources';
import { Subtext } from '../../../generated/graphql';

export default (
  _,
  __,
  { dataSources }: { dataSources: DataSourcesType }
): Promise<Subtext> => {
  return dataSources.subTextApi.getSubText();
};
