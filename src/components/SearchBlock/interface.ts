import { LocaleValueEnum } from '@/constants/enums';

export interface ISearchBlock {
  currentCategory: string;
  locale: LocaleValueEnum;
  tags: string[];
  handleTag: (tag: string) => void;
}
