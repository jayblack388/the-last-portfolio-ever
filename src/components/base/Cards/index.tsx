import { Article, Skill } from "../../types";
import type { RepositoryCardProps } from "./RepositoryCard";
import { CARD_COMPONENTS_MAP } from "./constants";

type PossibleCardProps = Article | RepositoryCardProps | Skill;

type CardProps = {
  variant: keyof typeof CARD_COMPONENTS_MAP;
} & PossibleCardProps;

export const Card = ({ variant, ...cardProps }: CardProps) => {
  const CardComponent = CARD_COMPONENTS_MAP[variant];
  return <CardComponent {...cardProps} />;
};

export default Card;
