import { LocaleValueEnum } from '@/constants/enums';

export interface ILanguage {
  locale: LocaleValueEnum;
}

export interface IPage {
  params: ILanguage;
}

export interface IAuthor {
  id: number;
  image: string;
  name: string;
  post: string;
  company: string;
  from: string;
  info: string;
  review: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}
