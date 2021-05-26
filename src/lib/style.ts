import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    main: '#00ede4',
    dark: '#00a19a',
    lightGray: '#c3c4c5',
    baseColor: '#f5f5f5',
    text: '#122',
  },
  fonts: {
    noto: 'Noto Sans JP, Yu Gothic,sans-serif',
  },
})

export const cmsStyle = {
  color: 'text',
  letterSpacing: '0.02em',
  p: {
    lineHeight: '1.6',
    my: 2,
  },
  h1: {
    fontSize: '4xl',
    fontWeight: 'bold',
    mt: 8,
  },
  h2: {
    fontSize: '3xl',
    fontWeight: 'bold',
    '& a': {
      color: '#444',
    },
  },
  h3: {
    fontSize: 'xl',
    fontWeight: 'bold',
    mt: 4,
  },
  img: {
    maxWidth: '600px',
  },
  ul: {
    my: 2,
    ml: {
      base: 6,
      md: 12,
    },
    lineHeight: 2,
  },
  a: {
    color: 'dark',
    textDecoration: 'underline',
  },
}
