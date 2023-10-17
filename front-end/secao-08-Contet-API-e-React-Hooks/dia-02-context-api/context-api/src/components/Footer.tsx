import { useContext } from "react";
import ThemeContext from "../context/Theme/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer>
      <h2>Tema atual: {theme}</h2>
    </footer>
  )
}

export default Footer;