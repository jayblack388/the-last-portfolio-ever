import { motion } from "framer-motion";
import styled from "styled-components";
import { flex } from "../styles";

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

export const StyledFlexibleCardBase = styled.article`
  background: var(--card-bg);
  box-shadow: var(--card-shadow);
  color: var(--general-text);
  padding: 1rem;
  transition: transform ease-in-out 0.2s;
`;

export const FlexibleCardBase = motion(StyledFlexibleCardBase);
