import { LocaleValueEnum } from '@/constants/enums';

export interface ICategory {
  category: {
    title: string;
    titleRus?: string;
    icon: string;
    info: string;
  };
  locale: LocaleValueEnum;
}
