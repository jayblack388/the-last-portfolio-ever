import type { Meta, StoryObj } from "@storybook/react";
import { TYPOGRAPHY_COMPONENTS_MAP } from "./constants";
import { Typography } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Base Components/Typography",
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: TYPOGRAPHY_COMPONENTS_MAP,
  },
  args: {
    children: "Typography component",
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Header1: Story = {
  args: {
    children: "Header 1 Component",
    variant: "h1",
  },
};
export const Header2: Story = {
  args: {
    children: "Header 2 Component",
    variant: "h2",
  },
};
export const Header3: Story = {
  args: {
    children: "Header 3 Component",
    variant: "h3",
  },
};
export const ContentText: Story = {
  args: {
    children: "Content Text Component",
    variant: "content",
  },
};
export const MastheadText: Story = {
  args: {
    children: "Masthead Text Component",
    variant: "masthead",
  },
};
export const SmallText: Story = {
  args: {
    children: "Small Text Component",
    variant: "small",
  },
};
