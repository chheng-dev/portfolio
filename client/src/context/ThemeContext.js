import React, {useState, createContext, useContext, useEffect} from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? savedTheme : "light"
  })

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}


// custom hook
const useTheme = () => useContext(ThemeContext)


export {useTheme, ThemeProvider}
