import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from 'components-client-blog';

import styles from './styles.module.scss';

const ShortPostAboutUs = () => {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <div className={styles.image} />
      <article className={styles.content}>
        <h4 className={styles.label}>{t('Home.whyLabel')}</h4>
        <h2 className={styles.title}>{t('Home.whyTitle')}</h2>
        <p className={styles.text}>{t('Home.whyText')}</p>
        <Link href='/aboutUs'>
          <Button title={t('Home.whyButton')} isValid data-cy='aboutUsLinkHomeShort' />
        </Link>
      </article>
    </div>
  );
};

export default ShortPostAboutUs;
