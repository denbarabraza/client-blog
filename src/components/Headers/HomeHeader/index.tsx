'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from 'components-client-blog';

import posts from '@/constants/data/posts.json';
import { PATH } from '@/constants/path';
import { findAuthorById } from '@/utils/findAuthorById';

import styles from './styles.module.scss';

const { title, authorId, createdAt, id, image, preview, category } = posts[0];

const HomeHeader = () => {
  const t = useTranslations();
  const { name } = useMemo(() => findAuthorById(Number(id)), [id]);
  const { BLOGPOST, CATEGORY, AUTHOR } = PATH;

  const backgroundStyle = {
    background: `no-repeat  url(${image})`,
    backgroundSize: 'cover',
  };

  return (
    <div className={styles.wrapper} style={backgroundStyle}>
      <div className={styles.header}>
        <h3 className={styles.label}>
          {t('BlogPostItem.createdAt')}
          <Link href={`${CATEGORY}/${category}`}>{category}</Link>
        </h3>
        <Link className={styles.title} href={`${BLOGPOST}/${id}`}>
          {title}
        </Link>
        <p className={styles.info}>
          {t('BlogHeader.author')} <Link href={`${AUTHOR}/${authorId}`}>{name}</Link> |{' '}
          {createdAt}
        </p>
        <p className={styles.preview}>{preview}</p>
        <Link href={`${BLOGPOST}/${id}`}>
          <Button title={t('Home.aboutButton')} isValid />
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
