import type { Meta, StoryObj } from "@storybook/react";
import skills from "../../../data/skills.json";
import masthead from "../../../data/user.json";
import { Home } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Pages/Home",
  component: Home,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
    content: {
      articles: [
        {
          href: "https://example.com/article1",
          publicationDate: "2022-01-01",
          title: "Article 1",
        },
        {
          href: "https://example.com/article2",
          publicationDate: "2022-02-01",
          title: "Article 2",
        },
        {
          href: "https://example.com/article3",
          publicationDate: "2022-03-01",
          title: "Article 3",
        },
        {
          href: "https://example.com/article4",
          publicationDate: "2022-04-01",
          title: "Article 4",
        },
        {
          href: "https://example.com/article5",
          publicationDate: "2022-05-01",
          title: "Article 5",
        },
        {
          href: "https://example.com/article6",
          publicationDate: "2022-06-01",
          title: "Article 6",
        },
        {
          href: "https://example.com/article7",
          publicationDate: "2022-07-01",
          title: "Article 7",
        },
        {
          href: "https://example.com/article8",
          publicationDate: "2022-08-01",
          title: "Article 8",
        },
        {
          href: "https://example.com/article9",
          publicationDate: "2022-09-01",
          title: "Article 9",
        },
        {
          href: "https://example.com/article10",
          publicationDate: "2022-10-01",
          title: "Article 10",
        },
      ],
      repositories: [
        {
          deployedUrl: "https://example.com/repo1",
          description: "This is repository 1",
          forks: 10,
          githubUrl: "https://github.com/repo1",
          name: "Repository 1",
          stars: 20,
        },
        {
          deployedUrl: "https://example.com/repo2",
          description: "This is repository 2",
          forks: 5,
          githubUrl: "https://github.com/repo2",
          name: "Repository 2",
          stars: 15,
        },
        {
          deployedUrl: "https://example.com/repo3",
          description: "This is repository 3",
          forks: 8,
          githubUrl: "https://github.com/repo3",
          name: "Repository 3",
          stars: 12,
        },
        {
          deployedUrl: "https://example.com/repo4",
          description: "This is repository 4",
          forks: 3,
          githubUrl: "https://github.com/repo4",
          name: "Repository 4",
          stars: 7,
        },
        {
          deployedUrl: "https://example.com/repo5",
          description: "This is repository 5",
          forks: 15,
          githubUrl: "https://github.com/repo5",
          name: "Repository 5",
          stars: 25,
        },
        {
          deployedUrl: "https://example.com/repo6",
          description: "This is repository 6",
          forks: 2,
          githubUrl: "https://github.com/repo6",
          name: "Repository 6",
          stars: 9,
        },
        {
          deployedUrl: "https://example.com/repo7",
          description: "This is repository 7",
          forks: 6,
          githubUrl: "https://github.com/repo7",
          name: "Repository 7",
          stars: 18,
        },
        {
          deployedUrl: "https://example.com/repo8",
          description: "This is repository 8",
          forks: 12,
          githubUrl: "https://github.com/repo8",
          name: "Repository 8",
          stars: 30,
        },
        {
          deployedUrl: "https://example.com/repo9",
          description: "This is repository 9",
          forks: 4,
          githubUrl: "https://github.com/repo9",
          name: "Repository 9",
          stars: 11,
        },
        {
          deployedUrl: "https://example.com/repo10",
          description: "This is repository 10",
          forks: 9,
          githubUrl: "https://github.com/repo10",
          name: "Repository 10",
          stars: 22,
        },
      ],
      skills,
    },
    masthead,
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
