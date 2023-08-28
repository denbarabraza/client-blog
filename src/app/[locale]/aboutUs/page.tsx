'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import AboutTeam from '@/components/AboutTeam';
import Authors from '@/components/Authors';
import AboutHeader from '@/components/Headers/AboutHeader';
import JoinOurTeam from '@/components/JoinOurTeam';
import LayoutWrapper from '@/components/LayoutWrapper';
import MisionVision from '@/components/MisionVision';
import Overview from '@/components/Overview';
import {
  AuthorsInPageEnum,
  MissionVisionTypeEnum,
  TextInAboutTeamEnum,
} from '@/constants/enums';

import styles from './styles.module.scss';

const AboutUs = () => {
  const t = useTranslations();

  return (
    <LayoutWrapper>
      <div className={styles.wrapper}>
        <AboutHeader />
        <Overview />
        <MisionVision variant={MissionVisionTypeEnum.AboutUs} />
        <AboutTeam
          variant={TextInAboutTeamEnum.Left}
          label={t('AboutUs.creativeLabel')}
          title={t('AboutUs.creativeTitle')}
          text={t('AboutUs.creativeText')}
          src='/assets/images/hands.png'
          alt={t('creativeLabel')}
          shape='/assets/images/shapes.png'
        />
        <AboutTeam
          variant={TextInAboutTeamEnum.Right}
          label={t('AboutUs.whyLabel')}
          title={t('AboutUs.whyTitle')}
          text={t('AboutUs.whyText')}
          src='/assets/images/stairs.png'
          alt={t('AboutUs.whyLabel')}
          shape='/assets/images/circle.png'
        />
        <Authors variant={AuthorsInPageEnum.ABoutUs} />
        <JoinOurTeam />
      </div>
    </LayoutWrapper>
  );
};

export default AboutUs;
