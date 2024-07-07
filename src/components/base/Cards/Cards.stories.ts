import type { Meta, StoryObj } from "@storybook/react";
import { CARD_COMPONENTS_MAP } from "./constants";
import Card from "./index.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Base Components/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    variant: CARD_COMPONENTS_MAP,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ArticleCard: Story = {
  args: {
    href: "#",
    publicationDate: "April 2020",
    title: "Some serious hipster ipsum content should go here.",
    variant: "article",
  },
};
export const RepositoryCard: Story = {
  args: {
    githubUserName: "jayblack388",
    repository: {
      deployedUrl: "",
      description: "Some serious hipster ipsum content should go here.",
      forks: 10,
      githubUrl: "",
      name: "the-last-portfolio-ever",
      stars: 40,
    },
    variant: "repo",
  },
};
export const SkillCard: Story = {
  args: {
    title: "Some serious hipster ipsum content should go here.",
    src: "https://via.placeholder.com/150",
    variant: "skill",
  },
};
