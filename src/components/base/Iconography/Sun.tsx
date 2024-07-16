import { type IconProps } from "../../types";

export const Sun = ({ height, width, fill = "#FFCE31" }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 24 24`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.1199 16.8L3.5199 20.52L7.2399 18.92C6.3999 18.32 5.6799 17.6 5.1199 16.8Z"
      fill={fill}
    />
    <path
      d="M18.88 7.19998L20.48 3.47998L16.8 5.07998C17.6 5.67998 18.32 6.39998 18.88 7.19998Z"
      fill={fill}
    />
    <path
      d="M3.76 10.52L0 12L3.76 13.48C3.64 13 3.6 12.52 3.6 12C3.6 11.48 3.64 11 3.76 10.52Z"
      fill={fill}
    />
    <path
      d="M20.24 13.48L24 12L20.24 10.52C20.32 11 20.4 11.52 20.4 12C20.4 12.52 20.36 13 20.24 13.48Z"
      fill={fill}
    />
    <path
      d="M7.2001 5.12002L3.4801 3.52002L5.0801 7.24002C5.6801 6.40002 6.4001 5.68002 7.2001 5.12002Z"
      fill={fill}
    />
    <path
      d="M16.8 18.88L20.52 20.48L18.92 16.76C18.32 17.6 17.6 18.32 16.8 18.88Z"
      fill={fill}
    />
    <path
      d="M13.4799 3.76L11.9999 0L10.5199 3.76C10.9999 3.68 11.5199 3.6 11.9999 3.6C12.4799 3.6 12.9999 3.64 13.4799 3.76Z"
      fill={fill}
    />
    <path
      d="M10.5199 20.24L11.9999 24L13.4799 20.24C12.9999 20.36 12.5199 20.4 11.9999 20.4C11.4799 20.4 10.9999 20.36 10.5199 20.24Z"
      fill={fill}
    />
    <path
      d="M12 19.6C16.1974 19.6 19.6 16.1974 19.6 12C19.6 7.80266 16.1974 4.40002 12 4.40002C7.80266 4.40002 4.40002 7.80266 4.40002 12C4.40002 16.1974 7.80266 19.6 12 19.6Z"
      fill={fill}
    />
  </svg>
);

export default Sun;
