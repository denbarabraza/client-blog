'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import AboutTeam from '@/components/AboutTeam';
import Authors from '@/components/Authors';
import AboutHeader from '@/components/Headers/AboutHeader';
import { ItemIntersectionObserver } from '@/components/ItemIntersectionObserver';
import JoinOurTeam from '@/components/JoinOurTeam';
import LayoutWrapper from '@/components/LayoutWrapper';
import MisionVision from '@/components/MisionVision';
import Overview from '@/components/Overview';
import {
  AuthorsInPageEnum,
  MissionVisionTypeEnum,
  TextInAboutTeamEnum,
} from '@/constants/enums';
import { IComponentsVisible } from '@/types';

import styles from './styles.module.scss';

const AboutUs = () => {
  const t = useTranslations();

  const componentsAboutUs: IComponentsVisible[] = [
    { id: 0, component: <AboutHeader /> },
    { id: 1, component: <Overview /> },
    { id: 2, component: <MisionVision variant={MissionVisionTypeEnum.AboutUs} /> },
    {
      id: 3,
      component: (
        <AboutTeam
          variant={TextInAboutTeamEnum.Left}
          label={t('AboutUs.creativeLabel')}
          title={t('AboutUs.creativeTitle')}
          text={t('AboutUs.creativeText')}
          src='/assets/images/hands.png'
          alt={t('creativeLabel')}
          shape='/assets/images/shapes.png'
        />
      ),
    },
    {
      id: 4,
      component: (
        <AboutTeam
          variant={TextInAboutTeamEnum.Right}
          label={t('AboutUs.whyLabel')}
          title={t('AboutUs.whyTitle')}
          text={t('AboutUs.whyText')}
          src='/assets/images/stairs.png'
          alt={t('AboutUs.whyLabel')}
          shape='/assets/images/circle.png'
        />
      ),
    },
    { id: 5, component: <Authors variant={AuthorsInPageEnum.ABoutUs} /> },
    { id: 6, component: <JoinOurTeam key={5} /> },
  ];

  return (
    <LayoutWrapper>
      <div className={styles.wrapper}>
        {componentsAboutUs.map(({ component, id }) => {
          return <ItemIntersectionObserver key={id} item={component} />;
        })}
      </div>
    </LayoutWrapper>
  );
};

export default AboutUs;
