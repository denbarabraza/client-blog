import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from 'components-client-blog';

import LayoutWrapper from '@/components/LayoutWrapper';

import styles from './styles.module.scss';

const JoinOurTeam = () => {
  const t = useTranslations();

  return (
    <LayoutWrapper>
      <div className={styles.wrapper}>
        <h6 className={styles.title}>{t('JoinOurTeam.title')}</h6>
        <p className={styles.text}>{t('JoinOurTeam.text')}</p>
        <Link href='/contactUs'>
          <Button title={t('JoinOurTeam.button')} isValid data-cy='joinOurTeam.button' />
        </Link>
      </div>
    </LayoutWrapper>
  );
};

export default JoinOurTeam;
