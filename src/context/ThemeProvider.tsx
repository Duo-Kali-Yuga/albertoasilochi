"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

type ContextType = {
  theme: Theme
  toggleTheme: () => void
};

const ThemeContext = createContext<ContextType | undefined>(undefined);

export const ThemeProvider = ({children}:{children: React.ReactNode}) => {
  
  const [theme, setTheme] = useState<Theme | undefined>(undefined)
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as Theme;
      if (saved) {
        setTheme(saved)
      }
      setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    }
  }, [])

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    if(theme){
      const root = document.documentElement;

      if (theme === "dark") {
        root.dataset.theme = "light"
        root.classList = "light"
      } else {
        root.dataset.theme = "dark"
        root.classList = "light"
      }
    }

  }, [theme])

  useEffect(() => {
    const root = document.documentElement;
    
    root.setAttribute("data-theme", theme);
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}


export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};




