'use client';

import React, { FC, Fragment } from 'react';
import { useTranslations } from 'next-intl';

import HomeHeader from '@/components/Headers/HomeHeader';
import { IPageProps } from '@/types';

import styles from './page.module.scss';

const Home: FC<IPageProps> = ({ params: { local } }) => {
  const t = useTranslations('Home');
  const components = [
    <HomeHeader key={0} />,
    /* <Layout>
                          <FeaturedBlogPosts lng={lng} />
                        </Layout>,
                        <Layout>
                          <MisionVision lng={lng} variant='' />
                        </Layout>,
                        <Layout>
                          <Categories categoriesTitle={t('Home.categoriesTitle')} titleAlign='center' />
                        </Layout>,
                        <SpecialPost lng={lng} />,
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
        <Fragment key={component.type.name}>{component}</Fragment>
      ))}
    </div>
  );
};

export default Home;
