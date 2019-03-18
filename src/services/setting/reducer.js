


import {SET_THEME} from './types'
import { themes  } from '../../components/ThemeContext'
const initialState = {
    theme:themes.light
}


export default setting =( state = initialState , action) =>{

    switch (action.type){
        case SET_THEME:
       
        return {
            ...state,
            theme:state.theme === themes.light ? themes.dark : themes.light
        }
        default:
        return state
    }
}