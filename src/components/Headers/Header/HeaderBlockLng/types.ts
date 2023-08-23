import { IHeader } from '../types';

export interface IHeaderBase extends IHeader {
  translationPath: string;
  locale: 'en' | 'ru';
}
