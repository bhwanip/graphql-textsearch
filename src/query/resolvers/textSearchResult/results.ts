import _isEmpty from 'lodash.isempty';
import { DataSourcesType } from '../../../datasources';
import { SubtextResult } from '../../../generated/graphql';
import getIndexesForStr from '../../../utils/getIndexesForString';

export default async (
  _,
  __,
  { dataSources }: { dataSources: DataSourcesType }
): Promise<SubtextResult[]> => {
  const [{ text: textToSearch }, { subTexts }] = await Promise.all([
    dataSources.textToSearchApi.getText(),
    dataSources.subTextApi.getSubText()
  ]);
  const indexesCache = new Map<string, number[]>();

  if (!subTexts) {
    return [];
  }

  return subTexts.map(search => {
    const result = indexesCache.has(search.toLowerCase())
      ? indexesCache.get(search.toLowerCase())
      : getIndexesForStr(search, textToSearch, indexesCache);

    return {
      subtext: search,
      result: !result || _isEmpty(result) ? '<No Output>' : result.toString()
    };
  });
};
