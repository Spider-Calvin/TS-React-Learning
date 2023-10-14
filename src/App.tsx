import { useState } from 'react'
import './App.css'
import Box from './components/Box'

function App() {

  const [value, setValue] = useState<string>('')

  return (
    <>
      <div>
        hello
        <Box lable='Spider calvin' value={value} setter={setValue}/>
      </div>
    </>
  )
}

export default App
