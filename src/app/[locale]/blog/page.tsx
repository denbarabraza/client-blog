'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import BlogHeader from 'components/Headers/BlogHeader';

import Categories from '@/components/Categories';
import JoinOurTeam from '@/components/JoinOurTeam';
import LayoutWrapper from '@/components/LayoutWrapper';
import Posts from '@/components/Posts/Posts';
import VirtualizedList from '@/components/VirtualizedList';
import posts from '@/constants/data/posts.json';
import { IPage, VirtualizedListItem } from '@/types';
import { renderVirtualizedList } from '@/utils/renderVirtualizedList';

const Blog: FC<IPage> = ({ params: { locale } }) => {
  const t = useTranslations();

  const dataBlogPage: VirtualizedListItem[] = [
    { id: 'blogHeader', render: () => <BlogHeader /> },
    {
      id: 'posts',
      render: () => <Posts posts={posts} postsTitle={t('Blog.subtitle')} />,
    },
    {
      id: 'categories',
      render: () => (
        <Categories
          locale={locale}
          categoriesTitle={t('Blog.categoriesTitle')}
          titleAlign='left'
        />
      ),
    },
    { id: 'joinOurTeam', render: () => <JoinOurTeam /> },
  ];

  return (
    <VirtualizedList
      data={dataBlogPage}
      renderItem={renderVirtualizedList}
      defaultItemHeight={250}
    />
  );
};

export default Blog;
