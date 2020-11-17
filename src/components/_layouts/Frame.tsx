import { ReactNode } from 'react'
import tw, { styled } from 'twin.macro'

export const LeftTopFrame = styled.main`
  ${tw`relative min-h-screen`}
  z-index: 102;

  &::before {
    content: '';
    ${tw`fixed top-0 left-0 w-full h-2 bg-main`}
    z-index: 102;
  }
  &::after {
    content: '';
    ${tw`fixed top-0 left-0 h-screen w-2 bg-main`};
    z-index: 102;
  }
`

export const RightBottomFrame = styled.div`
  ${tw`relative min-h-screen`}
  z-index: 101;

  &:before {
    content: '';
    ${tw`fixed top-0 right-0 h-screen w-2 bg-main`}
    z-index: 101;
  }
  &:after {
    content: '';
    ${tw`fixed bottom-0  left-0 w-full h-2 bg-main`}
    z-index: 101;
  }
`

export const Frame = ({ children }: { children: ReactNode }) => {
  return (
    <LeftTopFrame>
      <RightBottomFrame>{children}</RightBottomFrame>
    </LeftTopFrame>
  )
}
