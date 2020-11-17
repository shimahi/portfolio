import { nortionArticle } from 'lib'

import 'twin.macro'
import { NotionRenderer } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'

export const WorksTemplate = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  return (
    <article tw="pt-8 px-4 sm:pt-32">
      <h2>つくったもの</h2>
      <section tw="mt-8" css={[nortionArticle]}>
        <NotionRenderer recordMap={recordMap} />
      </section>
    </article>
  )
}
