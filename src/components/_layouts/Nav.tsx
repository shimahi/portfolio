import { NavItem } from 'components/atoms'
import 'twin.macro'

export const Nav = () => {
  return (
    <nav tw="pb-2 flex items-center flex-col-reverse sm:flex-col sm:(w-48 pb-8) lg:w-56 xl:w-64">
      <div className="group" tw="flex w-4/5 mx-auto justify-around items-center sm:(flex-col mt-16 w-full) lg:mt-32">
        <NavItem href="/" text="top" />
        <NavItem href="/works" text="works" />
        <NavItem href="/other" text="other" />
      </div>

      <div tw="mt-4 sm:mt-24 text-lightGray font-bold select-none opacity-75 transform sm:rotate-90">
        Shimahi portfolio
      </div>
    </nav>
  )
}
