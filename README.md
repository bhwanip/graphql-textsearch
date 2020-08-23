## Start Apollo Server

```sh
npm install
npm start
```

## Run tests

```sh
npm run test:jest
```

## Sample Query

```sh
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
```

## Sample Mutation

```sh
mutation SubmitResults($input: SubmitResultsInput) {
    submitResults(input: $input) {
      success
      result
    }
  }
```

## Solution Approach
- Uses Apollo REST Datasource which provides request deduplication, caching and memoization out of the box.

- Uses Exponential backoff strategy with infinite retries for downstream servcies

- Clear segregation of query and mutation schemas

- Includes relevant tests using apollo testing library and jest


