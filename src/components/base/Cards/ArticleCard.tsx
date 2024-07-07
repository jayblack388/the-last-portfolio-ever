import Typography from "../Typography";
import FlexibleCardBase from "./FlexibleCardBase";

export type ArticleCardProps = {
  href: string;
  publicationDate: string;
  title: string;
};

export const ArticleCard = ({
  publicationDate,
  title,
  href,
}: ArticleCardProps) => {
  return (
    <FlexibleCardBase>
      <a href={href}>
        <Typography variant="content">{title}</Typography>
      </a>
      <Typography variant="small">{publicationDate}</Typography>
    </FlexibleCardBase>
  );
};

export default ArticleCard;
