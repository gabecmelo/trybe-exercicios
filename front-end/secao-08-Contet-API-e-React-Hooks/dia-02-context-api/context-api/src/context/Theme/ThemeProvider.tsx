import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode
}

function ThemeProvider({children} : ThemeProviderProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const ToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: ToggleTheme }}>
      <div className={`app ${theme}`}>
      { children }
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
