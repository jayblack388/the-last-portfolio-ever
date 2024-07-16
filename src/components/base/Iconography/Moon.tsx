import { type IconProps } from "../../types";

export const Moon = ({ height, width, fill = "#F5DB8A" }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 24 24`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.44 0C17.72 1.92 18.48 4.24 18.48 6.72C18.52 13.4 13.04 18.8 6.28 18.8C4 18.8 1.84 18.16 0 17.08C2.08 21.2 6.36 24 11.32 24C18.32 24 24 18.4 24 11.48C24 6.36 20.88 1.96 16.44 0Z"
      fill={fill}
    />
  </svg>
);

export default Moon;
