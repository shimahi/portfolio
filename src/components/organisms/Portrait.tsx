import tw, { css } from 'twin.macro'
import shimahi from 'assets/shimahi.jpg'

export const Portrait = () => {
  return (
    <div>
      <div
        tw="w-full h-auto max-w-xs mx-auto sm:(mx-0 w-48 h-48) relative clearfix"
        css={css`
          &:after {
            ${tw`absolute block w-10 h-10 z-10 bg-main`}
            right: 20px;
            top: -20px;
          }
        `}
      >
        <img src={shimahi} width={192} height={192} alt="me" tw="w-full h-auto sm:w-48" />
      </div>
      <p tw="mt-3">見ていただいてありがとうございます。名前だけでも覚えてください。</p>
    </div>
  )
}
