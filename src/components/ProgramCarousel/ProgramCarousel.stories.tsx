import type { Meta, StoryObj } from "@storybook/react";
import ProgramCarousel from "./ProgramCarousel";

const meta: Meta<typeof ProgramCarousel> = {
  title: "Components/ProgramCarousel",
  component: ProgramCarousel,
};
export default meta;

type Story = StoryObj<typeof ProgramCarousel>;

export const Default: Story = {
  args: {
    onItemClick: (index: number) => {
      alert(`Clicked item index: ${index}`);
    },
  },
};
