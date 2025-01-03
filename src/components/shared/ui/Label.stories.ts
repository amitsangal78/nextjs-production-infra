import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Label, { Variant } from './Label';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Setup/boilerplate',
  component: Label,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: Variant.Primary,
    children: 'Label',
  },
};

export const Secondary: Story = {
  args: {
    variant: Variant.Secondary,
    children: 'Label',
  },
};

export const Success: Story = {
  args: {
    variant: Variant.Success,
    children: 'Label',
  },
};

export const Error: Story = {
  args: {
    variant: Variant.Error,
    children: 'Label',
  },
};
