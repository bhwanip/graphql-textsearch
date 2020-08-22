import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    searchResult: TextSearchResult
  }

  type TextToSearch {
    text: String!
  }

  type Subtext {
    subTexts: [String!]
  }

  type SubtextResult {
    subtext: String!
    result: String!
  }

  type TextSearchResult {
    textToSearch: TextToSearch
    subtextToSearch: Subtext
    results: [SubtextResult]
  }
`;
