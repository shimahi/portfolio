import tw, { styled } from 'twin.macro'

export const Heading = styled.h2`
  ${tw`relative clearfix block z-50 font-noto  text-2xl`}
  &:after {
    ${tw`bg-main absolute inline-block`}
    width: 1.5px;
    left: 0;
    top: -6px;
    height: 60px;
    z-index: -1;
    transform: rotate(45deg);
  }
`
