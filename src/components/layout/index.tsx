import React from 'react'
import Head from 'next/head'
import { Frame } from 'components/layout/Frame'
import { Nav } from 'components/layout/Nav'
import { Box, Stack } from '@chakra-ui/react'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Shimahi portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bgColor="baseColor">
        <Frame>
          <Stack maxWidth="container.xl" mx="auto" as="main">
            <Nav />
            <Box
              fontFamily="noto"
              px={2}
              pl={{
                md: 56,
                lg: 64,
              }}
              pb={12}
            >
              {children}
            </Box>
          </Stack>
        </Frame>
      </Box>
    </>
  )
}
