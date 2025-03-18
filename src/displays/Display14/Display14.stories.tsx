import type { Meta, StoryObj } from '@storybook/react';

import { Display14 } from './Display14';

const meta = {
  component: Display14,
} satisfies Meta<typeof Display14>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Content',
  }
};