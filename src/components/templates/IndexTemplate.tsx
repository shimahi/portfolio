import { Portrait } from 'components/organisms'
import tw, { css } from 'twin.macro'
import { PageProps } from 'types'
import { NotionRenderer } from 'react-notion'

export const IndexTemplate = (props: PageProps) => {
  return (
    <article tw="pt-8 px-4 sm:pt-32">
      <Portrait />
      <section tw="mt-16" css={nortionArticle}>
        <NotionRenderer {...props} />
      </section>
    </article>
  )
}

const nortionArticle = css`
  * {
    ${tw`text-text`}
  }
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
