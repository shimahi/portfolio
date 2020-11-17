import { nortionStyle } from 'lib'
import 'twin.macro'
import { NotionRenderer } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'

export const WorksTemplate = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  return (
    <article tw="pt-8 px-4 md:pt-32">
      <section tw="mt-8" css={[nortionStyle]}>
        <NotionRenderer recordMap={recordMap} />
      </section>
    </article>
  )
}
