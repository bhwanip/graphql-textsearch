export default function getIndexesForString(
  searchWord: string,
  text: string,
  cacheMap?: Map<string, number[]>
): number[] {
  const searchWordLowerCase = searchWord.toLowerCase();
  const textLowerCase = text.toLowerCase();

  const searchWordLength = searchWord.length;
  if (searchWordLength === 0) {
    return [];
  }
  let startIndex = 0;
  let index = textLowerCase.indexOf(searchWordLowerCase, startIndex);

  const indexes = new Array<number>();

  while (index > -1) {
    indexes.push(index + 1);
    startIndex = index + searchWordLength;
    index = textLowerCase.indexOf(searchWordLowerCase, startIndex);
  }

  if (!cacheMap) {
    return indexes;
  }

  cacheMap.set(searchWordLowerCase, indexes);

  return indexes;
}
