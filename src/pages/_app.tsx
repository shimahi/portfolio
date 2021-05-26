import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'lib/style'
import * as gtag from 'lib'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && gtag.existsGaId) {
      const handleRouteChange = (path: string) => gtag.pageview(path)

      router.events.on('routeChangeComplete', handleRouteChange)

      return () => router.events.off('routeChangeComplete', handleRouteChange)
    }
  })

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default App
