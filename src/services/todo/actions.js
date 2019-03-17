 import {
GET_USER_EXISTING_LISTS_BEGINS,
GET_USER_EXISTING_LISTS_SUCCEED,
GET_USER_EXISTING_LISTS_FAILED,
ADD_LIST_BEGINS,
ADD_LIST_SUCCEED,
ADD_LIST_FAILED,
DELETE_LIST_BEGINS,
DELETE_LIST_SUCCEED,
DELETE_LIST_FAILED,
GET_LIST_EXISTING_ITEMS_BEGINS,
GET_LIST_EXISTING_ITEMS_SUCCEED,
GET_LIST_EXISTING_ITEMS_FAILED,
ADD_ITEM_BEGINS,
ADD_ITEM_SUCCEED,
ADD_ITEM_FAILED,
TOGGLE_ITEM_BEGINS,
TOGGLE_ITEM_SUCCEED,
TOGGLE_ITEM_FAILED,
DELETE_ITEM_BEGINS,
DELETE_ITEM_SUCCEED,
DELETE_ITEM_FAILED,
SET_VISIBILITY_FILTER,
 } from './types'


/************************************************************     ACTION CREATORS      **************************************************************/



const getListsBegins = () => {
    return {
        type:GET_USER_EXISTING_LISTS_BEGINS
    }
}

const getListsSuccess = (items,listId) => {
    return {
        type:GET_USER_EXISTING_LISTS_SUCCEED,
        payload:{

            listId,
            items
        }
    }
}

const getListsFailure = () => {
    return {
        type:GET_USER_EXISTING_LISTS_FAILED
    }
}

const addListBegins = () => {
    return {
        type:ADD_LIST_BEGINS
    }
}


const addListSuccess = (newList) => {
    return {
        type:ADD_LIST_SUCCEED,
        payload:{
            newList,
        }
        
        
    }
}

const addListFailure = () => {
    return {
        type:ADD_LIST_FAILED
    }
}


const deleteListBegins = () => {
    return {
        type:DELETE_LIST_BEGINS
    }
}


const deleteListSuccess = () => {
    return {
        type:DELETE_LIST_SUCCEED
    }
}

const deleteListFailure = () => {
    return {
        type:DELETE_LIST_FAILED
    }
}



const getItemsBegins = () => {
    return {
        type:GET_LIST_EXISTING_ITEMS_BEGINS
    }
}


const  getItemsSuccess = (Items,listId) => {
    return {
        type:GET_LIST_EXISTING_ITEMS_SUCCEED,
        payload:{
            Items,
            listId
        }
        
    }
}

const  getItemsFailure = () => {
    return {
        type:GET_LIST_EXISTING_ITEMS_FAILED
    }
}


const addItemBegins = () => {
    return {
        type:ADD_ITEM_BEGINS
    }
}


const  addItemSuccess = (newItem) => {
    return {
        type:ADD_ITEM_SUCCEED,
        payload:{

            newItem,
            
        }
    }
}

const  addItemFailure = () => {
    return {
        type:ADD_ITEM_FAILED
    }
}



const toggleItemBegins = () => {
    return {
        type:TOGGLE_ITEM_BEGINS
    }
}


const  toggleItemSuccess = () => {
    return {
        type:TOGGLE_ITEM_SUCCEED
    }
}

const  toggleItemFailure = () => {
    return {
        type:TOGGLE_ITEM_FAILED
    }
}



const deleteItemBegins = () => {
    return {
        type:DELETE_ITEM_BEGINS
    }
}


const  deleteItemSuccess = () => {
    return {
        type:DELETE_ITEM_SUCCEED
    }
}

const  deleteItemFailure = () => {
    return {
        type:DELETE_ITEM_FAILED
    }
}



/***********************************************************    ACTION  CALLERS     *******************************************************************/



const baseURL = 'http://10.0.2.2:3000'

export const getExistingLists =(userId) =>{
    return dispatch =>{
        dispatch(getListsBegins())
        fetch(`${baseURL}/users/${userId}/lists`)
        
        .then(response =>{if(response.ok){return response.json()}})
        .then((result) => dispatch(getListsSuccess(result)))
        .catch(dispatch(getListsFailure()))
    }
}


export const addList =(userId,listName,onSuccess) =>{
    return dispatch =>{
        dispatch(addListBegins())
        fetch(`${baseURL}/users/${userId}/lists`,{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                
                    userId:userId,
                    title:listName,
                    
                  
              })
        })
        .then(response =>{if(response.ok){return response.json()}})
        .then((result) => {dispatch(addListSuccess(result)); onSuccess()})
        .catch(dispatch(addListFailure()))

    }
}

export const deleteList =() =>{
    return dispatch =>{

    }
}


export const getExistingItems = (userId , listId  ) =>{
    return dispatch =>{
        dispatch(getListsBegins())
        fetch(`${baseURL}/lists/${listId}/items?userId=${userId}`)
        
        .then(response =>{if(response.ok){return response.json()}})
        .then((result) => dispatch(getItemsSuccess(result, listId)))
        .catch(dispatch(getItemsFailure()))
    }
}


export const addItem = (userId , listId , newItem , onSuccess) => {
    return dispatch => {
        dispatch(addListBegins())
        fetch(`${baseURL}/lists/${listId}/items?userId=${userId}`,{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                
                userId:userId,
                    listId:listId,
                    title:newItem,
                    isCompleted:false
                  
              })
        })
        .then(response =>{if(response.ok){return response.json()}})
        .then((result) => {dispatch(addItemSuccess(result)); onSuccess()})
        .catch(dispatch(addItemFailure()))
    }
}


export const toggleItem = (userId , listId , previousStatus , onSuccess ) => {
    return dispatch => {
dispatch(toggleItemBegins())
fetch(`${baseURL}/lists/${listId}/items?userId=${userId}`,{
    method:'PATCH',
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify({
        isCompleted:!previousStatus
    })

}).then(response=> { if(response.ok){return response.json()}})
.then(result => {dispatch(toggleItemSuccess(result)); onSuccess() })
.catch(e=>dispatch(toggleItemFailure()))

    }
}



export const deleteItem = () => {
    return dispatch => {

    }
}



export const setVisibilityStatus = (filter) =>{
    return {
        type:SET_VISIBILITY_FILTER,
        filter
    }
}
