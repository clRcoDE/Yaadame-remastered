


import {SET_THEME} from './types'

const initialState = {
    theme:'light'
}


export default setting =( state = initialState , action) =>{

    switch (action.type){
        case SET_THEME:
        return {
            theme:action.theme
        }
        default:
        return state
    }
}