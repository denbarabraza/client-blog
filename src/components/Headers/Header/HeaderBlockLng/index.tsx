'use client';

import React, { FC } from 'react';
import Link from 'next/link';

import { IHeaderBase } from './types';

import styles from './styles.module.scss';

const HeaderBlockLng: FC<IHeaderBase> = ({ locale, translationPath }) => {
  const languages = ['en', 'ru'];

  return (
    <div className={styles.wrapper}>
      <div className={styles.switcher}>
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
};

export default HeaderBlockLng;
