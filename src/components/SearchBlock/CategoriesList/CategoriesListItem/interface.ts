import { LocaleValueEnum } from 'constants/enum';

export interface ICategoriesListItem {
  category: {
    title: string;
    icon: string;
    titleRus: string;
  };
  locale: LocaleValueEnum;
  isSelected: boolean;
}
