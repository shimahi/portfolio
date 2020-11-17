import { Portrait } from 'components/organisms'
import { nortionStyle } from 'lib'
import 'twin.macro'
import { NotionRenderer } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'

export const IndexTemplate = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  return (
    <article tw="pt-8 px-4 md:pt-32">
      <Portrait />
      <section tw="mt-8 container" css={nortionStyle}>
        <NotionRenderer recordMap={recordMap} />
      </section>
    </article>
  )
}
