import Box from '@mui/material/Box';
import Card, { CardProps } from '@mui/material/Card';
import Image, { ImageProps as nextImageProps } from 'next/image';

type ImageProps = nextImageProps & {
  alt: string;
};

interface Props extends CardProps {
  imgProps: ImageProps;
}

export default function Thumbnail({ imgProps, sx, ...props }: Props) {
  const { src, alt, layout, ...rest } = imgProps;

  return (
    <Card
      sx={{
        flexShrink: 0,
        width: '16vw',
        maxWidth: 320,
        height: '9vw',
        maxHeight: 180,
        ...sx,
      }}
      {...props}
    >
      <Box position={'relative'} width={'100%'} height={'100%'}>
        <Image src={src} alt={alt} layout={layout ?? 'fill'} {...rest} />
      </Box>
    </Card>
  );
}
