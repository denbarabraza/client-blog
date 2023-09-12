import React, { FC, memo } from 'react';
import { useTranslations } from 'next-intl';
import { AuthorsInPageEnum } from 'constants/enum';

import LayoutWrapper from '@/components/LayoutWrapper';
import authors from '@/constants/data/authors.json';

import Author from './Author';
import { IAuthors } from './interface';

import styles from './styles.module.scss';

const Authors: FC<IAuthors> = memo(({ variant }) => {
  const t = useTranslations();

  const authorsList = variant === AuthorsInPageEnum.Home ? authors.slice(0, 4) : authors;

  return (
    <LayoutWrapper>
      <div className={styles.wrapper}>
        <h5 className={styles.title}>{t('AboutUs.authors')}</h5>
        <div className={styles.grid}>
          {authorsList.map(author => (
            <Author {...author} key={author.id} />
          ))}
        </div>
      </div>
    </LayoutWrapper>
  );
});

export default Authors;
