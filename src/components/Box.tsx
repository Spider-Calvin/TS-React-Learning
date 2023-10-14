import { Dispatch, SetStateAction } from 'react'

type inputs = string | number
const Box = <T extends inputs>({lable, value, setter }:{ lable: string, value:T, setter:Dispatch<SetStateAction<T>> }) => {
  return (
    <>
     <form action="">
      <label htmlFor="">{lable}</label>
      <input type="text" value={value} onChange={(e)=>setter(e.target.value as T)}/>
     </form>
    </>
  )
}

export default Box