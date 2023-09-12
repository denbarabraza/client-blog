'use client';

import React, { FC, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LocaleValueEnum } from 'constants/enum';

import { PATH } from '@/constants/path';

import { ICategory } from './interface';

import styles from './styles.module.scss';

const Category: FC<ICategory> = memo(
  ({ category: { icon, info, title, titleRus }, locale }) => {
    return (
      <Link href={`/${locale}${PATH.CATEGORY}/${title.toLocaleLowerCase()}`}>
        <div className={styles.category} data-cy='category'>
          <div className={styles.image}>
            <Image src={icon} alt={title} fill />
          </div>
          <h5 className={styles.title}>
            {locale === LocaleValueEnum.En ? title : titleRus}
          </h5>
          <p className={styles.info}>{info}</p>
        </div>
      </Link>
    );
  },
);

export default Category;
