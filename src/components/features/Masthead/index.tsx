import type { MastheadProps } from "../../types";
import Typography from "../../base/Typography";
import { Aside, Avatar, Actions, Bio, Button } from "./styled-components";
import Badge from "./Badge";

export const Masthead = ({
  company,
  description,
  email,
  githubUsername,
  location,
  name,
  organizations = [],
  websiteUrl,
}: MastheadProps) => (
  <Aside>
    <Avatar src="/avatar.png" />
    <Typography variant="h1">{name}</Typography>
    <Actions>
      <Badge
        href={`https://github.com/${githubUsername}`}
        iconVariant="octocat"
        label={githubUsername}
      />
    </Actions>
    <Bio variant="masthead">{description}</Bio>
    <Badge iconVariant="people" label={company} />
    <Badge iconVariant="location" label={location} />
    <Badge href={`mailto:${email}`} iconVariant="mail" label={email} />
    <Badge
      href={websiteUrl}
      iconVariant="world"
      label={websiteUrl.replace("https://", "")}
    />
    <Actions>
      <Button
        href="/John Blackwell Resume.pdf"
        download="John Blackwell Resume"
        primary
      >
        <Typography variant="masthead">Grab my resume</Typography>
      </Button>
      <Button
        href={`mailto:${email}?subject=I heard you were open to work, we should connect!`}
      >
        <Typography variant="masthead">Open to work</Typography>
      </Button>
    </Actions>
    {!!organizations.length && (
      <Typography variant="h3">Organizations</Typography>
    )}
    {organizations.map((org) => (
      <img
        alt={`${org.name} Organization`}
        src={org.src}
        height={35}
        width={35}
      />
    ))}
  </Aside>
);

export default Masthead;
