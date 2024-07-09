import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--content-bg);
  grid-area: content-area;
  padding: 3.75rem 2.5rem 2.5rem;
`;

export const Grid = styled.div<{ maxWidth?: string }>`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${({ maxWidth }) => maxWidth ?? "20rem"}, 1fr)
  );
`;
