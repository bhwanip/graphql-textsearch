import { RESTDataSource } from 'apollo-datasource-rest';
import { backOff as exponentialBackOff } from 'exponential-backoff';
import { logMessage } from '../utils/log';

const retry = path => (_, attemptNumber) => {
  logMessage(`Error for ${path} will retry, attemptNumber ${attemptNumber}`);
  return true;
};

export default class RetryRestDataSource extends RESTDataSource {
  public memoizedResults = new Map<string, Promise<any>>();

  protected didEncounterError(...args) {
    this.memoizedResults.delete(super.cacheKeyFor(args[1]));
    super.didEncounterError.apply(this, args);
  }

  protected async get(...args) {
    return exponentialBackOff<any>(() => super.get.apply(this, args), {
      numOfAttempts: Infinity,
      maxDelay: 5000,
      retry: retry(args[0])
    });
  }

  protected async post(...args) {
    return exponentialBackOff<any>(() => super.post.apply(this, args), {
      numOfAttempts: Infinity,
      maxDelay: 5000,
      retry: retry(args[0])
    });
  }
}
