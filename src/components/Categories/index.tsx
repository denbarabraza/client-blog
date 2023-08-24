import React, { FC } from 'react';

import Category from '@/components/Categories/Category';
import categories from '@/constants/data/categories.json';

import { ICategories } from './types';

import styles from './styles.module.scss';

const Categories: FC<ICategories> = ({ categoriesTitle, titleAlign, locale }) => (
  <div className={styles.wrapper}>
    <h6 className={styles.title} style={{ textAlign: titleAlign }}>
      {categoriesTitle}
    </h6>
    <section className={styles.content}>
      {categories.map(category => (
        <Category key={category.title} category={category} locale={locale} />
      ))}
    </section>
  </div>
);

export default Categories;
