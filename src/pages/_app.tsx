import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'
import { useRouter } from 'next/router'
import * as gtag from 'lib'
import AppProvider from 'store'
import 'ress'
import 'react-notion-x/src/styles.css'
import tw from 'twin.macro'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    if (!gtag.existsGaId) return

    const handleRouteChange = (path: string) => gtag.pageview(path)

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => router.events.off('routeChangeComplete', handleRouteChange)
  })

  return (
    <AppProvider>
      <>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </>
    </AppProvider>
  )
}

export default App

const globalStyles = css`
  html {
    ${tw`w-screen overflow-x-hidden bg-main`}
  }

  body {
    ${tw`bg-baseColor text-text font-noto tracking-wide`}
  }

  a {
    text-decoration: none;
  }
`
