'use client';

import React, { FC, useCallback, useMemo, useState } from 'react';

import CategoryHeader from '@/components/Headers/CategoryHeader';
import LayoutWrapper from '@/components/LayoutWrapper';
import Posts from '@/components/Posts/Posts';
import SearchBlock from '@/components/SearchBlock';
import categories from '@/constants/data/categories.json';
import posts from '@/constants/data/posts.json';

import { ICategoryPage } from './interface';

import styles from './styles.module.scss';

const Category: FC<ICategoryPage> = ({ params: { title, locale } }) => {
  const [tags, setTags] = useState<string[]>([]);

  const currentCategory = useMemo(
    () => categories.find(category => category.title.toLocaleLowerCase() === title)!,
    [title],
  );

  const postsByCategory = useMemo(
    () => posts.filter(post => post.category === title),
    [title],
  );

  const filteredPosts = useMemo(() => {
    if (tags.length === 0) {
      return postsByCategory;
    }

    return postsByCategory.filter(
      post => post.category === title && post.tags.some(tag => tags.includes(tag)),
    );
  }, [tags, postsByCategory, title]);

  const handleTag = useCallback((tag: string) => {
    setTags(prevTags => {
      const isTagSelected = prevTags.includes(tag);

      if (isTagSelected) {
        return prevTags.filter(prevTag => prevTag !== tag);
      }

      return [...prevTags, tag];
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <CategoryHeader locale={locale} category={currentCategory} key={0} />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.posts}>
            <Posts posts={filteredPosts} postsTitle={currentCategory.title} />
          </div>
          <SearchBlock
            locale={locale}
            currentCategory={currentCategory.title}
            tags={tags}
            handleTag={handleTag}
          />
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default Category;
