import { LocaleValueEnum } from 'constants/enum';

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
