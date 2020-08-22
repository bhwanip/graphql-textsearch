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
  const { result } = await dataSources.submitResultsApi.submitResults(
    JSON.parse(JSON.stringify(input))
  );

  return { result, success: true };
};
