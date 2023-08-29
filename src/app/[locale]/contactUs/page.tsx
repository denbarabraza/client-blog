'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import Form from '@/components/Form';
import LayoutWrapper from '@/components/LayoutWrapper';
import MapInContactUs from '@/components/MapInContactUs';

import styles from './styles.module.scss';

const ContactUs = () => {
  const t = useTranslations();

  return (
    <>
      <LayoutWrapper>
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <h1 className={styles.title}>{t('ContactUs.title')}</h1>
            <h2 className={styles.subtitle}>{t('ContactUs.subtitle')}</h2>
            <p className={styles.text}>{t('ContactUs.text')}</p>
          </div>
          <div className={styles.info}>
            <div className={styles.infoWrapper}>
              <div className={styles.infoBlock}>
                <h6 className={styles.infoBlockTitle}>
                  {t('ContactUs.workingHoursTitle')}
                </h6>
                <p className={styles.infoBlockText}>{t('ContactUs.workingDays')}</p>
                <p className={styles.infoBlockText}>{t('ContactUs.workingHours')}</p>
                <p className={styles.infoBlockNote}>{t('ContactUs.support')}</p>
              </div>
              <div className={styles.infoBlock}>
                <h6 className={styles.infoBlockTitle}>{t('ContactUs.title')}</h6>
                <p className={styles.infoBlockText}>020 7993 2905</p>
                <p className={styles.infoBlockNote}>hello@finsweet.com</p>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </LayoutWrapper>
      <MapInContactUs />
    </>
  );
};

export default ContactUs;
