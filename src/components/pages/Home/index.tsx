import styled from "styled-components";
import type { Article, MastheadProps, Repository, Skill } from "../../types";
import Content from "../../features/Content";
import { Masthead } from "../../features/Masthead";

const Main = styled.main`
  display: grid;
  grid-template-areas: "masthead-area content-area";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
`;

type HomeProps = {
  content: {
    articles?: Article[];
    repositories?: Repository[];
    skills?: Skill[];
  };
  masthead: MastheadProps;
};

export const Home = (props: HomeProps) => (
  <Main>
    <Masthead {...props.masthead} />
    <Content {...props.content} />
  </Main>
);

export default Home;
