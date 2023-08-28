import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import posts from '@/constants/data/posts.json';

import FeaturedBlogPost from './FeaturedBlogPost';
import PostPreview from './PostPreview';

import styles from './styles.module.scss';

const FeaturedBlogPosts = () => {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>{t('BlogHeader.label')}</h3>
        <FeaturedBlogPost />
      </div>
      <section className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{t('Blog.subtitle')}</h3>
          <Link href='/blog'>{t('Home.viewAllPosts')}</Link>
        </div>
        <div className={styles.preview}>
          {posts.slice(0, 4).map(post => (
            <PostPreview key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedBlogPosts;
