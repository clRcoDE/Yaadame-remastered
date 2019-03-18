


import {SET_THEME} from './types'
import { themes  } from '../../components/ThemeContext'
const initialState = {
    theme:themes.dark
}


export default setting =( state = initialState , action) =>{

    switch (action.type){
        case SET_THEME:
       
        return {
            ...state,
            theme:state.theme.equal(themes.light) ? themes.dark : themes.light
        }
        default:
        return state
    }
}








