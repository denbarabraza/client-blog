'use client';

import React, { FC, Fragment } from 'react';
import { useTranslations } from 'next-intl';
import ShortPostAboutUs from 'components/Posts/ShortPostAboutUs';

import Categories from '@/components/Categories';
import HomeHeader from '@/components/Headers/HomeHeader';
import Layout from '@/components/Layout';
import InfoInHome from '@/components/MisionVision';
import FeaturedBlogPosts from '@/components/Posts/FeaturedBlogPosts';
import { MissionVisionTypeEnum } from '@/constants/enums';
import { IPage } from '@/types';

import styles from './page.module.scss';

const Home: FC<IPage> = ({ params: { locale } }) => {
  const t = useTranslations();
  const components = [
    <HomeHeader key={0} />,
    <Layout key={1}>
      <FeaturedBlogPosts />
    </Layout>,
    <Layout key={2}>
      <InfoInHome variant={MissionVisionTypeEnum.Home} />
    </Layout>,
    <Layout key={3}>
      <Categories
        locale={locale}
        categoriesTitle={t('Home.categoriesTitle')}
        titleAlign='center'
      />
    </Layout>,
    <ShortPostAboutUs key={4} />,
    /*

                        ,
                        <Layout>
                          <Authors lng={lng} variant='home' />
                        </Layout>,
                        <Layout>
                          <PartnersList lng={lng} />
                        </Layout>,
                        <Layout>
                          <Testimonials lng={lng} />
                        </Layout>,
                        <Layout>
                          <JoinOurTeam lng={lng} />
                        </Layout>, */
  ];

  return (
    <div className={styles.wrapper}>
      {components.map(component => (
        <Fragment key={component.key}>{component}</Fragment>
      ))}
    </div>
  );
};

export default Home;
