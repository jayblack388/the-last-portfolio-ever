import styled, { css } from "styled-components";

const transitionStyles = css`
  transition-delay: 0ms;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
`;

type ThemeProps = {
  $theme: "light" | "dark";
};

export const Container = styled.button<ThemeProps>`
  background-color: ${({ $theme }) =>
    $theme === "dark" ? "var(--black-2)" : "var(--white-2)"};
  border-radius: 2.5rem;
  box-shadow: var(--elevation-outer-3);
  cursor: pointer;
  height: 2.25rem;
  margin: 0 0 1rem;
  padding: 0.25rem 0.125rem;
  position: relative;
  ${transitionStyles}
  transition-property: background-color, border-color, box-shadow;
  width: 5.5rem;
`;

export const Cover = styled.span<ThemeProps>`
  align-items: center;
  aspect-ratio: 1/1;
  background-color: ${({ $theme }) =>
    $theme === "dark" ? "var(--white-2)" : "var(--black-2)"};
  border-radius: 50%;
  bottom: 0.125rem;
  display: flex;
  justify-content: center;
  position: absolute;
  ${transitionStyles}
  transition-property: box-shadow, transform;
  transform: translateX(
    ${({ $theme }) => ($theme === "light" ? "0" : "3.25rem")}
  );
  width: 1.75rem;
  &:is(:hover, :active) {
    box-shadow: 0 0 3px 5px var(--primary);
  }
`;
