import { PropsWithChildren, CSSProperties } from "react";
import { TYPOGRAPHY_COMPONENTS_MAP } from "./constants";

type TypographyProps = {
  style?: CSSProperties;
  variant: keyof typeof TYPOGRAPHY_COMPONENTS_MAP;
};

export const Typography = ({
  variant,
  ...rest
}: PropsWithChildren<TypographyProps>) => {
  const TypographyComponent = TYPOGRAPHY_COMPONENTS_MAP[variant];
  return <TypographyComponent {...rest} />;
};

export default Typography;
