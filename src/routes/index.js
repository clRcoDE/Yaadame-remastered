

import {createAppContainer , createSwitchNavigator , createStackNavigator , createDrawerNavigator} from 'react-navigation'

// import { View , Text } from 'react-native'

import About from '../pages/About'
import Loading from '../pages/Loading'
import Lists from '../pages/Lists'
import Settings from '../pages/Settings'
import Items from '../pages/Items'
import Introduce from  '../pages/Introduce'


const ListsStack = createStackNavigator(
    {
        Lists:Lists,
        Items:Items
    },
    {
        mode:'modal',
        headerMode:'none'
    }
)



const HomeDrawerStack = createDrawerNavigator(
    {
        About:About,
        Settings:Settings,
        ListsPath:ListsStack
    },{
        initialRouteName:'ListsPath',
    }
)



const  AuthStack = createSwitchNavigator(
    {
        Introduce:Introduce,
        Home:HomeDrawerStack
    }
)


const AppSwitchNavigator = createSwitchNavigator(
    {
        LoadingPage:Loading,
        Auth:AuthStack
    }

)


export default createAppContainer(AppSwitchNavigator)