## Start Apollo Server

```sh
npm start
```

## Run tests

```sh
npm run test:jest
```

## Solution Approach
- Use Apollo REST Datasource which provides request deduplication, caching and memoization out of the box.

- Use Exponential backoff strategy with infinite retries for downstream servcies

- Clear segregation of query and mutation schemas

- Includes relevant tests using apollo testing library and jest


