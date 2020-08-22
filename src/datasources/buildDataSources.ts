import SubmitResultsApi, {
  SubmitResultsDataSourceType
} from './SubmitResultsApi';
import SubtextApi, { SubTextDataSourceType } from './SubTextApi';
import TextToSearchApi, { TextToSearchDataSourceType } from './TextToSearchApi';

export interface DataSourcesType {
  textToSearchApi: TextToSearchDataSourceType;
  subTextApi: SubTextDataSourceType;
  submitResultsApi: SubmitResultsDataSourceType;
}

export default () => ({
  textToSearchApi: new TextToSearchApi(),
  subTextApi: new SubtextApi(),
  submitResultsApi: new SubmitResultsApi()
});
