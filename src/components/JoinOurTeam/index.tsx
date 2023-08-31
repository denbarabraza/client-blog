import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

const JoinOurTeam = () => {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <h6 className={styles.title}>{t('JoinOurTeam.title')}</h6>
      <p className={styles.text}>{t('JoinOurTeam.text')}</p>
      <Link href='/contactUs' className={styles.button} data-cy='joinOurTeam.button'>
        {t('JoinOurTeam.button')}
      </Link>
    </div>
  );
};

export default JoinOurTeam;
