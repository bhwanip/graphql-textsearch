import { DataSourcesType } from '../../../datasources';
import { TextToSearch } from '../../../generated/graphql';

export default (
  _,
  __,
  { dataSources }: { dataSources: DataSourcesType }
): Promise<TextToSearch> => {
  return dataSources.textToSearchApi.getText();
};
