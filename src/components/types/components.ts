import { ICONOGRAPHY_COMPONENTS_MAP } from "../base/Iconography/constants";
import { Organization } from "./entities";

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
