import authors from '@/constants/data/authors.json';
import { IAuthor } from '@/types';

export const findAuthorById = (authorId: number) => {
  const authorById = authors.find(author => author.id === authorId);

  return authorById as IAuthor;
};
