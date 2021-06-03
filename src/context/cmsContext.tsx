import { createContext, useContext } from 'react'

export const cmsInitialState: CmsData = {
  top: null,
  works: null,
}

type CmsData = {
  top: Portfolio | null
  works: Portfolio | null
}

export const CmsContext = createContext<[CmsData, (state: CmsData) => void]>([cmsInitialState, () => {}])

export const useCms = () => {
  const [cms, setCms] = useContext(CmsContext)

  return [cms, setCms] as [CmsData, React.Dispatch<React.SetStateAction<CmsData>>]
}
