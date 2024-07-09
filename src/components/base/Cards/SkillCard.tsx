import { Skill } from "../../types";
import Typography from "../Typography";
import { SkillCardBase, Image } from "./styled-components";

export const SkillCard = ({
  href,
  name,
  src = "https://via.placeholder.com/150",
}: Skill) => {
  return (
    <SkillCardBase>
      <Image loading="lazy" src={src} alt={`Logo for ${name}`} />
      <Typography variant="content">{name}</Typography>
    </SkillCardBase>
  );
};

export default SkillCard;
