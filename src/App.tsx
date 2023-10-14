import './App.css'
import Box from './components/Box'

function App() {

  return (
    <>
      <div>
        hello
        <Box heading='Spider calvin' count={300} func1={(a:string)=>alert(a)}/>
      </div>
    </>
  )
}

export default App
