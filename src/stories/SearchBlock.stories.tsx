import SearchBlock from '@/components/SearchBlock';
import { LocaleValueEnum } from '@/constants/enums';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchBlock> = {
  title: 'ReactComponentLibrary/SearchBlock',
  component: SearchBlock,
};

export default meta;

type Story = StoryObj<typeof SearchBlock>;

export const SearchBlockEn: Story = {
  args: {
    currentCategory: 'business',
    tag: 'business',
    handleTag: (tag: string) => () => {},
    locale: LocaleValueEnum.En,
  },
};

export const SearchBlockRus: Story = {
  args: {
    currentCategory: 'бизнес',
    tag: 'бизнес',
    handleTag: (tag: string) => () => {},
    locale: LocaleValueEnum.Ru,
  },
};
