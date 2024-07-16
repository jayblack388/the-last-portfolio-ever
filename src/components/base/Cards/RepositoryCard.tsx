import type { RepositoryCardProps } from "../../types";
import Typography from "../Typography";
import {
  CardFooter,
  CardHeader,
  CardStat,
  FlexibleCardBase,
} from "./styled-components";
import Iconography from "../Iconography";
import { CARD_VARIANTS } from "./constants";

const iconProps = { fill: "var(--general-text)", height: 14, width: 14 };

export const RepositoryCard = ({
  deployedUrl,
  description,
  forks,
  githubUrl,
  githubUserName,
  name,
  stars,
}: RepositoryCardProps) => {
  return (
    <FlexibleCardBase whileHover="hover" variants={CARD_VARIANTS}>
      <CardHeader>
        <a href={githubUrl}>
          <Typography variant="content">{githubUserName}/</Typography>
          <Typography variant="content" style={{ fontWeight: "bold" }}>
            {name}
          </Typography>
        </a>
      </CardHeader>
      {description && <Typography variant="content">{description}</Typography>}
      <CardFooter>
        {!!stars && (
          <CardStat>
            <Iconography variant="star" {...iconProps} />
            <Typography variant="small">{stars}</Typography>
          </CardStat>
        )}
        {!!forks && (
          <CardStat>
            <Iconography variant="commits" {...iconProps} />
            <Typography variant="small">{forks}</Typography>
          </CardStat>
        )}
        <a href={deployedUrl}>
          <Typography variant="small">Visit the deployed site</Typography>
        </a>
      </CardFooter>
    </FlexibleCardBase>
  );
};

export default RepositoryCard;
