import './App.css'
import Box from './components/Box'

function App() {

  return (
    <>
      <div>
        hello
        <Box heading='Spider calvin' count={300} children={<>"Hello baby"</>}/>
      </div>
    </>
  )
}

export default App
