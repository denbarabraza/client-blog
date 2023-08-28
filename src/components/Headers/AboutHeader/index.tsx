'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

const AboutHeader = () => {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <h2 className={styles.title}>{t('AboutUs.title')}</h2>
        <p className={styles.headerTitle}>{t('AboutUs.headerTitle')}</p>
      </section>
      <div className={styles.text}>{t('AboutUs.headerText')}</div>
    </div>
  );
};

export default AboutHeader;
