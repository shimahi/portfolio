import { mainColor } from 'lib'
import Link from 'next/link'
import { useRouter } from 'next/router'
import tw, { css } from 'twin.macro'

type NavItemProps = {
  href: string
  text: string
}

export const NavItem = ({ href, text }: NavItemProps) => {
  const { pathname } = useRouter()

  return (
    <Link href={href}>
      <a
        tw="relative block text-center cursor-pointer hover:opacity-75 pt-6 pb-4 md:py-8"
        css={css`
          &:hover > div {
            background-color: ${mainColor}!important;
            opacity: 1 !important;
          }
        `}
      >
        {text}
        <div
          tw="w-16 mt-2 group-hover:opacity-0"
          css={css`
            height: 2px;
            ${pathname === href && tw`bg-main`}
          `}
        />
      </a>
    </Link>
  )
}
