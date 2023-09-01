import React, { FC } from 'react';

import Category from '@/components/Categories/Category';
import LayoutWrapper from '@/components/LayoutWrapper';
import categories from '@/constants/data/categories.json';

import { ICategories } from './interface';

import styles from './styles.module.scss';

const Categories: FC<ICategories> = ({ categoriesTitle, titleAlign, locale }) => (
  <LayoutWrapper>
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
  </LayoutWrapper>
);

export default Categories;
