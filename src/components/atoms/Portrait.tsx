import { Box, Image } from '@chakra-ui/react'

export const Portrait = () => {
  return (
    <Box
      w={{
        base: 'full',
        md: '240px',
      }}
      h="auto"
      mx={{
        base: 'auto',
        md: 'inherit',
      }}
      position="relative"
      _after={{
        content: '""',
        position: 'absolute',
        zIndex: 10,
        backgroundColor: 'main',
        w: 8,
        h: 8,
        display: 'block',
        right: '20px',
        top: '-20px',
      }}
    >
      <Image src="/images/waterfall.png" alt="me" />
    </Box>
  )
}
