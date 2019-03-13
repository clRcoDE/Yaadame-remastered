

import {
    CREATE_USER_BEGINS,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED,
    GET_USER_BEGINS,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
} from './types'



const  createUserBegins =() =>{
    return {
        type:CREATE_USER_BEGINS,

    }
}

const createUserSuccess = (user) =>{
    return {
        type:CREATE_USER_SUCCESS,
        user

    }
}

const createUserFailure = () => {
return {
    type:CREATE_USER_FAILED
}
}


const getUserBegin = () => {
    return {
        type:GET_USER_BEGINS
    }
} 


const  getUserSuccess = (user) => {
return {
    type:GET_USER_SUCCESS,
    user
}
}



const getUserFailure = () => {

    return {
        type:GET_USER_FAILED,

    }
}

export const createUser = (username) =>{


    return dispatch => {
        dispatch(createUserBegins())
        fetch(`http://10.0.2.2:3000/users`,{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                id:`${username}`
              })
        })
        .then(response =>{if(response.ok){return response.json()}})
        .then(result => dispatch(createUserSuccess(result)))
        .catch(dispatch(createUserFailure()))

    }
}

export const  getUser = (id) =>{

    return dispatch => {
        dispatch(getUserBegin())
        fetch(`http://10.0.2.2/users/${id}`)
        .then(response =>{if(response.ok && response.json() !== null ){return response.json()}else{getUserFailure()}})
        .then(result => dispatch(getUserSuccess()))
        .catch(dispatch(getUserFailure()))

    }
}