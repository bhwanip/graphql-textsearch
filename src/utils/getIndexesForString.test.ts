import getIndexesForString from './getIndexesForString';

describe('./getIndexesForString', () => {
  test('should find matches indexes case insensisitve', () => {
    const result = getIndexesForString('FOO', 'This is foo Foo');

    expect(result).toEqual([9, 13]);
  });

  test('should return emtry array for no matches', () => {
    const result = getIndexesForString('bar', 'This is foo Foo');

    expect(result.length).toEqual(0);
  });

  test('should populate cache with matches', () => {
    const cache = new Map<string, number[]>();

    const cacheSetter = jest.spyOn(cache, 'set');

    const result = getIndexesForString('foo', 'This is Foo', cache);

    expect(cacheSetter).toHaveBeenCalledWith('foo', [9]);
    expect(result).toEqual([9]);
  });
});
