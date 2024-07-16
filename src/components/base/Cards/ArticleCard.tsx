import { ArticleCardProps } from "../../types";
import Typography from "../Typography";
import { CARD_VARIANTS } from "./constants";
import { FlexibleCardBase } from "./styled-components";

export const ArticleCard = ({
  publicationDate,
  title,
  href,
}: ArticleCardProps) => {
  return (
    <FlexibleCardBase whileHover="hover" variants={CARD_VARIANTS}>
      <a href={href}>
        <Typography variant="content">{title}</Typography>
      </a>
      <Typography variant="small">{publicationDate}</Typography>
    </FlexibleCardBase>
  );
};

export default ArticleCard;
