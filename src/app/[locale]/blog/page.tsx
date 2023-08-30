'use client';

import React, { FC, Fragment } from 'react';
import { useTranslations } from 'next-intl';
import BlogHeader from 'components/Headers/BlogHeader';

import Categories from '@/components/Categories';
import JoinOurTeam from '@/components/JoinOurTeam';
import LayoutWrapper from '@/components/LayoutWrapper';
import Posts from '@/components/Posts/Posts';
import posts from '@/constants/data/posts.json';
import { useCustomInfiniteScroll } from '@/hooks/useCustomInfinityScroll';
import { IPage } from '@/types';

const Blog: FC<IPage> = ({ params: { locale } }) => {
  const t = useTranslations();

  const componentsBlog = [
    <BlogHeader key={0} />,
    <Posts posts={posts} postsTitle={t('Blog.subtitle')} key={1} />,
    <Categories
      key={2}
      locale={locale}
      categoriesTitle={t('Blog.categoriesTitle')}
      titleAlign='left'
    />,
    <JoinOurTeam key={3} />,
  ];

  const visibleComponents = useCustomInfiniteScroll(componentsBlog);

  return (
    <LayoutWrapper>
      {visibleComponents?.map(component => (
        <Fragment key={component.toString()}>{component}</Fragment>
      ))}
    </LayoutWrapper>
  );
};

export default Blog;
