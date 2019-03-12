

import {combineReducers} from 'redux'



import todo from './todo/reducer'
import user from './user/reducer'
import setting from './setting/reducer'


export default  rootReducer =  combineReducers({
    todoReducer:todo,
    userReducer:user,
    settingReducer:setting
})
