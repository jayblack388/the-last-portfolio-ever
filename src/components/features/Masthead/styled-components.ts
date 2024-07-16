import styled from "styled-components";

import { flex } from "../../base/styles";
import Typography from "../../base/Typography";

export const Actions = styled.div<{ $align?: string; $justify?: string }>`
  ${flex}
  align-items: ${({ $align }) => $align || "center"};
  gap: 1.25rem;
  justify-content: ${({ $justify }) => $justify || "unset"};
`;

export const Aside = styled.aside`
  background-color: var(--masthead-bg);
  border-right: 3px solid var(--primary);
  grid-area: masthead-area;
  min-width: 18.125rem;
  padding: 2.5rem;
  img:has(+ img) {
    margin-right: 0.5rem;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 9.375rem;
`;

export const BadgeWrapper = styled.div`
  ${flex}
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  p {
    margin: 0;
  }
`;

export const Bio = styled(Typography)`
  border: 1px solid var(--general-text);
  border-left-width: 0;
  border-right-width: 0;
  margin-top: 0;
  padding: 1rem 0;
`;

export const Button = styled.a<{ $primary?: boolean }>`
  background: ${({ $primary }) =>
    $primary ? "var(--primary)" : "var(--secondary)"};
  border: 0;
  border-radius: 1rem;
  color: var(--general-text);
  cursor: pointer;
  display: block;
  padding: 0.25rem 0.75rem;
  text-decoration: none;
  -webkit-text-fill-color: var(--general-text);
  p {
    margin: 0;
    text-align: center;
  }
`;
