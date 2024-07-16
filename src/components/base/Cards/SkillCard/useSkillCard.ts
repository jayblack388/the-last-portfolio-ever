import { useRef, useState } from "react";
import { Skill } from "../../../types";

export const useCardRef = ({ subSkills = [] }: Skill) => {
  const ref = useRef<HTMLElement | null>(null);
  const height = ref?.current ? ref?.current?.offsetHeight : 0;
  const width = ref?.current ? ref?.current?.offsetWidth : 0;
  const radius = width ? width / 2 : 0;
  const angleStep = (2 * Math.PI) / subSkills.length;
  const rotationAngle =
    subSkills.length % 2 === 0 ? -Math.PI / subSkills.length : 0;
  return { angleStep, height, radius, ref, rotationAngle, width };
};

export const useSkillCard = (skill: Skill) => {
  const [isHovered, setIsHovered] = useState(false);

  return { isHovered, onMouseEnter, onMouseLeave, ...useCardRef(skill) };
  function onMouseEnter() {
    setIsHovered(true);
  }
  function onMouseLeave() {
    setIsHovered(false);
  }
};
