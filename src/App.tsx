import './App.css'
import Box from './components/Box'

function App() {

  return (
    <>
      <div>
        hello
        <Box heading='Spider calvin' count={300} func1={()=>alert('spider calvin is a good boy')}/>
      </div>
    </>
  )
}

export default App
