import { CardMetadataUnion } from "../../types";
import { ArticleCard } from "./ArticleCard";
import { RepositoryCard } from "./RepositoryCard";
import { SkillCard } from "./SkillCard/index";

export const Card = (props: CardMetadataUnion) => {
  if (props.variant === "article") {
    return <ArticleCard {...props} />;
  } else if (props.variant === "repo") {
    return <RepositoryCard {...props} />;
  } else if (props.variant === "skill") {
    return <SkillCard {...props} />;
  } else return <>Card type not found</>;
};

export default Card;
