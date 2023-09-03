'use client';

import React, { FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';

import AuthorHeader from '@/components/Headers/AuthorHeader';
import LayoutWrapper from '@/components/LayoutWrapper';
import Posts from '@/components/Posts/Posts';
import VirtualizedList from '@/components/VirtualizedList';
import posts from '@/constants/data/posts.json';
import { VirtualizedListItem } from '@/types';
import { findAuthorById } from '@/utils/findAuthorById';
import { renderVirtualizedList } from '@/utils/renderVirtualizedList';

import { IAuthorPage } from './interface';

const Author: FC<IAuthorPage> = ({ params: { id } }) => {
  const t = useTranslations();

  const { name, image, review, linkedin, twitter, facebook, instagram } = useMemo(
    () => findAuthorById(Number(id)),
    [id],
  );

  const postsByAuthor = useMemo(
    () => posts.filter(({ authorId }) => authorId === Number(id)),
    [id],
  );

  const dataAuthorPage: VirtualizedListItem[] = [
    {
      id: 'authorHeader',
      render: () => (
        <AuthorHeader
          name={name}
          image={image}
          review={review}
          linkedin={linkedin}
          twitter={twitter}
          facebook={facebook}
          instagram={instagram}
        />
      ),
    },
    {
      id: 'post',
      render: () => (
        <LayoutWrapper>
          <Posts posts={postsByAuthor} postsTitle={t('Author.title')} />
        </LayoutWrapper>
      ),
    },
  ];

  return (
    <VirtualizedList
      data={dataAuthorPage}
      renderItem={renderVirtualizedList}
      defaultItemHeight={250}
    />
  );
};

export default Author;
