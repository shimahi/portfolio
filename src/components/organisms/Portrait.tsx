import tw, { css } from 'twin.macro'
import shimahi from 'assets/shimahi.jpg'

export const Portrait = () => {
  return (
    <div
      css={css`
        max-width: 270px;
        ${tw`w-full h-auto mx-auto md:(mx-0 w-48 h-48) relative clearfix`}
        &:after {
          ${tw`absolute block w-10 h-10 z-10 bg-main`}
          right: 20px;
          top: -20px;
        }
      `}
    >
      <img src={shimahi} width={192} height={192} alt="me" tw="w-full h-auto md:w-48" />
    </div>
  )
}
