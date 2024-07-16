import { ICONOGRAPHY_COMPONENTS_MAP } from "../base/Iconography/constants";
import { Article, Organization, Repository, Skill } from "./entities";

export type IconProps = {
  height?: number;
  width?: number;
  fill?: string;
};

export type IconographyVariant = keyof typeof ICONOGRAPHY_COMPONENTS_MAP;

export type IconographyProps = {
  variant: IconographyVariant;
} & IconProps;

export type MastheadProps = {
  company: string;
  description: string;
  email: string;
  githubUsername: string;
  location: string;
  name: string;
  organizations?: Organization[];
  websiteUrl: string;
};

export type CardVariant = "article" | "repo" | "skill";

export type BaseCardProps = {
  variant: CardVariant;
};

export type ArticleCardProps = {
  variant: "article";
} & Article;

export type RepositoryCardProps = {
  variant: "repo";
  githubUserName?: string;
} & Repository;

export type SkillCardProps = {
  variant: "skill";
} & Skill;

export type CardMetadataUnion =
  | ArticleCardProps
  | RepositoryCardProps
  | SkillCardProps;
