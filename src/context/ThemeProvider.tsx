"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

type ContextType = {
  theme: Theme
  toggleTheme: () => void
};

const ThemeContext = createContext<ContextType | undefined>(undefined);

export const ThemeProvider = ({children}:{children: React.ReactNode}) => {
  
  const [theme, setTheme] = useState<Theme>("light")
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as Theme;
      if (saved) {
        setTheme(saved)
      }
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

      setTheme(prefersDark ? "dark" : "light")
    }
  }, [])

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    if(theme){
      const root = document.documentElement;

      if (theme === "dark") {
        root.dataset.theme = "light"
        root.classList = "light"
        // root.setAttribute("data-theme", theme);
      } else {
        root.dataset.theme = "dark"
        root.classList = "light"
        // root.setAttribute("data-theme", theme);
      }
       
      localStorage.setItem("theme", theme);

    }

  }, [theme])

  if(theme !== "light" && theme !== "dark") {
    throw new Error("Theme error")
  }

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




