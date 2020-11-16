import { Portrait } from 'components/organisms'
import { nortionArticle } from 'lib'
import { PageProps } from 'types'
import 'twin.macro'
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
