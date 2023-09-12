'use client';

import React, { FC, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from 'components-client-blog';

import posts from '@/constants/data/posts.json';
import { PATH } from '@/constants/path';
import { findAuthorById } from '@/utils/findAuthorById';

import styles from './styles.module.scss';

const { title, authorId, createdAt, id, image, preview } = posts[5];

const BlogHeader: FC = () => {
  const t = useTranslations();
  const { name } = useMemo(() => findAuthorById(Number(id)), [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <article className={styles.post}>
          <p className={styles.label}>{t('BlogHeader.label')}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.info}>
            {t('BlogHeader.author')}{' '}
            <Link href={`${PATH.AUTHOR}/${authorId}`}>{name}</Link> | {createdAt}
          </p>
          <p className={styles.preview}>{preview}</p>
          <Link href={`${PATH.BLOGPOST}/${id}`}>
            <Button title={t('BlogHeader.button')} isValid />
          </Link>
        </article>
        <div className={styles.image}>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
