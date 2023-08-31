import Footer from '@/components/Footer';
import { LocaleValueEnum } from '@/constants/enums';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Footer> = {
  title: 'ReactComponentLibrary/Footer',
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const FooterEn: Story = {
  args: {
    locale: LocaleValueEnum.En,
  },
};
