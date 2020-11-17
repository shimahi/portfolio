import { Portrait } from 'components/organisms'
import { nortionArticle } from 'lib'
import 'twin.macro'
import { NotionRenderer } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'

export const IndexTemplate = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  return (
    <article tw="pt-8 px-4 sm:pt-32">
      <Portrait />
      <section tw="mt-16 container" css={nortionArticle}>
        <NotionRenderer recordMap={recordMap} />
      </section>
    </article>
  )
}
