'use client';

import React, { FC, Fragment, useMemo } from 'react';
import { useTranslations } from 'next-intl';

import AuthorHeader from '@/components/Headers/AuthorHeader';
import LayoutWrapper from '@/components/LayoutWrapper';
import Posts from '@/components/Posts/Posts';
import posts from '@/constants/data/posts.json';
import { useCustomInfiniteScroll } from '@/hooks/useCustomInfinityScroll';
import { findAuthorById } from '@/utils/findAuthorById';

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

  const componentsAuthor = [
    <AuthorHeader
      key={0}
      name={name}
      image={image}
      review={review}
      linkedin={linkedin}
      twitter={twitter}
      facebook={facebook}
      instagram={instagram}
    />,
    <LayoutWrapper key={1}>
      <Posts posts={postsByAuthor} postsTitle={t('Author.title')} />
    </LayoutWrapper>,
  ];

  const visibleComponents = useCustomInfiniteScroll(componentsAuthor);

  return visibleComponents?.map(component => (
    <Fragment key={component.toString()}>{component}</Fragment>
  ));
};

export default Author;
