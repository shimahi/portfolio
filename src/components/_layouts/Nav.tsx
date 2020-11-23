import { NavItem } from 'components/atoms'
import { xl } from 'lib'
import { css } from 'twin.macro'

export const Nav = () => {
  return (
    <nav
      tw="pb-2 flex items-center flex-col-reverse md:(fixed h-screen left-0 z-50 flex-col w-48 pb-8) lg:(w-56) xl:(w-64)"
      css={css`
        ${xl} {
          left: calc(50vw - 640px) !important;
        }
      `}
    >
      <div className="group" tw="flex w-4/5 mx-auto justify-around items-center md:(flex-col mt-16 w-auto) lg:mt-32">
        <NavItem href="/" text="top" />
        <NavItem href="/works" text="works" />
      </div>

      <div tw="mt-4 md:mt-24 text-lightGray font-bold select-none opacity-75 transform md:rotate-90">
        Shimahi portfolio
      </div>
    </nav>
  )
}
