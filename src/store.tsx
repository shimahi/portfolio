import { useState } from 'react'
import { CmsContext, cmsInitialState } from 'context/cmsContext'

const AppProvider: React.FC = ({ children }) => {
  const [cms, setCms] = useState(cmsInitialState)

  return <CmsContext.Provider value={[cms, setCms]}>{children}</CmsContext.Provider>
}

export default AppProvider
