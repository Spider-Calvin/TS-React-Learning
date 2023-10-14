import { useState } from 'react'
import './App.css'

interface person {
  name: string,
  age: number,
  weight: number
}

function App() {

  const [user, setUser] = useState<person>({
    name:'',
    age:0,
    weight:0
  })

  return (
    <>
      <div>
        <form action="">
          <input type="number" value={user?.age} onChange={(e)=>setUser((prev)=>({
              ...prev!,
              age: Number( e.target.value)
            }))
          }
          />
        </form>
      </div>
    </>
  )
}

export default App
