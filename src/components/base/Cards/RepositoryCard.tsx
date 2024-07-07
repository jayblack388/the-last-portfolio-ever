import styled from "styled-components";
import Typography from "../Typography";
import FlexibleCardBase from "./FlexibleCardBase";
import { flex } from "../styles";
import Iconography from "../Iconography";

type Repository = {
  deployedUrl: string;
  description?: string;
  forks: number;
  githubUrl: string;
  name: string;
  stars: number;
};

export type RepositoryCardProps = {
  repository: Repository;
  githubUserName: string;
};

const CardFooter = styled.footer`
  ${flex}
  color: var(--card-text);
`;

const CardHeader = styled.header`
  a {
    ${flex}
  }
`;

const CardStat = styled.span`
  ${flex}
  align-items: center;
  margin-inline-end: 0.5rem;
  & + span {
    margin-inline-end: auto;
  }
`;

const iconProps = { fill: "var(--card-text)", height: 16, width: 16 };

export const RepositoryCard = ({
  repository: { deployedUrl, description, forks, githubUrl, name, stars },
  githubUserName,
}: RepositoryCardProps) => {
  return (
    <FlexibleCardBase>
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
        <CardStat>
          <Iconography variant="star" {...iconProps} />
          <Typography variant="small">{stars}</Typography>
        </CardStat>
        <CardStat>
          <Iconography variant="commits" {...iconProps} />
          <Typography variant="small">{forks}</Typography>
        </CardStat>
        <a href={deployedUrl}>
          <Typography variant="small">Visit the deployed site</Typography>
        </a>
      </CardFooter>
    </FlexibleCardBase>
  );
};

export default RepositoryCard;
