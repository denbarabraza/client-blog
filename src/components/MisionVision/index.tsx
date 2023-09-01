import React, { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import LayoutWrapper from '@/components/LayoutWrapper';
import { MissionVisionTypeEnum } from '@/constants/enums';

import { IMissionVision } from './interface';

import styles from './styles.module.scss';

const MissionVision: FC<IMissionVision> = ({ variant }) => {
  const t = useTranslations();

  return (
    <LayoutWrapper>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <section className={styles.item}>
            {variant === MissionVisionTypeEnum.AboutUs ? (
              <>
                <p className={styles.label}>{t('AboutUs.missionLabel')}</p>
                <p className={styles.title}>{t('AboutUs.missionTitle')}</p>
                <p className={styles.text}>{t('AboutUs.missionText')}</p>
              </>
            ) : (
              <>
                <p className={styles.label}>{t('Home.aboutLabel')}</p>
                <p className={styles.title}>{t('Home.aboutTitle')}</p>
                <p className={styles.text}>{t('Home.aboutText')}</p>
                <Link href='/aboutUs' data-cy='aboutUsLinkHome'>
                  {t('Home.aboutButton')}
                </Link>
              </>
            )}
          </section>
          <section className={styles.item}>
            {variant === MissionVisionTypeEnum.AboutUs ? (
              <>
                <p className={styles.label}>{t('AboutUs.visionLabel')}</p>
                <p className={styles.title}>{t('AboutUs.visionTitle')}</p>
                <p className={styles.text}>{t('AboutUs.visionText')}</p>
              </>
            ) : (
              <>
                <p className={styles.label}>{t('AboutUs.missionLabel')}</p>
                <p className={styles.title}>{t('AboutUs.missionTitle')}</p>
                <p className={styles.text}>{t('AboutUs.missionText')}</p>
              </>
            )}
          </section>
        </div>
        {variant !== MissionVisionTypeEnum.AboutUs && (
          <div className={styles.colorItems}>
            <div className={styles.left} />
            <div className={styles.right} />
          </div>
        )}
      </div>
    </LayoutWrapper>
  );
};

export default MissionVision;
