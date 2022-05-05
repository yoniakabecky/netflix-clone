import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function CheckIcon(props: SvgIconProps) {
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
        d="M21.6264 4.22053C22.0569 4.56647 22.1255 5.19592 21.7795 5.62643L10.5295 19.6264C10.3496 19.8503 10.0821 19.9861 9.79514 19.999C9.5082 20.012 9.22954 19.9009 9.03016 19.6942L2.28016 12.6942C1.8968 12.2966 1.90831 11.6636 2.30587 11.2802C2.70342 10.8968 3.33648 10.9083 3.71985 11.3059L9.68171 17.4886L20.2205 4.37364C20.5664 3.94313 21.1959 3.87458 21.6264 4.22053Z"
      />
    </SvgIcon>
  );
}
