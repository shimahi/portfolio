import tw, { styled } from 'twin.macro'

export const Frame = styled.main`
  ${tw`relative border-8 border-main border-solid min-h-screen`}
  &:after {
    content: '';
    ${tw`fixed bottom-0 left-0 w-full h-2 bg-main`}
  }
`
