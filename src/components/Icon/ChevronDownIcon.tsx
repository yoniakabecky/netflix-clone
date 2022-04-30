import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function ChevronDownIcon(props: SvgIconProps) {
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
        d="M3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L12 15.5858L19.2929 8.29289C19.6834 7.90237 20.3166 7.90237 20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289Z"
      />
    </SvgIcon>
  );
}
