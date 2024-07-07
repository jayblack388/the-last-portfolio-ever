import { type IconProps } from "./types";

export const World = ({ height, width, fill }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.6484 7.53079C20.4922 7.49951 20.375 7.48387 20.2969 7.48387C19.7188 7.48387 19.2188 7.67937 18.7969 8.07038C17.8438 7.64809 16.9531 7.30401 16.125 7.03812C14.7656 6.6002 13.3438 6.24047 11.8594 5.95894C11.7188 5.58358 11.5078 5.27077 11.2266 5.02053C11.6172 3.17498 12.1406 1.50147 12.7969 0C14.7656 0.140762 16.5742 0.711632 18.2227 1.71261C19.8711 2.71359 21.2031 4.02737 22.2188 5.65396C21.6406 6.27957 21.1172 6.90518 20.6484 7.53079ZM9.77344 4.48094C9.36719 4.48094 8.98438 4.59042 8.625 4.80938C7.35938 3.87097 6.08594 3.07331 4.80469 2.41642C6.74219 0.946237 8.91406 0.140762 11.3203 0C10.7109 1.3607 10.2188 2.85435 9.84375 4.48094H9.77344ZM1.64062 5.93548C2.17188 5.04399 2.84375 4.19941 3.65625 3.40176C4.71875 3.94917 5.82031 4.6217 6.96094 5.41935C4.94531 5.37243 3.17188 5.54448 1.64062 5.93548ZM7.52344 6.8739C7.55469 7.35875 7.72266 7.78495 8.02734 8.15249C8.33203 8.52004 8.71094 8.76637 9.16406 8.8915C9.07031 9.98631 9.02344 11.0264 9.02344 12.0117C9.02344 12.6999 9.04688 13.4897 9.09375 14.3812C8.75 14.4907 8.44531 14.6784 8.17969 14.9443C7.33594 14.6158 6.52344 14.2405 5.74219 13.8182C5.91406 13.4741 6 13.1222 6 12.7625C6 12.1369 5.78125 11.6051 5.34375 11.1672C4.90625 10.7292 4.375 10.5103 3.75 10.5103C3.0625 10.5103 2.49219 10.7761 2.03906 11.3079C1.38281 10.7136 0.796875 10.0958 0.28125 9.45455C0.421875 8.78201 0.632812 8.1173 0.914062 7.46041C2.82031 6.92864 5.02344 6.73314 7.52344 6.8739ZM1.52344 12.9501C1.57031 13.5288 1.80859 14.0176 2.23828 14.4164C2.66797 14.8152 3.17188 15.0147 3.75 15.0147C3.92188 15.0147 4.10938 14.9834 4.3125 14.9208C5.3125 15.4995 6.38281 16 7.52344 16.4223V16.5161C7.52344 17.1261 7.73047 17.6461 8.14453 18.0762C8.55859 18.5064 9.07031 18.737 9.67969 18.7683C10.0703 20.6764 10.6172 22.4203 11.3203 24C9.75781 23.9062 8.28125 23.5269 6.89062 22.8622C5.5 22.1975 4.30078 21.3333 3.29297 20.2698C2.28516 19.2063 1.48438 17.955 0.890625 16.5161C0.296875 15.0772 0 13.5758 0 12.0117C0 11.9961 0.0078125 11.7849 0.0234375 11.3783C0.460938 11.9257 0.960938 12.4497 1.52344 12.9501ZM11.7422 17.5718C12.8672 17.7752 14 17.9081 15.1406 17.9707C15.25 18.2835 15.4219 18.5728 15.6562 18.8387C15.2969 20.4809 15.0781 22.0762 15 23.6246C14.2031 23.828 13.4688 23.9531 12.7969 24C12.0625 22.3265 11.4922 20.434 11.0859 18.3226C11.3672 18.1349 11.5859 17.8847 11.7422 17.5718ZM19.0078 18.6979C19.2109 18.4477 19.3516 18.1818 19.4297 17.9003C20.5703 17.8065 21.6719 17.6579 22.7344 17.4545C21.9844 18.9247 20.9531 20.1994 19.6406 21.2786C19.5 20.4653 19.2891 19.6051 19.0078 18.6979ZM15.1875 16.4692C14.0938 16.4066 13.0156 16.2659 11.9531 16.0469C11.7812 15.2649 11.3359 14.7253 10.6172 14.4282C10.5547 13.5054 10.5234 12.6999 10.5234 12.0117C10.5234 10.9795 10.5703 9.90811 10.6641 8.79765C10.6953 8.79765 10.7344 8.78201 10.7812 8.75073C10.8281 8.71945 10.8594 8.70381 10.875 8.70381C11.4844 9.29814 12.0156 9.84555 12.4688 10.346C13.8281 11.8475 14.9844 13.5523 15.9375 15.4604C15.5938 15.7263 15.3438 16.0626 15.1875 16.4692ZM17.2734 19.5191C17.3047 19.5191 17.3906 19.5112 17.5312 19.4956C17.7969 20.4497 17.9922 21.3959 18.1172 22.3343C17.6641 22.6002 17.1172 22.8661 16.4766 23.132C16.5859 21.912 16.7734 20.6999 17.0391 19.4956C17.1641 19.5112 17.2422 19.5191 17.2734 19.5191ZM17.1562 13.912C17.1406 13.9433 17.1211 13.9902 17.0977 14.0528C17.0742 14.1153 17.0547 14.1623 17.0391 14.1935C16.0547 12.4106 14.8984 10.7918 13.5703 9.33724C13.0859 8.78983 12.5078 8.1955 11.8359 7.55425C11.8516 7.55425 11.8633 7.54252 11.8711 7.51906L11.8828 7.48387C13.1953 7.74976 14.4531 8.0782 15.6562 8.46921C16.3906 8.70381 17.1953 9.01662 18.0703 9.40762C18.0391 9.56403 18.0234 9.68133 18.0234 9.75953C18.0234 10.2287 18.1641 10.6588 18.4453 11.0499C17.9297 12.0352 17.5 12.9892 17.1562 13.912ZM18.2578 15.2727C18.4453 14.7253 18.5391 14.4438 18.5391 14.4282C18.8516 13.6461 19.2422 12.8094 19.7109 11.9179C19.9141 11.9804 20.1094 12.0117 20.2969 12.0117C20.8281 12.0117 21.3047 11.8319 21.7266 11.4721C22.4922 12.0039 23.2422 12.5982 23.9766 13.2551C23.8828 14.1466 23.6953 15.0068 23.4141 15.8358C22.1328 16.1017 20.7812 16.2893 19.3594 16.3988C19.1562 15.8983 18.7891 15.523 18.2578 15.2727ZM22.5469 9.73607C22.5469 9.21994 22.375 8.75073 22.0312 8.32845C22.3594 7.90616 22.6875 7.52297 23.0156 7.17889C23.5781 8.46139 23.9062 9.78299 24 11.1437C23.4844 10.7527 22.9844 10.4008 22.5 10.088C22.5312 9.94721 22.5469 9.82991 22.5469 9.73607Z"
      fill={fill}
    />
  </svg>
);

export default World;
