import { Box, Link, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

type LinkItemProps = {
  href: string
}

const LinkItem: React.FC<LinkItemProps> = ({ children, href }) => {
  const { pathname } = useRouter()

  return (
    <NextLink href={href} as={href}>
      <Link
        position="relative"
        textAlign="center"
        d="block"
        w={16}
        _before={{
          content: '""',
          w: 'full',
          bgColor: pathname === href ? 'main' : 'none',
          position: 'absolute',
          h: 0.5,
          d: 'block',
          bottom: -2,
        }}
        _hover={{
          opacity: 0.6,
        }}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export const Nav = () => {
  // 検索避けのためにタイトル文字列をバラバラにする
  const siteName = 'Shimahi portfolio'
  const chars = siteName.split('')
  const textOrders = chars.map((_) => Math.floor(Math.random() * 1000))
  const textOrdersSorted = textOrders.slice().sort()
  const idxMap = textOrdersSorted.map((v) => {
    return textOrders.findIndex((n) => n === v)
  })

  const mappedChars = idxMap.map((to, index) => {
    return (
      <Box
        transform={{
          md: 'rotate(90deg)',
        }}
        lineHeight={{
          md: 0.8,
        }}
        key={index}
        style={{ order: to }}
      >
        {chars[to]}
      </Box>
    )
  })

  return (
    <Stack
      as="nav"
      paddingTop={{
        base: 12,
        md: 0,
      }}
      paddingBottom={{
        base: 12,
        md: 8,
      }}
      w={{
        base: 'full',
        md: 56,
        lg: 64,
      }}
      flexDirection={{
        base: 'column-reverse',
        md: 'column',
      }}
      justifyContent="center"
      alignItems="center"
      position={{
        md: 'fixed',
      }}
      h={{ md: 'full' }}
    >
      <Stack
        flexDirection={{
          base: 'row',
          md: 'column',
        }}
        mt={{
          md: -64,
        }}
      >
        <LinkItem href="/">top</LinkItem>
        <Box w={{ base: 12, md: 0 }} h={{ md: 16 }} />
        <LinkItem href="/works">works</LinkItem>
      </Stack>
      <Box h={{ md: 32 }} />
      <Box
        d="flex"
        fontWeight="bold"
        flexDirection={{
          md: 'column',
        }}
        color="lightGray"
      >
        {mappedChars}
      </Box>
    </Stack>
  )
}
