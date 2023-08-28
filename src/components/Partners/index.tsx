import React from 'react';
import { useTranslations } from 'next-intl';

import { partners } from '@/constants';

import styles from './styles.module.scss';

const Partners = () => {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.label}>{t('Home.partnersLabel')}</p>
        <p className={styles.title}>{t('Home.partnersTitle')}</p>
      </div>
      {partners.map(({ icon, id }) => (
        <div className={styles.icon} key={id}>
          {icon}
        </div>
      ))}
    </div>
  );
};

export default Partners;
