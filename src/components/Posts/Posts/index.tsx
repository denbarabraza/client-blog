'use client';

import React, { FC, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

import PostItem from './PostItem';
import { IPosts } from './types';

import styles from './styles.module.scss';

const Posts: FC<IPosts> = ({ postsTitle, posts }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  const t = useTranslations();

  const postsAtPage = 3;

  const currentPosts = posts.slice(
    currentPage * postsAtPage,
    (currentPage + 1) * postsAtPage,
  );

  const handlePreviousPage = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
      ref?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage !== Math.ceil(posts.length / postsAtPage) - 1) {
      setCurrentPage(currentPage + 1);
      ref?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!currentPosts.length) {
    return <p className={styles.message}>{t('Author.message')}</p>;
  }

  return (
    <div className={styles.wrapper} ref={ref}>
      <h2 className={styles.title}>{postsTitle}</h2>
      {currentPosts.map(({ id, title, category, image, preview }) => (
        <PostItem
          key={id}
          id={id}
          title={title}
          category={category}
          image={image}
          preview={preview}
        />
      ))}
      {posts.length > postsAtPage && (
        <div className={styles.pagination}>
          <button
            type='button'
            className={`${styles.button} ${currentPage !== 0 || styles.disabled}`}
            onClick={handlePreviousPage}
          >
            {t('Blog.prev')}
          </button>
          <button
            type='button'
            className={`${styles.button} ${
              currentPage !== Math.ceil(posts.length / postsAtPage) - 1 || styles.disabled
            }`}
            onClick={handleNextPage}
          >
            {t('Blog.next')}
          </button>
        </div>
      )}
    </div>
  );
};

export default Posts;
