import config from '../config';
import { TextToSearch } from '../generated/graphql';
import RetryRestDataSource from './RetryRestDataSource';

export interface TextToSearchDataSourceType {
  baseURL: string;
  getText: () => Promise<TextToSearch>;
}

export default class TextToSearchApi extends RetryRestDataSource {
  public baseURL;

  constructor() {
    super();
    this.baseURL = `${config.reckonService}/test2/textToSearch`;
  }

  public async getText() {
    return this.get(this.baseURL);
  }
}
