import styled, { css } from "styled-components";

const sharedStyles = css`
  background: inherit;
  color: inherit;
  font-family: "Courier Prime", monospace;
`;

export const Header1 = styled.h1`
  ${sharedStyles}
  font-size: 2rem;
`;
export const Header2 = styled.h2`
  ${sharedStyles}
  font-size: 1.875rem;
`;
export const Header3 = styled.h3`
  ${sharedStyles}
  font-size: 1.5rem;
`;
