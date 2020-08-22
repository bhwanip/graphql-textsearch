import { DataSourcesType } from '../../datasources';
import {
  MutationSubmitResultsArgs,
  SubmitResultsResponse
} from '../../generated/graphql';

export default async (
  _,
  { input }: MutationSubmitResultsArgs,
  { dataSources }: { dataSources: DataSourcesType }
): Promise<SubmitResultsResponse> => {
  const { result } = await dataSources.submitResultsApi.submitResults(input);

  return { result, success: true };
};
