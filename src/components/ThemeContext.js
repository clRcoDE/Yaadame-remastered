
import React from 'react'






class Theme {
    constructor(background , foreground , fontcolor , highlight ,icons , themeId){
        this.background = background
        this.foreground = foreground
        this.fontcolor = fontcolor
        this.highlight= highlight
        this.icons = icons
        this.themeId = themeId
    }
}


export const lightTheme = new Theme('#f5f5f5','#2060ff','#333', 'rgba(75,75,75,0.5)' , '#2060ff' ,1)
export const darkTheme = new Theme('#333','#ff4','#f5f5f5',  'rgba(225,225,225,0.5)'  ,'#f5f5f5'   ,2)


Theme.prototype.equal = function(otherTheme){
    return(
        this.themeId === otherTheme.themeId
    )
}


export const themes = {
    dark:darkTheme,
    light:lightTheme
}


export const ThemeContext = React.createContext(themes.dark)