'use client';

import React, { FC, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LocaleValueEnum } from '@/constants/enums';

import { ICategoriesListItem } from './types';

import styles from './styles.module.scss';

const CategoriesListItem: FC<ICategoriesListItem> = ({
  category: { title, icon, titleRus },
  locale,
  isSelected,
}) => {
  const currentPath = usePathname();

  const translationPath = useMemo(() => currentPath.slice(1, 3), [currentPath]);

  const categoryTitle = locale === LocaleValueEnum.En ? title : titleRus;

  return (
    <Link href={`/${translationPath}/category/${title.toLocaleLowerCase()}`}>
      <div className={`${styles.category} ${isSelected && styles.selected}`}>
        <div className={styles.image}>
          <Image src={icon} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
        <h6 className={styles.title}>{categoryTitle}</h6>
      </div>
    </Link>
  );
};

export default CategoriesListItem;
