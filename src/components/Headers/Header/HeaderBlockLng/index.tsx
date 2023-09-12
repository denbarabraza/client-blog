'use client';

import React, { FC, memo } from 'react';
import Link from 'next/link';

import { IHeaderBase } from './interface';

import styles from './styles.module.scss';

const HeaderBlockLng: FC<IHeaderBase> = memo(({ locale, translationPath }) => {
  const languages = ['en', 'ru'];

  return (
    <div className={styles.wrapper}>
      <div className={styles.switcher} data-cy='switcherItem'>
        <div className={styles.currentLng}>{locale}</div>
        <div>|</div>
        {languages
          .filter(language => locale !== language)
          .map(language => (
            <div key={language}>
              <Link href={`/${language}/${translationPath}`} key={language}>
                {language}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
});

export default HeaderBlockLng;
