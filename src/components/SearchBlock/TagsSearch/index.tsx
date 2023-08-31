'use client';

import React, { ChangeEvent, FC, memo, useState } from 'react';
import { useTranslations } from 'next-intl';

import tags from '@/constants/data/tags.json';

import { ITagsSearch } from './interface';

import styles from './styles.module.scss';

const TagsSearch: FC<ITagsSearch> = ({ handleTag }) => {
  const [searchTags, setSearchTags] = useState<string[]>([]);
  const [value, setValue] = useState('');

  const t = useTranslations();

  const searchQuery = (enteredValue: string, patternValue: string) => {
    if (enteredValue.length > patternValue.length) {
      return false;
    }

    const startQuery = patternValue.slice(0, enteredValue.length);

    return startQuery.toLocaleLowerCase() === enteredValue.toLocaleLowerCase();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;

    setValue(currentValue);

    if (currentValue) {
      const filteredTags = tags.filter(tag => searchQuery(currentValue, tag));

      setSearchTags(filteredTags);
    } else {
      setSearchTags([]);
    }
  };

  const handleClickTag = (tag: string) => () => {
    setValue(tag);
  };

  const handleSearchTag = (tag: string) => () => {
    handleTag(tag)();
  };

  return (
    <form className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder={t('Category.placeholder')}
        value={value}
        onChange={handleChange}
        data-cy='tagsSearchInput'
      />
      <button
        type='button'
        data-cy='tagsSearchButton'
        className={styles.button}
        onClick={handleSearchTag(value)}
      >
        {t('Category.button')}
      </button>

      {value.length > 0 && (
        <ul className={styles.list}>
          {searchTags.length > 0 ? (
            searchTags.map(tag => (
              <li className={styles.item} onClick={handleClickTag(tag)} key={tag}>
                {tag}
              </li>
            ))
          ) : (
            <li className={styles.item}>{t('Category.message')}</li>
          )}
        </ul>
      )}
    </form>
  );
};

export default memo(TagsSearch);
