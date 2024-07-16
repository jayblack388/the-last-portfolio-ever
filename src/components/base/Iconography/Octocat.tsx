import { type IconProps } from "../../types";

export const Octocat = ({ height, width, fill }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 24 24`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0.984014C5.37075 0.984014 0 6.26924 0 12.783C0 17.9989 3.438 22.4199 8.20275 23.9796C8.805 24.0909 9.0225 23.7259 9.0225 23.4103C9.0225 23.13 9.01575 22.3889 9.01125 21.4052C5.6715 22.1161 4.968 19.8189 4.968 19.8189C4.42125 18.4591 3.63225 18.0941 3.63225 18.0941C2.54625 17.3647 3.7185 17.3802 3.7185 17.3802C4.9215 17.4606 5.5545 18.5933 5.5545 18.5933C6.62475 20.3986 8.3625 19.8765 9.05025 19.5726C9.15525 18.8123 9.468 18.2895 9.8085 17.9982C7.1445 17.7025 4.34325 16.6885 4.34325 12.1673C4.34325 10.876 4.80825 9.82443 5.577 8.9985C5.44425 8.70279 5.03775 7.50076 5.68275 5.87545C5.68275 5.87545 6.687 5.56056 8.98275 7.08558C9.96068 6.82406 10.9693 6.68993 11.9828 6.68663C13.0028 6.69327 14.022 6.82453 14.9828 7.08558C17.265 5.56056 18.2685 5.87545 18.2685 5.87545C18.9128 7.50076 18.5063 8.70205 18.3893 8.9985C19.1505 9.82443 19.6155 10.8768 19.6155 12.1673C19.6155 16.6988 16.8105 17.6981 14.1435 17.9864C14.5605 18.3396 14.9513 19.066 14.9513 20.1685C14.9513 21.7466 14.9363 23.018 14.9363 23.4022C14.9363 23.7089 15.1463 24.0777 15.7643 23.9589C20.5643 22.4155 23.9985 17.9908 23.9985 12.7823C23.9985 6.2685 18.6278 0.983276 11.9985 0.983276L12 0.984014Z"
      fill={fill}
    />
  </svg>
);

export default Octocat;
