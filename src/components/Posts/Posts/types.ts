import { LocaleValueEnum } from '@/constants/enums';

export interface IPost {
  id: number;
  title: string;
  category: string;
  preview: string;
  image: string;
}

export interface IPosts {
  postsTitle: string;
  posts: IPost[];
}
