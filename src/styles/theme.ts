import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '700': '#47585B',
      '500': '#999999',
      '300': 'rgba(153, 153, 153, 0.5)',
      '200': '#DADADA',
      '50': '#F5F8FA',
    },
    yellow: {
      '500': '#FFBA08',
      '300': 'rgba(255, 186, 8, 0.5)',
    },
  },
  styles: {
    global: {
      body: {
        color: 'gray.700',
      },
      heading: {
        color: 'gray.700',
      },
      '.swiper-button-prev, .swiper-button-next': {
        color: 'yellow.500',
      },
      '.swiper-button-disabled': {
        color: 'yellow.300',
      },
      '.swiper-pagination-bullet': {
        background: 'gray.500',
        opacity: '1',
      },
      '.swiper-pagination-bullet-active': {
        background: 'yellow.500',
      },
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
});
