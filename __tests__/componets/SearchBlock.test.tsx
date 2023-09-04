import React from 'react';
import { usePathname } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import SearchBlock from '@/components/SearchBlock';
import { ISearchBlock } from '@/components/SearchBlock/interface';
import { LocaleValueEnum } from '@/constants/enums';
import messagesEn from '@/messages/en.json';
import messagesRu from '@/messages/ru.json';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation');
describe('SearchBlock', () => {
  const mockHandleChooseTag = jest.fn();
  const searchBlockProps: ISearchBlock = {
    locale: LocaleValueEnum.En,
    currentCategory: 'business',
    tags: ['business'],
    handleTag: (tag: string) => () => mockHandleChooseTag(),
  };

  (usePathname as jest.Mock).mockImplementation(() => 'en');
  it('renders a SearchBlock with the given data in english and chooses a specific tag', () => {
    render(
      <NextIntlClientProvider locale={LocaleValueEnum.En} messages={messagesEn}>
        <SearchBlock {...searchBlockProps} />
      </NextIntlClientProvider>,
    );

    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('All tags')).toBeInTheDocument();
  });

  (usePathname as jest.Mock).mockImplementation(() => 'ru');
  it('renders a SearchBlock with the given data in russian and chooses a specific tag', () => {
    render(
      <NextIntlClientProvider locale={LocaleValueEnum.Ru} messages={messagesRu}>
        <SearchBlock {...searchBlockProps} />
      </NextIntlClientProvider>,
    );

    expect(screen.getByText('Категории')).toBeInTheDocument();
    expect(screen.getByText('Все теги')).toBeInTheDocument();
  });
});
