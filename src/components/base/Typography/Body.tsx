import styled, { css } from "styled-components";

const sharedStyles = css`
  font-family: "BioRhyme Variable", serif;
`;

export const MastheadText = styled.p`
  ${sharedStyles}
  font-size: 0.875rem;
`;
export const ContentText = styled.p`
  ${sharedStyles}
  font-size: 1rem;
`;
export const SmallText = styled.p`
  ${sharedStyles}
  font-size: 0.75rem;
`;
