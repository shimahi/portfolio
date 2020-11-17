import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Frame, Nav } from 'components/_layouts'
import 'twin.macro'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Shimahi portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Frame>
        <div tw="max-w-xxl mx-auto flex flex-col sm:flex-row">
          <Nav />
          <div tw="flex-1 xxl:ml-16">{children}</div>
        </div>
      </Frame>
    </>
  )
}
