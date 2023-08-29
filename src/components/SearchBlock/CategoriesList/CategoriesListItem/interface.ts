import { LocaleValueEnum } from '@/constants/enums';

export interface ICategoriesListItem {
  category: {
    title: string;
    icon: string;
    titleRus: string;
  };
  locale: LocaleValueEnum;
  isSelected: boolean;
}
