import { LocaleValueEnum } from '@/constants/enums';

export interface ISearchBlock {
  currentCategory: string;
  locale: LocaleValueEnum;
  tag: string;
  handleTag: (tag: string) => () => void;
}
