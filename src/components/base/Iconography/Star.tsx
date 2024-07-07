import { type IconProps } from "./types";

export const Star = ({ height, width, fill }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 24 24`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.2089 9.67501L15.2581 8.81017L12.5979 3.4172C12.5253 3.26954 12.4057 3.15001 12.2581 3.07735C11.8878 2.89454 11.4378 3.04688 11.2526 3.4172L8.59246 8.81017L2.64168 9.67501C2.47762 9.69845 2.32762 9.77579 2.21278 9.89298C2.07394 10.0357 1.99743 10.2277 2.00007 10.4267C2.0027 10.6258 2.08427 10.8157 2.22684 10.9547L6.53231 15.1524L5.51512 21.0797C5.49127 21.2176 5.50652 21.3594 5.55916 21.489C5.6118 21.6187 5.69972 21.731 5.81294 21.8132C5.92616 21.8955 6.06015 21.9443 6.19973 21.9543C6.3393 21.9642 6.47888 21.9349 6.60262 21.8695L11.9253 19.0711L17.2479 21.8695C17.3932 21.9469 17.562 21.9727 17.7237 21.9445C18.1315 21.8742 18.4057 21.4875 18.3354 21.0797L17.3182 15.1524L21.6237 10.9547C21.7409 10.8399 21.8182 10.6899 21.8417 10.5258C21.905 10.1156 21.619 9.73595 21.2089 9.67501Z"
      fill={fill}
    />
  </svg>
);

export default Star;
