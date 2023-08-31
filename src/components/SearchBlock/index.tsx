import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

import tags from '@/constants/data/tags.json';

import CategoriesList from './CategoriesList';
import { ISearchBlock } from './interface';
import TagsSearch from './TagsSearch';

import styles from './styles.module.scss';

const SearchBlock: FC<ISearchBlock> = ({
  currentCategory,
  handleTag,
  locale,
  tag: currentTag,
}) => {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <TagsSearch handleTag={handleTag} />
      <CategoriesList locale={locale} categoriesTitle={currentCategory} />
      <h3 className={styles.title}>{t('Category.tagsTitle')}</h3>
      <div className={styles.tagWrapper} data-cy='tagBlock'>
        {tags.map(tag => (
          <div
            className={`${styles.tag} ${tag === currentTag && styles.selected}`}
            onClick={handleTag(tag)}
            key={tag}
            data-cy='tag'
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBlock;
