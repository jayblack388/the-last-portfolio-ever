import type { Article, Repository, Skill } from "../../types";
import Card from "../../base/Cards";
import Typography from "../../base/Typography";
import { Grid, Section } from "./styled-components";

type ContentProps = {
  articles?: Article[];
  repositories?: Repository[];
  skills?: Skill[];
};

export const Content = ({
  articles = [],
  repositories = [],
  skills = [],
}: ContentProps) => (
  <Section>
    <Typography variant="h2">My Projects</Typography>
    <Typography variant="content">
      Some GitHub repositories that I can share
    </Typography>
    <Grid>
      {repositories.slice(0, 6).map((repository) => (
        <Card
          variant="repo"
          githubUserName="jayblack388"
          repository={repository}
        />
      ))}
    </Grid>
    <Typography variant="h2">My Interests</Typography>
    <Typography variant="content">
      Some technologies I've worked with
    </Typography>
    <Grid maxWidth="15rem">
      {skills.slice(0, 6).map((skill) => (
        <Card variant="skill" {...skill} />
      ))}
    </Grid>
    {!!articles.length && (
      <>
        <Typography variant="h2">My Thoughts</Typography>
        <Typography variant="content">Some posts I've written</Typography>
        <Grid>
          {articles.slice(0, 6).map((article) => (
            <Card variant="article" {...article} />
          ))}
        </Grid>
      </>
    )}
  </Section>
);

export default Content;
