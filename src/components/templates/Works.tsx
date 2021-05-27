import { Box } from '@chakra-ui/react'
import { cmsStyle } from 'lib'

type Props = {
  content: string
}

export const WorksTemplate: React.FC<Props> = ({ content }) => {
  return (
    <Box as="article" pt={{ base: 8, md: 32 }} px={4}>
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
