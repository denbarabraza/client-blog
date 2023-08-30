'use client';

import React, { FC, Fragment } from 'react';
import { useTranslations } from 'next-intl';
import LayoutWrapper from 'components/LayoutWrapper';
import Partners from 'components/Partners';
import ShortPostAboutUs from 'components/Posts/ShortPostAboutUs';

import Authors from '@/components/Authors';
import Categories from '@/components/Categories';
import HomeHeader from '@/components/Headers/HomeHeader';
import JoinOurTeam from '@/components/JoinOurTeam';
import InfoInHome from '@/components/MisionVision';
import FeaturedBlogPosts from '@/components/Posts/FeaturedBlogPosts';
import Testimonials from '@/components/Testimonials';
import { AuthorsInPageEnum, MissionVisionTypeEnum } from '@/constants/enums';
import { useCustomInfiniteScroll } from '@/hooks/useCustomInfinityScroll';
import { IPage } from '@/types';

import styles from './page.module.scss';

const Home: FC<IPage> = ({ params: { locale } }) => {
  const t = useTranslations();

  const componentsHome = [
    <LayoutWrapper key={0}>
      <FeaturedBlogPosts />,
      <InfoInHome variant={MissionVisionTypeEnum.Home} />,
      <Categories
        locale={locale}
        categoriesTitle={t('Home.categoriesTitle')}
        titleAlign='center'
      />
    </LayoutWrapper>,
    <ShortPostAboutUs key={1} />,
    <LayoutWrapper key={2}>
      <Authors variant={AuthorsInPageEnum.Home} />,
      <Partners />,
      <Testimonials />,
      <JoinOurTeam />,
    </LayoutWrapper>,
  ];

  const visibleComponents = useCustomInfiniteScroll(componentsHome);

  return (
    <div className={styles.wrapper}>
      <HomeHeader />
      {visibleComponents?.map(component => (
        <Fragment key={component.toString()}>{component}</Fragment>
      ))}
    </div>
  );
};

export default Home;
