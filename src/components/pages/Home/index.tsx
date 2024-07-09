import styled from "styled-components";
import type { MastheadProps } from "../../types";
import { Masthead } from "../../features/Masthead";

const Main = styled.main`
  display: grid;
  grid-template-areas: "masthead-area content-area";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
`;

type HomeProps = {
  masthead: MastheadProps;
};

export const Home = (props: HomeProps) => (
  <Main>
    <Masthead {...props.masthead} />
  </Main>
);

export default Home;
