'use client';

import React, { FC, memo, useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { PATH } from '@/constants/path';
import { findAuthorById } from '@/utils/findAuthorById';

import { IPostPreview } from './interface';

import styles from './styles.module.scss';

const PostPreview: FC<IPostPreview> = memo(
  ({ post: { createdAt, title, authorId, id } }) => {
    const { AUTHOR, BLOGPOST } = PATH;
    const t = useTranslations();

    const { name } = useMemo(() => findAuthorById(Number(id)), [id]);

    return (
      <div className={styles.wrapper}>
        <p className={styles.info} data-cy='postInfo'>
          {t('BlogHeader.author')}{' '}
          <Link href={`${AUTHOR}/${authorId}`} data-cy='authorId'>
            {name}
          </Link>{' '}
          | {createdAt}
        </p>
        <Link className={styles.title} href={`${BLOGPOST}/${id}`} data-cy='blogPostId'>
          {title}
        </Link>
      </div>
    );
  },
);

export default PostPreview;
