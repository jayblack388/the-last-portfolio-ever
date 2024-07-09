import Iconography from "../../base/Iconography";
import { IconographyVariant } from "../../base/Iconography/types";
import Typography from "../../base/Typography";
import { BadgeWrapper } from "./styled-components";

type BadgeProps = {
  href?: string;
  iconVariant: IconographyVariant;
  label: string;
};

export const Badge = ({ href, iconVariant, label }: BadgeProps) => {
  return (
    <BadgeWrapper as={href ? "a" : "div"} href={href}>
      <Iconography variant={iconVariant} />
      <Typography variant="masthead">{label}</Typography>
    </BadgeWrapper>
  );
};

export default Badge;
