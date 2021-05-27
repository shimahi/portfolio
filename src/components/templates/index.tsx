import { Portrait } from 'components/atoms/Portrait'
import { Box } from '@chakra-ui/react'
import { cmsStyle } from 'lib/style'

type Props = {
  content: string
}

export const IndexTemplate: React.FC<Props> = ({ content }) => {
  return (
    <Box as="article" pt={{ base: 8, md: 32 }} px={4}>
      <Portrait />
      <Box
        mt={16}
        sx={{
          ...cmsStyle,
        }}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </Box>
  )
}
