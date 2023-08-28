import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

import authors from '@/constants/data/authors.json';
import { AuthorsInPageEnum } from '@/constants/enums';

import Author from './Author';
import { IAuthors } from './types';

import styles from './styles.module.scss';

const Authors: FC<IAuthors> = ({ variant }) => {
  const t = useTranslations();

  const authorsList = variant === AuthorsInPageEnum.Home ? authors.slice(0, 4) : authors;

  return (
    <div className={styles.wrapper} style={{ width: '100%' }}>
      <h5 className={styles.title}>{t('AboutUs.authors')}</h5>
      <div className={styles.grid}>
        {authorsList.map(author => (
          <Author {...author} key={author.id} />
        ))}
      </div>
    </div>
  );
};

export default Authors;
