import { createContext, useContext } from 'react'

export const pageContext = createContext<[string, (state: string) => void]>([
  'index',
  () => {},
])

export const usePage = () => {
  const [pageState, setpageState] = useContext(pageContext)
  return [pageState, setpageState] as [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ]
}
