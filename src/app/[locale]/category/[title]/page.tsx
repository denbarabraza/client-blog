'use client';

import React, { FC, Fragment, useCallback, useMemo, useState } from 'react';

import CategoryHeader from '@/components/Headers/CategoryHeader';
import LayoutWrapper from '@/components/LayoutWrapper';
import Posts from '@/components/Posts/Posts';
import SearchBlock from '@/components/SearchBlock';
import categories from '@/constants/data/categories.json';
import posts from '@/constants/data/posts.json';
import { useCustomInfiniteScroll } from '@/hooks/useCustomInfinityScroll';

import { ICategoryPage } from './interface';

import styles from './styles.module.scss';

const Category: FC<ICategoryPage> = ({ params: { title, locale } }) => {
  const [tag, setTag] = useState<string>('');

  const currentCategory = useMemo(
    () => categories.find(category => category.title.toLocaleLowerCase() === title)!,
    [title],
  );

  const postsByCategory = useMemo(
    () => posts.filter(({ category }) => category === title),
    [title],
  );

  const handleTag = useCallback(
    (tag: string) => () => {
      setTag(tag);
    },
    [tag],
  );

  const postsByCloudTag = postsByCategory.filter(({ tags }) => tags.includes(tag));
  const postsByTag = postsByCloudTag.length;
  const postsByCategoryAndCloudTag = tag && !postsByTag ? [] : postsByCategory;

  const componentsCategory = [
    <CategoryHeader locale={locale} category={currentCategory} key={0} />,
    <LayoutWrapper key={1}>
      <div className={styles.content}>
        <div className={styles.posts}>
          <Posts
            posts={tag && postsByTag ? postsByCloudTag : postsByCategoryAndCloudTag}
            postsTitle=''
          />
        </div>
        <SearchBlock
          locale={locale}
          currentCategory={currentCategory.title}
          tag={tag}
          handleTag={handleTag}
        />
      </div>
    </LayoutWrapper>,
  ];

  const visibleComponents = useCustomInfiniteScroll(componentsCategory);

  return (
    <div className={styles.wrapper}>
      {visibleComponents?.map(component => (
        <Fragment key={component.toString()}>{component}</Fragment>
      ))}
    </div>
  );
};

export default Category;
