export type Article = {
  href: string;
  publicationDate: string;
  title: string;
};

export type Organization = {
  name: "string";
  src: "string";
};

export type Repository = {
  deployedUrl: string;
  description?: string;
  forks: number;
  githubUrl: string;
  name: string;
  stars: number;
};

export type Skill = {
  href: string;
  name: string;
  src: string;
};
