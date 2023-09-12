import { LocaleValueEnum } from 'constants/enum';

import { IHeader } from '../interface';

export interface IHeaderBase extends IHeader {
  translationPath: string;
  locale: LocaleValueEnum;
}
