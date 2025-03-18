import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { THEME } from "../../shared/theme";
import Display14 from "./Display14";

const meta = {
  component: Display14,
  decorators: [
    (Story) => (
      <ThemeProvider theme={THEME}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Display14>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Content",
  },
};
