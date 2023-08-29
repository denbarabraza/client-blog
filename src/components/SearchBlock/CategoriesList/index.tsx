import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

import categories from '@/constants/data/categories.json';

import CategoriesListItem from './CategoriesListItem';
import { ICategoriesList } from './interface';

import styles from './styles.module.scss';

const CategoriesList: FC<ICategoriesList> = ({ categoriesTitle, locale }) => {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t('Category.title')}</h2>
      {categories.map(category => (
        <CategoriesListItem
          locale={locale}
          isSelected={
            categoriesTitle.toLocaleLowerCase() === category.title.toLocaleLowerCase()
          }
          key={category.title}
          category={category}
        />
      ))}
    </div>
  );
};

export default CategoriesList;
