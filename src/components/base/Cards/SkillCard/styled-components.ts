import { motion } from "framer-motion";
import styled, { css } from "styled-components";

import { flexCol } from "../../styles";
import { FlexibleCardBase } from "../styled-components";

export const Image = styled.img`
  max-height: 8rem;
`;

const sharedCardStyles = css`
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

export const MotionSkillCard = styled(FlexibleCardBase)`
  ${sharedCardStyles}
  min-width: 12.75rem;
  position: relative;
`;
export const SubSkillCardBase = styled(FlexibleCardBase)`
  ${sharedCardStyles}
  background-color: var(--sub-card-bg);
  min-width: 12.75rem;
  position: absolute;
  z-index: 5;
`;

export const MotionSubSkillCard = motion(SubSkillCardBase);
