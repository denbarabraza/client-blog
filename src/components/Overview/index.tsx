'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

const Overview = () => {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <article className={styles.overview}>
        <div className={styles.item}>
          <h2 className={styles.count}>12+</h2>
          <p className={styles.text}>{t('AboutUs.blogsPublished')}</p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.count}>18K+</h2>
          <p className={styles.text}>{t('AboutUs.views')}</p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.count}>30K+</h2>
          <p className={styles.text}> {t('AboutUs.usersTotal')}</p>
        </div>
      </article>
      <div className={styles.pattern}>
        <div className={styles.left} />
        <div className={styles.right} />
      </div>
    </div>
  );
};

export default Overview;
