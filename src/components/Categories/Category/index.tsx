'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { LocaleValueEnum } from '@/constants/enums';

import { ICategory } from './interface';

import styles from './styles.module.scss';

const Category: FC<ICategory> = ({
  category: { icon, info, title, titleRus },
  locale,
}) => {
  return (
    <Link href={`/${locale}/category/${title.toLocaleLowerCase()}`}>
      <div className={styles.category} data-cy='category'>
        <div className={styles.image}>
          <Image src={icon} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
        <h5 className={styles.title}>
          {locale === LocaleValueEnum.En ? title : titleRus}
        </h5>
        <p className={styles.info}>{info}</p>
      </div>
    </Link>
  );
};

export default Category;
