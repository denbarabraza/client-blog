'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from 'components-client-blog';

import posts from '@/constants/data/posts.json';
import { findAuthorById } from '@/utils/findAuthorById';

import styles from './styles.module.scss';

const { title, authorId, createdAt, id, image, preview } = posts[2];

const FeaturedBlogPost = () => {
  const t = useTranslations();

  const { name } = useMemo(() => findAuthorById(Number(id)), [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <p className={styles.info}>
        {t('BlogHeader.author')} <Link href={`/author/${authorId}`}>{name}</Link> |{' '}
        {createdAt}
      </p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.preview}>{preview}</p>
      <Link href={`/blogPost/${id}`}>
        <Button title={t('BlogHeader.button')} data-cy='featuredPost-button' isValid />
      </Link>
    </div>
  );
};

export default FeaturedBlogPost;
