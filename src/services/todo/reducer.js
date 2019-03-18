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

const initialState = {
    
    lists: []
}

export default todo = (state = initialState, action) => {

    switch (action.type) {

        case ADD_LIST_BEGINS:
            return state

        case ADD_LIST_SUCCEED:
            return {
                ...state,
                lists: [
                    ...state.lists,
                    {
                        ...action.payload.newList,
                        items: []
                    }
                ]
            }
        case ADD_LIST_FAILED:
            return state


        case GET_USER_EXISTING_LISTS_BEGINS:
            return {
                ...state,
            }


        case GET_USER_EXISTING_LISTS_SUCCEED:

            return {
                lists: action.payload.existingLists
            }
        case GET_USER_EXISTING_LISTS_FAILED:
            return {
                ...state,
            }



        case DELETE_LIST_BEGINS:
            return {
                ...state,
            }
        case DELETE_LIST_SUCCEED:
            const indexDel1 = state.lists.findIndex(({ id }) => id === action.payload.listId)
            return {
                lists: [
                    ...state.lists.slice(0, indexDel1),
                    ...state.lists.slice(indexDel1 + 1)
                ]
            }

        case DELETE_LIST_FAILED:
            return {
                ...state,
            }

            case GET_LIST_EXISTING_ITEMS_BEGINS:
            return state


    case GET_LIST_EXISTING_ITEMS_SUCCEED:

    const indexGet1 = state.lists.findIndex(({ id }) => id === action.payload.listId)
    
    return {
        lists:[
            ...state.lists.slice(0,indexGet1),
            {
                ...state.lists[indexGet1],
                items:action.payload.items
            },
            ...state.lists.slice(indexGet1)
        ]
    }

    case GET_LIST_EXISTING_ITEMS_FAILED:
    return state


        case ADD_ITEM_BEGINS:


            return state


        case ADD_ITEM_SUCCEED:
            const indexAdd2 = state.lists.findIndex(({ id }) => id == action.payload.newItem.listId)
            return {
                ...state,
                
                lists: [
                    ...state.lists.slice(0, indexAdd2),
                    {
                        ...state.lists[indexAdd2],
                        
                        items: [
                            ...state.lists[indexAdd2].items,
                            action.payload.newItem
                        ],
                        

                    },

                    ...state.lists.slice(indexAdd2 + 1),
                    

                ],
            }
        case ADD_ITEM_FAILED:
            return state

        case TOGGLE_ITEM_BEGINS:
            return state
        case TOGGLE_ITEM_SUCCEED:
            const listIndexTog2 = state.lists.findIndex(({ id }) => id == action.payload.editedItem.listId)
            const itemIndexTog2 = state.lists[listIndexTog2].items.findIndex(({ id }) => id == action.payload.editedItem.id)

            return {
                ...state,
                lists: [
                    ...state.lists.slice(0, listIndexTog2),
                    {
                        ...state.lists[listIndexTog2],
                        items: [
                            ...state.lists[listIndexTog2].items.slice(0, itemIndexTog2),
                            {
                                ...state.lists[listIndexTog2].items[itemIndexTog2],
                                isCompleted: action.payload.editedItem.isCompleted
                            },
                            ...state.lists[listIndexTog2].items.slice(itemIndexTog2 + 1)
                        ]
                    },
                    ...state.lists.slice(listIndexTog2 + 1)
                ]
            }




        case TOGGLE_ITEM_FAILED:
            return state

        case DELETE_ITEM_BEGINS:

            const listIndexDel1 = state.lists.findIndex(({ id }) => id === action.payload.listId)
            const itemIndexDel1 = state.lists[listIndexDel1].items.findIndex(({ id }) => id === action.payload.itemId)

            return {
                ...state,
                lists: [
                    ...state.lists.slice(0, listIndexDel1),
                    {
                        ...state.lists[listIndexDel1],
                        items: [
                            ...state.lists[listIndexDel1].items.slice(0, itemIndexDel1),
                            {
                                ...state.lists[listIndexDel1].items[itemIndexDel1],
                            },
                            ...state.lists[listIndexDel1].items.slice(itemIndexDel1 + 1)
                        ]
                    },
                    ...state.lists.slice(listIndexDel1 + 1)
                ]
            }

        case DELETE_ITEM_SUCCEED:
            const listIndexDel2 = state.lists.findIndex(({ id }) => id === action.payload.listId)
            const itemIndexDel2 = state.lists[listIndexDel2].items.findIndex(({ id }) => id === action.payload.itemId)

            return {
                ...state,
                lists: [
                    ...state.lists.slice(0, listIndexDel2),
                    {
                        ...state.lists[listIndexDel2],
                        items: [
                            ...state.lists[listIndexDel2].items.slice(0, itemIndexDel2),

                            ...state.lists[listIndexDel2].items.slice(itemIndexDel2 + 1)
                        ]
                    },
                    ...state.lists.slice(listIndexDel2 + 1)
                ]
            }
        case DELETE_ITEM_FAILED:
            const listIndexDel3 = state.lists.findIndex(({ id }) => id === action.payload.listId)
            const itemIndexDel3 = state.lists[listIndexDel3].items.findIndex(({ id }) => id === action.payload.itemId)

            return {
                ...state,
                lists: [
                    ...state.lists.slice(0, listIndexDel3),
                    {
                        ...state.lists[listIndexDel3],
                        items: [
                            ...state.lists[listIndexDel3].items.slice(0, itemIndexDel3),
                            {
                                ...state.lists[listIndexDel3].items[itemIndexDel3],
                            },
                            ...state.lists[listIndexDel3].items.slice(itemIndexDel3 + 1)
                        ]
                    },
                    ...state.lists.slice(listIndexDel3 + 1)
                ]
            }
        case SET_VISIBILITY_FILTER:
            const listIndexSet = state.lists.findIndex(({ id }) => id === action.payload.listId)
            return {
                ...state,
                lists: [
                    ...state.lists.slice(0, listIndexSet),
                    {
                        ...state.lists[listIndexSet],
                        filter: action.payload.filter
                    },
                    ...state.lists.slice(listIndexSet + 1)
                ]
            }

        default:
            return state
    }

}