import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

import posts from '@/constants/data/posts.json';

import RelatedBlogPost from './RelatedBlogPost';
import { IRelatedBlogPosts } from './types';

import styles from './styles.module.scss';

const RelatedBlogPosts: FC<IRelatedBlogPosts> = ({ blogPostId, category }) => {
  const relatedBlogPosts = posts
    .filter(blogPost => blogPost.id !== blogPostId && blogPost.category === category)
    .slice(0, 3);

  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{t('RelatedBlogPosts.title')}</h4>
      {relatedBlogPosts.length ? (
        <div className={styles.posts}>
          {relatedBlogPosts.map(blogPost => (
            <RelatedBlogPost key={blogPost.id} blogPost={blogPost} />
          ))}
        </div>
      ) : (
        <p className={styles.message}>{t('RelatedBlogPosts.message')}</p>
      )}
    </div>
  );
};

export default RelatedBlogPosts;
