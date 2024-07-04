import { PropsWithChildren } from "react";

import { ContentText, MastheadText, SmallText } from "./Body";
import { Header1, Header2, Header3 } from "./Header";

export const TYPOGRAPHY_COMPONENTS_MAP = {
  content: ContentText,
  h1: Header1,
  h2: Header2,
  h3: Header3,
  masthead: MastheadText,
  small: SmallText,
};

type TypographyProps = {
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
