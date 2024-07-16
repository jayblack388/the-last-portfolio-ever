import { ArticleCard } from "./ArticleCard";
import { RepositoryCard } from "./RepositoryCard";
import { SkillCard } from "./SkillCard/index";

export const CARD_COMPONENTS_MAP = {
  article: ArticleCard,
  repo: RepositoryCard,
  skill: SkillCard,
};

export const CARD_VARIANTS = {
  hover: {
    scale: 1.02,
    zIndex: 2,
    transition: {
      duration: 0.25,
    },
  },
};
