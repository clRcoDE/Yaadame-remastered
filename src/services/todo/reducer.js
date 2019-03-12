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
    loading: false,
    lists: []
}

export default todo = (state = initialState, action) => {

    switch (action.type) {

        case ADD_LIST_BEGINS:
            return {
                ...state,
                loading: true
            }
        case ADD_LIST_SUCCEED:
            return {
                loading: false,
                lists: [
                    ...state.lists,
                    action.newList
                ]
            }
        case ADD_LIST_FAILED:
            return {
                ...state,
                loading: false,

            }


            case GET_USER_EXISTING_LISTS_BEGINS:
            return{
                ...state,
                loading:true
            }


            case GET_USER_EXISTING_LISTS_SUCCEED:

            return{
                loading:false,
                lists:action.existingLists
            }
            case GET_USER_EXISTING_LISTS_FAILED:
            return {
                ...state,
                loading : false,
            }



        case DELETE_LIST_BEGINS:
            return {
                ...state,
                loading: true
            }
        case DELETE_LIST_SUCCEED:
            const indexDel1 = state.lists.findIndex(({ id }) => id === action.listId)
            return {
                loading: false,
                lists: [
                    ...state.lists.slice(0, indexDel1),
                    ...state.lists.slice(indexDel1 + 1)
                ]
            }

        case DELETE_LIST_FAILED:
            return {
                ...state,
                loading: false
            }
        case ADD_ITEM_BEGINS:
            const indexAdd1 = state.lists.findIndex(({ id }) => id === action.listId)

            return {
                ...state,
                lists: [
                    ...state.lists.slice(0, indexAdd1),
                    {
                        ...state.lists[indexAdd1],
                        loading: true
                    },
                    ...state.lists.slice(indexAdd1 + 1)
                ]
            }
        case ADD_ITEM_SUCCEED:
            const indexAdd2 = state.lists.findIndex(({ id }) => id === action.listId)
            return {
                ...state,
                lists: [
                    ...state.lists.slice(0, indexAdd2),
                    {
                        loading: false,
                        items: [
                            ...state.lists[indexAdd2].items,
                            action.newItem
                        ]
                    },
                    ...state.lists.slice(indexAdd2 + 1)
                ]
            }
        case ADD_ITEM_FAILED:
            const indexAdd3 = state.lists.findIndex(({ id }) => id === action.listId)

            return {
                ...state,
                lists: [
                    ...state.lists.slice(0, indexAdd3),
                    {
                        ...state.lists[indexAdd3],
                        loading: false
                    },
                    ...state.lists.slice(indexAdd3 + 1)
                ]
            }

        case TOGGLE_ITEM_BEGINS:
        const listIndexTog1 = state.lists.findIndex(({ id }) => id === action.listId)
        const itemIndexTog1 = state.lists[listIndexTog1].items.findIndex(({ id }) => id === action.itemId)

        return {
            ...state,
            lists: [
                ...state.lists.slice(0, listIndexTog1),
                {
                    ...state.lists[listIndexTog1],
                    items: [
                        ...state.lists[listIndexTog1].items.slice(0, itemIndexTog1),
                        {
                            ...state.lists[listIndexTog1].items[itemIndexTog1],
                            loading:true
                        },
                        ...state.lists[listIndexTog1].items.slice(itemIndexTog1 + 1)
                    ]
                },
                ...state.lists.slice(listIndexTog1 + 1)
            ]
        }
        case TOGGLE_ITEM_SUCCEED:
            const listIndexTog2 = state.lists.findIndex(({ id }) => id === action.listId)
            const itemIndexTog2 = state.lists[listIndexTog2].items.findIndex(({ id }) => id === action.itemId)

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
                                isCompleted: !state.lists[listIndexTog2].items[itemIndexTog2].isCompleted
                            },
                            ...state.lists[listIndexTog2].items.slice(itemIndexTog2 + 1)
                        ]
                    },
                    ...state.lists.slice(listIndexTog2 + 1)
                ]
            }




        case TOGGLE_ITEM_FAILED:
        const listIndexTog3 = state.lists.findIndex(({ id }) => id === action.listId)
        const itemIndexTog3 = state.lists[listIndexTog3].items.findIndex(({ id }) => id === action.itemId)

        return {
            ...state,
            lists: [
                ...state.lists.slice(0, listIndexTog3),
                {
                    ...state.lists[listIndexTog3],
                    items: [
                        ...state.lists[listIndexTog3].items.slice(0, itemIndexTog3),
                        {
                            ...state.lists[listIndexTog3].items[itemIndexTog3],
                            loading:false
                        },
                        ...state.lists[listIndexTog3].items.slice(itemIndexTog3 + 1)
                    ]
                },
                ...state.lists.slice(listIndexTog3 + 1)
            ]
        }


        case DELETE_ITEM_BEGINS:

        const listIndexDel1 = state.lists.findIndex(({ id }) => id === action.listId)
        const itemIndexDel1 = state.lists[listIndexDel1].items.findIndex(({ id }) => id === action.itemId)

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
                            loading:true
                        },
                        ...state.lists[listIndexDel1].items.slice(itemIndexDel1 + 1)
                    ]
                },
                ...state.lists.slice(listIndexDel1 + 1)
            ]
        }

        case DELETE_ITEM_SUCCEED:
        const listIndexDel2 = state.lists.findIndex(({ id }) => id === action.listId)
        const itemIndexDel2 = state.lists[listIndexDel2].items.findIndex(({ id }) => id === action.itemId)

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
        const listIndexDel3 = state.lists.findIndex(({ id }) => id === action.listId)
        const itemIndexDel3 = state.lists[listIndexDel3].items.findIndex(({ id }) => id === action.itemId)

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
                            loading:false
                        },
                        ...state.lists[listIndexDel3].items.slice(itemIndexDel3 + 1)
                    ]
                },
                ...state.lists.slice(listIndexDel3 + 1)
            ]
        }
        case SET_VISIBILITY_FILTER:
        const listIndexSet = state.lists.findIndex(({ id }) => id === action.listId)
        return {
            ...state,
            lists: [
                ...state.lists.slice(0, listIndexSet),
                {
                    ...state.lists[listIndexSet],
                    filter:action.filter
                },
                ...state.lists.slice(listIndexSet + 1)
            ]
        }

        default:
            return state
    }

}