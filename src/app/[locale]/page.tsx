'use client';

import React, { FC } from 'react';
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
import { MissionVisionTypeEnum } from '@/constants/enums';
import { IPage } from '@/types';

import styles from './page.module.scss';

const Home: FC<IPage> = ({ params: { locale } }) => {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <HomeHeader />,
      <LayoutWrapper>
        <FeaturedBlogPosts />
      </LayoutWrapper>
      <LayoutWrapper>
        <InfoInHome variant={MissionVisionTypeEnum.Home} />
      </LayoutWrapper>
      <LayoutWrapper>
        <Categories
          locale={locale}
          categoriesTitle={t('Home.categoriesTitle')}
          titleAlign='center'
        />
      </LayoutWrapper>
      <ShortPostAboutUs />,
      <LayoutWrapper>
        <Authors variant='home' />
      </LayoutWrapper>
      <LayoutWrapper>
        <Partners />
      </LayoutWrapper>
      <LayoutWrapper>
        <Testimonials />
      </LayoutWrapper>
      <LayoutWrapper>
        <JoinOurTeam />
      </LayoutWrapper>
    </div>
  );
};

export default Home;
