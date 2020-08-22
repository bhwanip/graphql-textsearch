import config from '../config';
import {
  SubmitResultsInput,
  SubmitResultsResponse
} from '../generated/graphql';
import RetryRestDataSource from './RetryRestDataSource';

export interface SubmitResultsDataSourceType {
  baseURL: string;
  submitResults: (SubmitResultsInput) => Pick<SubmitResultsResponse, 'result'>;
}

export default class SubmitResultsDataSource extends RetryRestDataSource {
  public baseURL;

  constructor() {
    super();
    this.baseURL = `${config.reckonService}/test2`;
  }

  public async submitResults(results) {
    return this.post('submitResults', results);
  }
}
