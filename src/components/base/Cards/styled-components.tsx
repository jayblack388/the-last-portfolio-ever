import styled from "styled-components";
import { flex, flexCol } from "../styles";

export const CardFooter = styled.footer`
  ${flex}
  color: var(--card-text);
`;

export const CardHeader = styled.header`
  a {
    ${flex}
  }
`;

export const CardStat = styled.span`
  ${flex}
  align-items: center;
  gap: 0.125rem;
  margin-inline-end: 0.5rem;
  &:last-of-type {
    margin-inline-end: auto;
  }
`;

export const FlexibleCardBase = styled.article<{ $hasTransform?: boolean }>`
  background: var(--card-bg);
  box-shadow: var(--card-shadow);
  color: var(--general-text);
  padding: 1rem;
  transition: transform ease-in-out 0.2s;
  &:hover {
    transform: ${({ $hasTransform }) =>
      $hasTransform ? "scale(1.02)" : "unset"};
  }
`;

export const SkillCardBase = styled(FlexibleCardBase)`
  ${flexCol}
  align-items: center;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  gap: 0.75rem;
  justify-content: center;
  p {
    margin: 0;
  }
`;

export const Image = styled.img`
  height: 8rem;
`;
