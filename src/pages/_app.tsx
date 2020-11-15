import React from 'react'
import { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'
import AppProvider from 'store'
import 'ress'
import tw from 'twin.macro'

const App = ({ Component, pageProps }: AppProps) => {
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
    ${tw`bg-base text-text font-noto tracking-wide`}
  }

  a {
    text-decoration: none;
  }
`
