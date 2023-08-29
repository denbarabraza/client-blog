import { LocaleValueEnum } from '@/constants/enums';

export interface ICategoryPage {
  params: {
    title: string;
    locale: LocaleValueEnum;
  };
}
