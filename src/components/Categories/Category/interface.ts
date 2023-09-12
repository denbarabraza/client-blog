import { LocaleValueEnum } from 'constants/enum';

export interface ICategory {
  category: {
    title: string;
    titleRus?: string;
    icon: string;
    info: string;
  };
  locale: LocaleValueEnum;
}
