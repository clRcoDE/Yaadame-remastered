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

const getListsSuccess = () => {
    return {
        type:GET_USER_EXISTING_LISTS_SUCCEED
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


const addListSuccess = () => {
    return {
        type:ADD_LIST_SUCCEED
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


const  getItemsSuccess = () => {
    return {
        type:GET_LIST_EXISTING_ITEMS_SUCCEED
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


const  addItemSuccess = () => {
    return {
        type:ADD_ITEM_SUCCEED
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




export const getExistingLists =() =>{
    return dispatch =>{

    }
}


export const addList =() =>{
    return dispatch =>{

    }
}

export const deleteList =() =>{
    return dispatch =>{

    }
}


export const getExistingItems = () =>{
    return dispatch => {

    }
}


export const addItem = () => {
    return dispatch => {

    }
}


export const toggleItem = () => {
    return dispatch => {

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
