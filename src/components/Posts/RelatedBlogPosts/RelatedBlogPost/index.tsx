'use client';

import React, { FC, memo, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { PATH } from '@/constants/path';
import { findAuthorById } from '@/utils/findAuthorById';

import { IRelatedBlogPost } from './types';

import styles from './styles.module.scss';

const RelatedBlogPost: FC<IRelatedBlogPost> = memo(
  ({ blogPost: { authorId, createdAt, image, title, preview, id } }) => {
    const t = useTranslations();

    const { AUTHOR, BLOGPOST } = PATH;

    const { name } = useMemo(() => findAuthorById(Number(authorId)), [authorId]);

    return (
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
        <p className={styles.info} data-testid='blopPostInfo'>
          {t('BlogHeader.author')} <Link href={`${AUTHOR}/${authorId}`}>{name}</Link> |{' '}
          {createdAt}
        </p>
        <Link className={styles.title} href={`${BLOGPOST}/${id}`}>
          {title}
        </Link>
        <p className={styles.preview}>{preview}</p>
      </div>
    );
  },
);

export default RelatedBlogPost;
