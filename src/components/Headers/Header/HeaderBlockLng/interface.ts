import { LocaleValueEnum } from '@/constants/enums';

import { IHeader } from '../interface';

export interface IHeaderBase extends IHeader {
  translationPath: string;
  locale: LocaleValueEnum;
}
