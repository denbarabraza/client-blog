import { LocaleValueEnum } from 'constants/enum';

export interface ISearchBlock {
  currentCategory: string;
  locale: LocaleValueEnum;
  tags: string[];
  handleTag: (tag: string) => void;
}
