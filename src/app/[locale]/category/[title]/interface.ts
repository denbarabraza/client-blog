import { LocaleValueEnum } from 'constants/enum';

export interface ICategoryPage {
  params: {
    title: string;
    locale: LocaleValueEnum;
  };
}
