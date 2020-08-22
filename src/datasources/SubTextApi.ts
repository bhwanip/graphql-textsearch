import config from '../config';
import { Subtext } from '../generated/graphql';
import RetryRestDataSource from './RetryRestDataSource';

export interface SubTextDataSourceType {
  baseURL: string;
  getSubText: () => Promise<Subtext>;
}

export default class SubTextApi extends RetryRestDataSource {
  public baseURL;

  constructor() {
    super();
    this.baseURL = `${config.reckonService}/test2/subTexts`;
  }

  public async getSubText() {
    return this.get(this.baseURL);
  }
}
