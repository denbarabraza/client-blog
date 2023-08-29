'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

const PrivacyPolicy = () => {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('PrivacyPolicy.title')}</h1>
        <p className={styles.lastUpdate}>{t('PrivacyPolicy.lastUpdate')}</p>
      </div>
      <div className={styles.content}>
        <article className={styles.article}>
          <h3 className={styles.articleTitle}>{t('PrivacyPolicy.articleTitle')}</h3>
          <p className={styles.articleText}>{t('PrivacyPolicy.text')}</p>
          <h4 className={styles.articleSubtitle}>{t('PrivacyPolicy.articleSubtitle')}</h4>
          <p className={styles.articleText}>{t('PrivacyPolicy.text')}</p>
          <p className={styles.articleText}>{t('PrivacyPolicy.text')}</p>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
