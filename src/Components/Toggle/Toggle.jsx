import "./toggle.css"
import suns from "../../img/suns.png"
import Moon from "../../img/Moon.png"
import { useContext } from "react"
import { ThemeContext } from "../../context"
function Toggle() {
  const theme = useContext(ThemeContext)
  const handleClick = () => {
    theme.dispatch({type: "TOGGLE"})
  }
  return (
    <div className="t">
        <img src={suns} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon" />
        <div className="t-button" 
        onClick={handleClick} 
        style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toggle
