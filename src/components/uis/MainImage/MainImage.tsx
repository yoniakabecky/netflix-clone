import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

import { originalImgLoader } from 'utils/imgLoader';

interface Props extends BoxProps {
  title: string;
  backdropPath: string | null;
  width?: string | number;
  height?: string | number;
}

export default function MainImage({
  title,
  backdropPath,
  width = '100%',
  height = '100vh',
  children,
  ...props
}: Props) {
  if (!backdropPath) return <div />;

  return (
    <Box
      position={'relative'}
      width={width}
      height={height}
      mx={'auto'}
      {...props}
    >
      <Inset0Box
        zIndex={1}
        sx={{
          background:
            'linear-gradient(180deg, rgba(20, 20, 20, 0) 50%, rgba(20, 20, 20, 0.4) 75%, #141414 100%)',
        }}
      />
      <Inset0Box zIndex={0}>
        <Image
          loader={originalImgLoader}
          src={backdropPath}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Inset0Box>

      {children}
    </Box>
  );
}

const Inset0Box = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
}));
