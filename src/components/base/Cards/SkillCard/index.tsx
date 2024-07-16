import { AnimatePresence, delay } from "framer-motion";
import { Skill } from "../../../types";
import Typography from "../../Typography";
import {
  Image,
  MotionSkillCard,
  MotionSubSkillCard,
} from "./styled-components";
import { useSkillCard } from "./useSkillCard";
import { CARD_VARIANTS } from "../constants";
import { useState } from "react";

type SubSkillVariantCustomProps = {
  angleStep: number;
  height: number;
  index: number;
  radius: number;
  rotationAngle: number;
  width: number;
};

const subSkillVariants = {
  hide: {
    opacity: 0,
    x: 0,
    y: 0,
  },
  show: (custom: SubSkillVariantCustomProps) => {
    const angle = custom.angleStep * custom.index + custom.rotationAngle;
    const x = custom.rotationAngle ? custom.radius * Math.cos(angle) : 0;
    const y = custom.rotationAngle ? custom.radius * Math.sin(angle) : 0;
    return {
      opacity: 1,
      x,
      y,
      transition: {
        duration: 0.25,
        delay: (custom.index ^ 3) * 0.075,
      },
    };
  },
};

const CardInner = ({ name, src }: Partial<Skill>) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Image
        loading="lazy"
        src={src}
        alt={`Logo for ${name}`}
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0 }}
      />
      {loaded && <Typography variant="content">{name}</Typography>}
    </>
  );
};

const SubSkillCard = ({
  angleStep,
  height,
  index,
  name,
  radius,
  rotationAngle,
  src,
  width,
}: Skill & SubSkillVariantCustomProps) => (
  <MotionSubSkillCard
    variants={subSkillVariants}
    custom={{ angleStep, height, index, radius, rotationAngle, width }}
    style={{ scale: 0.65 }}
    initial="hide"
    animate="show"
    exit="hide"
  >
    <CardInner name={name} src={src} />
  </MotionSubSkillCard>
);

export const SkillCard = (skill: Skill) => {
  const { name, src, subSkills = [] } = skill;
  const {
    angleStep,
    height,
    isHovered,
    onMouseEnter,
    onMouseLeave,
    radius,
    rotationAngle,
    ref,
    width,
  } = useSkillCard(skill);
  return (
    <MotionSkillCard
      ref={ref}
      variants={CARD_VARIANTS}
      onHoverStart={onMouseEnter}
      onHoverEnd={onMouseLeave}
      whileHover="hover"
    >
      <AnimatePresence initial={false}>
        {isHovered &&
          subSkills.map((skill, i) => (
            <SubSkillCard
              key={skill.name}
              angleStep={angleStep}
              height={height}
              index={i}
              radius={radius}
              rotationAngle={rotationAngle}
              width={width}
              {...skill}
            />
          ))}
      </AnimatePresence>
      <CardInner name={name} src={src} />
    </MotionSkillCard>
  );
};

export default SkillCard;
