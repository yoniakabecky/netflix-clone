import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function MuteIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 7.50001H6.435L12.225 1.755L13.5 2.28V21.78L12.225 22.275L6.435 16.5H2.25L1.5 15.75V8.25001L2.25 7.50001ZM7.275 15.255L12 19.965V4.09501L7.275 8.77501L6.75 9.00001H3V15H6.75L7.275 15.255ZM21.3465 9.09301L22.407 10.1535L19.8105 12.75L22.407 15.348L21.3465 16.4085L18.75 13.8105L16.152 16.4085L15.0915 15.348L17.6895 12.75L15.09 10.155L16.1505 9.09451L18.75 11.6895L21.3465 9.09301V9.09301Z"
      />
    </SvgIcon>
  );
}
