import Typography from "../Typography";
import FlexibleCardBase from "./FlexibleCardBase";

export type SkillCardProps = {
  src?: string;
  title: string;
};

export const SkillCard = ({
  src = "https://via.placeholder.com/150",
  title,
}: SkillCardProps) => {
  return (
    <FlexibleCardBase style={{ textAlign: "center" }}>
      <img loading="lazy" src={src} alt={`Logo for ${title}`} />
      <Typography variant="content">{title}</Typography>
    </FlexibleCardBase>
  );
};

export default SkillCard;
