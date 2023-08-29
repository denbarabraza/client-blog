'use client';

import React, { FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';

import AuthorHeader from '@/components/Headers/AuthorHeader';
import LayoutWrapper from '@/components/LayoutWrapper';
import Posts from '@/components/Posts/Posts';
import posts from '@/constants/data/posts.json';
import { findAuthorById } from '@/utils/findAuthorById';

import { IAuthorPage } from './types';

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

  return (
    <div>
      <AuthorHeader
        name={name}
        image={image}
        review={review}
        linkedin={linkedin}
        twitter={twitter}
        facebook={facebook}
        instagram={instagram}
      />
      <LayoutWrapper>
        <Posts posts={postsByAuthor} postsTitle={t('Author.title')} />
      </LayoutWrapper>
    </div>
  );
};

export default Author;
