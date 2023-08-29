'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import BlogHeader from 'components/Headers/BlogHeader';

import Categories from '@/components/Categories';
import JoinOurTeam from '@/components/JoinOurTeam';
import LayoutWrapper from '@/components/LayoutWrapper';
import Posts from '@/components/Posts/Posts';
import posts from '@/constants/data/posts.json';
import { IPage } from '@/types';

const Blog: FC<IPage> = ({ params: { locale } }) => {
  const t = useTranslations();

  return (
    <div>
      <BlogHeader />
      <LayoutWrapper>
        <Posts posts={posts} postsTitle={t('Blog.subtitle')} />
        <Categories
          locale={locale}
          categoriesTitle={t('Blog.categoriesTitle')}
          titleAlign='left'
        />
      </LayoutWrapper>
      <JoinOurTeam />
    </div>
  );
};

export default Blog;
