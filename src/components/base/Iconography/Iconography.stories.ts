import type { Meta, StoryObj } from "@storybook/react";
import { ICONOGRAPHY_COMPONENTS_MAP } from "./constants";
import { Iconography } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Base Components/Iconography",
  component: Iconography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: ICONOGRAPHY_COMPONENTS_MAP,
  },
  args: {
    fill: "black",
    height: 24,
    width: 24,
  },
} satisfies Meta<typeof Iconography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Commits: Story = {
  args: {
    variant: "commits",
  },
};
export const Location: Story = {
  args: {
    variant: "location",
  },
};
export const Mail: Story = {
  args: {
    variant: "mail",
  },
};
export const Moon: Story = {
  args: {
    fill: undefined,
    variant: "moon",
  },
};
export const Octocat: Story = {
  args: {
    variant: "octocat",
  },
};
export const People: Story = {
  args: {
    variant: "people",
  },
};
export const Star: Story = {
  args: {
    variant: "star",
  },
};
export const Sun: Story = {
  args: {
    fill: undefined,
    variant: "sun",
  },
};
export const World: Story = {
  args: {
    variant: "world",
  },
};
