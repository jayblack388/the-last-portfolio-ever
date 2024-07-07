import type { ArticleCardProps } from "./ArticleCard";
import type { RepositoryCardProps } from "./RepositoryCard";
import type { SkillCardProps } from "./SkillCard";
import { CARD_COMPONENTS_MAP } from "./constants";

type PossibleCardProps =
  | ArticleCardProps
  | RepositoryCardProps
  | SkillCardProps;

type CardProps = {
  variant: keyof typeof CARD_COMPONENTS_MAP;
} & PossibleCardProps;

export const Card = ({ variant, ...cardProps }: CardProps) => {
  const CardComponent = CARD_COMPONENTS_MAP[variant];
  return <CardComponent {...cardProps} />;
};

export default Card;
