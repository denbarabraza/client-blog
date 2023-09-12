import { LocaleValueEnum } from 'constants/enum';

export interface ICategoryHeader {
  category: {
    title: string;
    titleRus: string;
    info: string;
  };
  locale: LocaleValueEnum;
}
