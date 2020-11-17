import { css } from '@emotion/react'
import tw from 'twin.macro'

export const sm = `@media(min-width: 640px)`
export const md = `@media(min-width: 768px)`
export const lg = `@media(min-width: 1024px)`
export const xl = `@media(min-width: 1280px)`

export const mainColor = '#00ede4'

export const nortionArticle = css`
  ${tw`flex`}
  * {
    ${tw`text-text font-noto`}
  }
  main {
    ${tw`lg:max-w-screen-lg m-0`}
  }
  @media (min-width: 768px) {
    .notion-asset-wrapper > div {
      align-self: start !important;
    }
  }

  .notion-h1 {
    ${tw`relative clearfix w-auto z-50 font-noto text-3xl`}
    svg {
      ${tw`hidden`}
    }
    &:after {
      ${tw`bg-main absolute inline-block`}
      width: 1.5px;
      left: 0;
      top: 2px;
      height: 50px;
      z-index: -1;
      transform: rotate(45deg);
    }
  }
  .notion-h2 a {
    color: #112;
    svg {
      ${tw`hidden`}
    }
  }
  .notion-h3 {
    ${tw`text-base font-bold tracking-normal`}
    svg {
      ${tw`hidden`}
    }
    a {
      font-weight: 700;
    }
  }
  .notion-callout-text {
    font-family: 'Roboto Mono', monospace;
  }
`
