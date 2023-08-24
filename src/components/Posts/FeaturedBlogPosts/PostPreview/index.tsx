'use client';

import React, { FC, useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { findAuthorById } from '@/utils/findAuthorById';

import { IPostPreview } from './types';

import styles from './styles.module.scss';

const PostPreview: FC<IPostPreview> = ({ post: { createdAt, title, authorId, id } }) => {
  const t = useTranslations();

  const { name } = useMemo(() => findAuthorById(Number(id)), [id]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.info}>
        {t('BlogHeader.author')} <Link href={`/author/${authorId}`}>{name}</Link> |{' '}
        {createdAt}
      </p>
      <Link className={styles.title} href={`/blogPost/${id}`}>
        {title}
      </Link>
    </div>
  );
};

export default PostPreview;
