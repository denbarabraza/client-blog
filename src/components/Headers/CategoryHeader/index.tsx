import React, { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleValueEnum } from '@/constants/enums';

import { ICategoryHeader } from './types';

import styles from './styles.module.scss';

const CategoryHeader: FC<ICategoryHeader> = ({
  category: { title, info, titleRus },
  locale,
}) => {
  const t = useTranslations();

  const categoryTitle = locale === LocaleValueEnum.En ? title : titleRus;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.info}>{info}</p>
      <div className={styles.navigation}>
        <Link href='/blog'>{t('Blog.title')}</Link>
        <p>{`> ${categoryTitle}`}</p>
      </div>
    </div>
  );
};

export default CategoryHeader;
