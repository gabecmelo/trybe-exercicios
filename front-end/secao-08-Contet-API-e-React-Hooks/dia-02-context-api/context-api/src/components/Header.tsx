import { useContext } from "react";
import ThemeContext from "../context/Theme/ThemeContext";

function Header () {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    <header>
      <h1>Aplicação top</h1>
      <button onClick={toggleTheme}>{theme === 'dark' ? '☀️' : '🌒'}</button>
    </header>
  )
}

export default Header;