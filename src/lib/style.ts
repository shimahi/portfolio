import { css } from '@emotion/react'
import tw from 'twin.macro'

export const sm = `@media(min-width: 640px)`
export const md = `@media(min-width: 768px)`
export const lg = `@media(min-width: 1024px)`
export const xl = `@media(min-width: 1280px)`

export const mainColor = '#00ede4'

export const nortionArticle = css`
  * {
    ${tw`text-text`}
  }
  width: 100%;
  background: white;
  h1,
  h2 {
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
  }
`
