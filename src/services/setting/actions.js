

import {SET_THEME} from './types'



export const changeTheme = (theme)=> {

    return {
        type:SET_THEME,
        theme
    }
}