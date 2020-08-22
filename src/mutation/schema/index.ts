import { gql } from 'apollo-server';

export default gql`
  extend type Mutation {
    submitResults(input: SubmitResultsInput): SubmitResultsResponse
  }

  input SubtextResultInput {
    subtext: String!
    result: String!
  }

  input SubmitResultsInput {
    candidate: String!
    text: String!
    results: [SubtextResultInput]
  }

  type SubmitResultsResponse {
    success: Boolean!
    result: String
  }
`;
