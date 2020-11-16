import { nortionArticle } from 'lib'
import { PageProps } from 'types'
import 'twin.macro'
import { NotionRenderer } from 'react-notion'

export const WorksTemplate = (props: PageProps) => {
  return (
    <article tw="pt-8 px-4 sm:pt-32">
      <h2>つくったもの</h2>
      <section tw="mt-8" css={nortionArticle}>
        <NotionRenderer {...props} />
      </section>
    </article>
  )
}
