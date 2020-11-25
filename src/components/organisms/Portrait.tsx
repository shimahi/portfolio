import tw, { css } from 'twin.macro'
import topImage from 'assets/waterfall.png'

export const Portrait = () => {
  return (
    <div
      css={css`
        max-width: 320px;
        ${tw`w-full h-auto mx-auto md:(mx-0 w-56 h-56) relative clearfix`}
        &:after {
          ${tw`absolute block w-10 h-10 z-10 bg-main`}
          right: 20px;
          top: -20px;
        }
      `}
    >
      <img src={topImage} width={240} height={240} alt="me" tw="w-full h-auto md:w-56" />
    </div>
  )
}
