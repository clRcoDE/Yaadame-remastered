
import {
    CREATE_USER_BEGINS,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED,
    GET_USER_BEGINS,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
} from './types'


const initialState = {
    user:{
        id:null
    },
    loading:false

}


export default  user = ( state = initialState , action ) =>{

    switch ( action.type ){
        case CREATE_USER_BEGINS:
        return  {
            ...state,
            loading:true
        }  
        case CREATE_USER_SUCCESS:
        return{
            loading:false,
            user:action.user
            
        }
        case CREATE_USER_FAILED:
        return{
            ...state,
            loading:false
        }
        case GET_USER_BEGINS:
        return {
            ...state,
            loading:true
        }
        case GET_USER_SUCCESS:
        return {
            loading:false,
            user:action.user
        }
        case GET_USER_FAILED:
        return {
            ...state ,
            loading:false
        }
        default:
        return state
    }

}



