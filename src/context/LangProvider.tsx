"use client"

import React, {createContext, useContext, useState} from 'react'

type context = {
  lang: string,
  toggleLang: (value: string) => void
}

const langContext = createContext<context | undefined>(undefined)


export const LangProvider = ({
  children
}:{
  children: React.ReactNode
}) => {

  const [lang, setLang] = useState<string>("en")
  const toggleLang = (value: string) => setLang(value)

  return (
    <langContext.Provider value = {{lang, toggleLang}}>
      <>
        {children}
      </>
    </langContext.Provider>
  )
}

export const useLang = () => {

  const lang = useContext(langContext);

  if (!lang) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }


  return lang;
}
  

