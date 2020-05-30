import 'ress'
import 'assets/css/foundation/global.css'
import { AppProps } from 'next/app'
import { useState } from 'react'
import { pageContext } from 'contexts/pageContext'

const App = ({ Component, pageProps }: AppProps) => {
  const [pageState, setPageState] = useState('index')
  return (
    <pageContext.Provider value={[pageState, setPageState]}>
      <Component {...pageProps} />
    </pageContext.Provider>
  )
}

export default App
