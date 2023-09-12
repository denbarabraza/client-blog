'use client';

import React, { FC, memo, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import categories from '@/constants/data/categories.json';
import { PATH } from '@/constants/path';
import { findAuthorById } from '@/utils/findAuthorById';

import { IBlogPostItem } from './interfaces';

import styles from './styles.module.scss';

const BlogPostItem: FC<IBlogPostItem> = memo(props => {
  const {
    blogPost: { category, authorId, createdAt, image, text, title: blogPostTitle },
  } = props;

  const { AUTHOR, CATEGORY } = PATH;

  const t = useTranslations();

  const { icon, title: categoryTitle } = useMemo(
    () => categories.find(({ title }) => title.toLocaleLowerCase() === category)!,
    [category],
  );

  const { image: currentAuthorImage, name: currentAuthorName } = useMemo(
    () => findAuthorById(Number(authorId)),
    [authorId],
  );

  return (
    <div className={styles.wrapper}>
      <section className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.author}>
            <div className={styles.authorImage}>
              <Image
                src={currentAuthorImage}
                alt={currentAuthorName}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.info}>
              <Link className={styles.name} href={`${AUTHOR}/${authorId}`}>
                {currentAuthorName}
              </Link>
              <p className={styles.createdAt}>
                {t('BlogPostItem.createdAt')}
                {createdAt}
              </p>
              <div className={styles.category}>
                <div className={styles.icon}>
                  <Image src={icon} alt={category} fill style={{ objectFit: 'cover' }} />
                </div>
                <Link className={styles.categoryTitle} href={`${CATEGORY}/${category}`}>
                  {categoryTitle}
                </Link>
              </div>
            </div>
          </div>
          <h3 className={styles.title}>{blogPostTitle}</h3>
        </div>
      </section>
      <div className={styles.blogPostImage}>
        <Image src={image} alt={image} fill style={{ objectFit: 'cover' }} />
      </div>
      <article className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
});

export default BlogPostItem;
