import type { IconographyProps } from "../../types";
import { ICONOGRAPHY_COMPONENTS_MAP } from "./constants";

export const Iconography = (props: IconographyProps) => {
  const {
    variant,
    fill = "var(--general-text)",
    height = 24,
    width = 24,
    ...rest
  } = props;
  const IconographyComponent = ICONOGRAPHY_COMPONENTS_MAP[variant];
  return (
    <IconographyComponent fill={fill} height={height} width={width} {...rest} />
  );
};

export default Iconography;
