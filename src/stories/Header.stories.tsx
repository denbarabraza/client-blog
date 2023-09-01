import Header from '@/components/Headers/Header';
import { LocaleValueEnum } from '@/constants/enums';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'ReactComponentLibrary/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const HeaderEn: Story = {
  args: {
    locale: LocaleValueEnum.En,
  },
};

export const HeaderRus: Story = {
  args: {
    locale: LocaleValueEnum.Ru,
  },
};
