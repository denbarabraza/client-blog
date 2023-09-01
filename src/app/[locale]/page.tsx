'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import Partners from 'components/Partners';

import Authors from '@/components/Authors';
import Categories from '@/components/Categories';
import HomeHeader from '@/components/Headers/HomeHeader';
import JoinOurTeam from '@/components/JoinOurTeam';
import MissionVision from '@/components/MisionVision';
import FeaturedBlogPosts from '@/components/Posts/FeaturedBlogPosts';
import ShortPostAboutUs from '@/components/Posts/ShortPostAboutUs';
import Testimonials from '@/components/Testimonials';
import VirtualizedList from '@/components/VirtualizedList';
import { AuthorsInPageEnum, MissionVisionTypeEnum } from '@/constants/enums';
import { IPage, VirtualizedListItem } from '@/types';
import { renderVirtualizedList } from '@/utils/renderVirtualizedList';

import styles from './page.module.scss';

/*
 * I have implemented 3 infinite scrolling options. Below I provided on which page which option I used
 * 1. /home, /author, /blog, /contactUs - VirtualizedList
 * 2. /blogPost - useCustomInfiniteScroll(document + scroll)
 * 3. /aboutUs - Intersection Observer API
 * */

const Home: FC<IPage> = ({ params: { locale } }) => {
  const t = useTranslations();

  const dataHomePage: VirtualizedListItem[] = [
    {
      id: 'homeHeader',
      render: () => <HomeHeader />,
    },
    {
      id: 'featureBlock',
      render: () => <FeaturedBlogPosts />,
    },
    {
      id: 'infoInHome',
      render: () => <MissionVision variant={MissionVisionTypeEnum.Home} />,
    },
    {
      id: 'categories',
      render: () => (
        <Categories
          locale={locale}
          categoriesTitle={t('Home.categoriesTitle')}
          titleAlign='center'
        />
      ),
    },
    {
      id: 'shortPostAboutUs',
      render: () => <ShortPostAboutUs />,
    },
    {
      id: 'authors',
      render: () => <Authors variant={AuthorsInPageEnum.Home} />,
    },
    {
      id: 'partners',
      render: () => <Partners />,
    },
    {
      id: 'testimonials',
      render: () => <Testimonials />,
    },
    {
      id: 'joinOurTeam',
      render: () => <JoinOurTeam />,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <VirtualizedList
        data={dataHomePage}
        renderItem={renderVirtualizedList}
        defaultItemHeight={250}
      />
    </div>
  );
};

export default Home;
