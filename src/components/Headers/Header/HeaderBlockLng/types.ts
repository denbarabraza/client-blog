import { LocaleValueEnum } from '@/constants/enums';

import { IHeader } from '../types';

export interface IHeaderBase extends IHeader {
  translationPath: string;
  locale: LocaleValueEnum;
}
