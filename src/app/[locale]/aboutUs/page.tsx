'use client';

import React, { Fragment } from 'react';
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
import { useCustomInfiniteScroll } from '@/hooks/useCustomInfinityScroll';

import styles from './styles.module.scss';

const AboutUs = () => {
  const t = useTranslations();

  const componentsAboutUs = [
    <Overview key={0} />,
    <MisionVision variant={MissionVisionTypeEnum.AboutUs} key={1} />,
    <AboutTeam
      key={2}
      variant={TextInAboutTeamEnum.Left}
      label={t('AboutUs.creativeLabel')}
      title={t('AboutUs.creativeTitle')}
      text={t('AboutUs.creativeText')}
      src='/assets/images/hands.png'
      alt={t('creativeLabel')}
      shape='/assets/images/shapes.png'
    />,
    <AboutTeam
      key={3}
      variant={TextInAboutTeamEnum.Right}
      label={t('AboutUs.whyLabel')}
      title={t('AboutUs.whyTitle')}
      text={t('AboutUs.whyText')}
      src='/assets/images/stairs.png'
      alt={t('AboutUs.whyLabel')}
      shape='/assets/images/circle.png'
    />,
    <Authors variant={AuthorsInPageEnum.ABoutUs} key={4} />,
    <JoinOurTeam key={5} />,
  ];

  const visibleComponents = useCustomInfiniteScroll(componentsAboutUs);

  return (
    <LayoutWrapper>
      <div className={styles.wrapper}>
        <AboutHeader />
        {visibleComponents?.map(component => (
          <Fragment key={component.toString()}>{component}</Fragment>
        ))}
      </div>
    </LayoutWrapper>
  );
};

export default AboutUs;
