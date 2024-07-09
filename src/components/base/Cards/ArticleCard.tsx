import { Article } from "../../types";
import Typography from "../Typography";
import { FlexibleCardBase } from "./styled-components";

export const ArticleCard = ({ publicationDate, title, href }: Article) => {
  return (
    <FlexibleCardBase $hasTransform>
      <a href={href}>
        <Typography variant="content">{title}</Typography>
      </a>
      <Typography variant="small">{publicationDate}</Typography>
    </FlexibleCardBase>
  );
};

export default ArticleCard;
