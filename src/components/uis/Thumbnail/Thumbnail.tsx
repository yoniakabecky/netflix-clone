import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Card, { CardProps } from '@mui/material/Card';
import Image, { ImageProps as nextImageProps } from 'next/image';

type ImageProps = nextImageProps & {
  alt: string;
};

interface Props extends CardProps {
  imgProps: ImageProps;
}

const Thumbnail = forwardRef<HTMLDivElement, Props>(
  ({ imgProps, sx, ...props }, ref) => {
    const { src, alt, ...rest } = imgProps;
    return (
      <Card
        sx={{
          width: '100%',
          maxWidth: 320,
          height: '100%',
          maxHeight: 180,
          cursor: 'pointer',
          ...sx,
        }}
        ref={ref}
        {...props}
      >
        <Box position={'relative'} width={'100%'} height={'100%'}>
          <Image src={src} alt={alt} fill {...rest} />
        </Box>
      </Card>
    );
  }
);

Thumbnail.displayName = 'Thumbnail';
export default Thumbnail;
