import { LocaleValueEnum } from '@/constants/enums';

export interface ICategoryHeader {
  category: {
    title: string;
    titleRus: string;
    info: string;
  };
  locale: LocaleValueEnum;
}
