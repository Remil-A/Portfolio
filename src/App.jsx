import Intro from "./Components/Intro/Intro";
import About from "./Components/about/About";
import Contact from "./Components/Contact/Contact";
import ProductList from "./Components/ProductList/ProductList";
import Toggle from "./Components/Toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";
const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white"}}> 
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
  </div>
  )

};

export default App;