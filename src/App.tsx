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

  const submitfrom = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(user);
    alert(user);
  }


  return (
    <>
      <div>
        <form action="" onSubmit={submitfrom}>
          <input type="name" value={user?.name} onChange={(e)=>setUser((prev)=>({
                ...prev!,
                name: String( e.target.value)
              }))
            }
            />
          <input placeholder='age' type="number" value={user?.age} onChange={(e)=>setUser((prev)=>({
              ...prev!,
              age: Number( e.target.value)
            }))
          }
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
