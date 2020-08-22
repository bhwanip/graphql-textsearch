import { gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import { createApolloServer } from './createApolloServer';

const mockGetText = jest.fn();
const mockGetSubText = jest.fn();
const mockSubmitResults = jest.fn();

jest.mock('./datasources/TextToSearchApi', () =>
  jest.fn().mockImplementation(() => {
    return { getText: mockGetText };
  })
);

jest.mock('./datasources/SubtextApi', () =>
  jest.fn().mockImplementation(() => {
    return { getSubText: mockGetSubText };
  })
);

jest.mock('./datasources/SubmitResultsApi', () =>
  jest.fn().mockImplementation(() => {
    return { submitResults: mockSubmitResults };
  })
);

const GET_TEXT_TO_SEARCH = gql`
  query {
    searchResult {
      textToSearch {
        text
      }
    }
  }
`;

const GET_SUBTEXT_TO_SEARCH = gql`
  query {
    searchResult {
      subtextToSearch {
        subTexts
      }
    }
  }
`;

const GET_RESULTS = gql`
  query {
    searchResult {
      results {
        subtext
        result
      }
    }
  }
`;

const GET_ALL = gql`
  query {
    searchResult {
      textToSearch {
        text
      }
      subtextToSearch {
        subTexts
      }
      results {
        subtext
        result
      }
    }
  }
`;

const SUBMIT_RESULTS = gql`
  mutation SubmitResults($input: SubmitResultsInput) {
    submitResults(input: $input) {
      success
      result
    }
  }
`;

describe('src/server.ts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should query textToSearch', async done => {
    mockGetText.mockReturnValueOnce(
      Promise.resolve({
        text: 'Text to Search is Foo Foo'
      })
    );

    const { query } = createTestClient(createApolloServer());

    const res = await query({ query: GET_TEXT_TO_SEARCH });

    expect(mockGetText).toHaveBeenCalledTimes(1);

    expect(res).toEqual(
      expect.objectContaining({
        data: {
          searchResult: {
            textToSearch: {
              text: 'Text to Search is Foo Foo'
            }
          }
        }
      })
    );

    done();
  });

  test('should query subText', async done => {
    mockGetSubText.mockReturnValueOnce(
      Promise.resolve({
        subTexts: ['Foo']
      })
    );

    const { query } = createTestClient(createApolloServer());

    const res = await query({ query: GET_SUBTEXT_TO_SEARCH });

    expect(mockGetSubText).toHaveBeenCalledTimes(1);

    expect(res).toEqual(
      expect.objectContaining({
        data: {
          searchResult: {
            subtextToSearch: {
              subTexts: ['Foo']
            }
          }
        }
      })
    );

    done();
  });

  test('should query results', async done => {
    mockGetText.mockReturnValueOnce(
      Promise.resolve({
        text: 'Text to Search is Foo Foo'
      })
    );

    mockGetSubText.mockReturnValueOnce(
      Promise.resolve({
        subTexts: ['Foo', 'Bar']
      })
    );

    const { query } = createTestClient(createApolloServer());

    const res = await query({ query: GET_RESULTS });

    expect(mockGetText).toHaveBeenCalledTimes(1);
    expect(mockGetSubText).toHaveBeenCalledTimes(1);

    expect(res).toEqual(
      expect.objectContaining({
        data: {
          searchResult: {
            results: [
              {
                subtext: 'Foo',
                result: '19,23'
              },
              {
                subtext: 'Bar',
                result: '<No Output>'
              }
            ]
          }
        }
      })
    );

    done();
  });

  test('should query all', async done => {
    mockGetText.mockReturnValue(
      Promise.resolve({
        text: 'Text to Search is Foo Foo'
      })
    );

    mockGetSubText.mockReturnValue(
      Promise.resolve({
        subTexts: ['Foo', 'Bar']
      })
    );

    const { query } = createTestClient(createApolloServer());

    const res = await query({ query: GET_ALL });

    expect(mockGetText).toHaveBeenCalledTimes(2);
    expect(mockGetSubText).toHaveBeenCalledTimes(2);

    expect(res).toEqual(
      expect.objectContaining({
        data: {
          searchResult: {
            textToSearch: {
              text: 'Text to Search is Foo Foo'
            },
            subtextToSearch: {
              subTexts: ['Foo', 'Bar']
            },
            results: [
              {
                subtext: 'Foo',
                result: '19,23'
              },
              {
                subtext: 'Bar',
                result: '<No Output>'
              }
            ]
          }
        }
      })
    );

    done();
  });

  test('should submit results', async done => {
    mockSubmitResults.mockReturnValueOnce(
      Promise.resolve({
        result: 'Thanks for submitting!'
      })
    );

    const { mutate } = createTestClient(createApolloServer());

    const res = await mutate({
      mutation: SUBMIT_RESULTS,
      variables: {
        input: {
          candidate: 'Test Candidate',
          text: 'Text to Search is Foo Foo',
          results: [
            {
              subtext: 'Foo',
              result: '19,23'
            },
            {
              subtext: 'Bar',
              result: '<No Output>'
            }
          ]
        }
      }
    });

    expect(mockSubmitResults).toHaveBeenCalledTimes(1);

    expect(res.data).toEqual(
      expect.objectContaining({
        submitResults: {
          success: true,
          result: 'Thanks for submitting!'
        }
      })
    );

    done();
  });
});
