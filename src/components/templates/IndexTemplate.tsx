import { Heading } from 'components/atoms'
import { Portrait } from 'components/organisms'
import 'twin.macro'

export const IndexTemplate = () => {
  return (
    <article tw="pt-16 sm:pt-32">
      <Portrait />
      <p tw="mt-2">見ていただいてありがとうございます。名前だけでも覚えてください。</p>
      <section tw="mt-16">
        <Heading>About me</Heading>
      </section>
    </article>
  )
}
