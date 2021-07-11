import { Portrait } from 'components/atoms'
import { Box } from '@chakra-ui/react'
// import { cmsStyle } from 'lib'

export * from './Works'

type Props = {
  content: string
}

export const IndexTemplate: React.FC<Props> = () =>
  // { content }
  {
    return (
      <Box as="article" pt={{ base: 8, md: 32 }} px={4}>
        <Portrait />
        <Box fontWeight="bold" pt={8}>
          No contents here.
        </Box>
        {/* <Box
        mt={16}
        sx={{
          ...cmsStyle,
        }}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      /> */}
      </Box>
    )
  }
