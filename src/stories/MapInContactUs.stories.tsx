import MapInContactUs from '@/components/MapInContactUs';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MapInContactUs> = {
  title: 'ReactComponentLibrary/MapInContactUs',
  component: MapInContactUs,
};

export default meta;

type Story = StoryObj<typeof MapInContactUs>;

export const MapContactUs: Story = {
  args: {},
};
