import { createContext } from "react";

type ThemeContextType = {
  theme: 'dark' | 'light';
  toggleTheme: () => void
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export default ThemeContext;
