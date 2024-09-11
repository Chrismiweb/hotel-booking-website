import React, {createContext, useEffect, useState} from 'react'

export const ThemeContext = createContext({})

// provider is what your context carries.... children mean we dont know the value coming 
export function ThemeContextProvider({children}){
    const [themeColor, setThemeColor] = useState(() => { 
        const color = localStorage.getItem("color")
        return color ? JSON.parse(color) : null
    })
    // return color ? themeColor : null

    useEffect(() => {
      if(themeColor){
        return localStorage.setItem("color", JSON.stringify(themeColor))
      }
      else{
        localStorage.removeItem("color")
      }

    //   dependency array
    }, [themeColor])

    return(
        <ThemeContext.Provider value={{themeColor, setThemeColor}}>
            {children}
        </ThemeContext.Provider>
    )
    

}