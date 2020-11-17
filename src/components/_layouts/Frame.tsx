import { mainColor } from 'lib'
import tw, { styled } from 'twin.macro'

export const Frame = styled.main`
  ${tw`relative min-h-screen `}
  border-top: solid 0.5rem  ${mainColor};
  border-left: solid 0.5rem ${mainColor};
  z-index: 101;
  &:before {
    content: '';
    ${tw`fixed top-0  right-0 h-screen w-2 bg-main`}
    z-index: 101;
  }
  &:after {
    content: '';
    ${tw`fixed bottom-0  left-0 w-full h-2 bg-main`}
    z-index: 101;
  }
`
