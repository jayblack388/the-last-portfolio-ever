import { type IconProps } from "./types";

import { Commits } from "./Commits";
import { Location } from "./Location";
import { Mail } from "./Mail";
import { Moon } from "./Moon";
import { Octocat } from "./Octocat";
import { People } from "./People";
import { Star } from "./Star";
import { Sun } from "./Sun";
import { World } from "./World";

export const ICONOGRAPHY_COMPONENTS_MAP = {
  commits: Commits,
  location: Location,
  mail: Mail,
  moon: Moon,
  octocat: Octocat,
  people: People,
  star: Star,
  sun: Sun,
  world: World,
};

type IconographyProps = {
  variant: keyof typeof ICONOGRAPHY_COMPONENTS_MAP;
} & IconProps;

export const Iconography = ({ variant, ...rest }: IconographyProps) => {
  const IconographyComponent = ICONOGRAPHY_COMPONENTS_MAP[variant];
  return <IconographyComponent {...rest} />;
};

export default Iconography;
