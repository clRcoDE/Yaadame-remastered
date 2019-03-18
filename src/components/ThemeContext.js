
import React from 'react'


export const themes = {
    dark:{
        background:'#333',
        foreground:'#ff4',
        fontColor:'#f5f5f5'

    },
    light:{
        background:'#f5f5f5',
        foreground:'#2060ff',
        fontColor:'#333'
    }
}


export const ThemeContext = React.createContext(themes.dark)
