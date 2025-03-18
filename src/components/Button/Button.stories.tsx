import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { THEME } from "../../shared/theme";
import { Button } from "./Button";
import Display14 from "../../displays/Display14/Display14";

const meta = {
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={THEME}>
        <Display14>
          <Story />
        </Display14>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Button",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};
