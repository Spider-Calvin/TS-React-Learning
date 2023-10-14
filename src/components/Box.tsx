import { useContext } from "react"
import { Themecontext } from '../App'

const Box = () => {
  const {theme, toggleTheme} =useContext(Themecontext);
  return (
    <div className="boxContainer">
      <h1>BOX 1{theme}</h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default Box