import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

export const Frame: React.FC = ({ children }) => {
  return (
    <LeftTopFrame>
      <RightBottomFrame>{children}</RightBottomFrame>
    </LeftTopFrame>
  )
}

const LeftTopFrame: React.VFC<BoxProps> = (props) => (
  <Box
    position="relative"
    minHeight="full"
    zIndex={102}
    _before={{
      content: '""',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '0.5rem',
      backgroundColor: 'main',
      zIndex: 102,
    }}
    _after={{
      content: '""',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '0.5rem',
      height: 'full',
      backgroundColor: 'main',
      zIndex: 102,
    }}
    {...props}
  />
)

const RightBottomFrame: React.VFC<BoxProps> = (props) => (
  <Box
    position="relative"
    minHeight="full"
    zIndex={101}
    _before={{
      content: '""',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100vw',
      height: '0.5rem',
      backgroundColor: 'main',
      zIndex: 101,
    }}
    _after={{
      content: '""',
      position: 'fixed',
      top: 0,
      right: 0,
      width: '0.5rem',
      height: 'full',
      backgroundColor: 'main',
      zIndex: 101,
    }}
    {...props}
  />
)
