import { createContext, ReactNode, useState } from "react"
import Box from './components/Box'

type themetype = 'light' | 'dark';
interface Themecontexttype {
  theme: themetype,
  toggleTheme : ()=> void
}

export const Themecontext = createContext<Themecontexttype>({
  theme: 'light',
  toggleTheme:()=>{}
})

const Themeprovider = ({children}:{children:ReactNode}) => {
  const [theme, setTheme] = useState<themetype>('dark')

  const toggleTheme = ()=>{
    setTheme((prev)=>prev==='light' ? 'dark' : 'light')
  }

  return(
    <Themecontext.Provider value={{ theme, toggleTheme }}>
      {children}
    </Themecontext.Provider>
  )
}

const App = () => {
  return (
    <Themeprovider>
      <div>
        hello
      </div>
      <Box/>
    </Themeprovider>
  )
}

export default App