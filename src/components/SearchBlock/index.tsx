import React, { FC, memo, useCallback } from 'react';
import { useTranslations } from 'next-intl';

import tags from '@/constants/data/tags.json';

import CategoriesList from './CategoriesList';
import { ISearchBlock } from './interface';
import TagsSearch from './TagsSearch';

import styles from './styles.module.scss';

const SearchBlock: FC<ISearchBlock> = memo(
  ({ currentCategory, handleTag, locale, tags: currentTags }) => {
    const t = useTranslations();

    const handleTagClick = useCallback(
      (tag: string) => () => {
        handleTag(tag);
      },
      [handleTag],
    );

    return (
      <div className={styles.wrapper}>
        <TagsSearch handleTag={handleTag} />
        <CategoriesList locale={locale} categoriesTitle={currentCategory} />
        <h3 className={styles.title}>{t('Category.tagsTitle')}</h3>
        <div className={styles.tagWrapper} data-cy='tagBlock'>
          {tags.map(tag => (
            <div
              className={`${styles.tag} ${currentTags.includes(tag) && styles.selected}`}
              onClick={handleTagClick(tag)}
              key={tag}
              data-cy='tag'
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    );
  },
);

export default SearchBlock;
