import { css } from '@emotion/react'
import tw from 'twin.macro'

export const sm = `@media(min-width: 640px)`
export const md = `@media(min-width: 768px)`
export const lg = `@media(min-width: 1024px)`
export const xl = `@media(min-width: 1280px)`
export const xxl = `@media(min-width: 1480px)`

export const mainColor = '#00ede4'

export const nortionStyle = css`
  ${tw`flex max-w-full md:pr-8 text-text max-w-full font-noto`}
  @media (min-width: 768px) {
    max-width: calc(100vw - 16rem) !important;
  }

  main {
    ${tw`max-w-full lg:max-w-screen-lg m-0`}
  }

  .notion-asset-wrapper > div {
    @media (min-width: 768px) {
      align-self: start !important;
    }
  }

  figure {
    ${tw`max-w-full md:max-w-screen-md`}
    img {
      ${tw`w-full h-auto max-w-2xl`}
    }
    & > div {
      display: block !important; //これないとSafariで縦サイズが崩れる
      @media (min-width: 768px) {
        justify-content: flex-start !important;
      }
    }
    & + h3 {
      margin-top: 0;
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
    @media (max-width: 415px) {
      font-size: 13px;
    }
  }
  .notion-page-icon {
    @media (max-width: 415px) {
      display: none;
    }
  }
`
