

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
        ListsScreen:Lists,
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
        ListsRoute:ListsStack
    },{
        initialRouteName:'ListsRoute',
        drawerPosition:'right'
    }
)



const  AuthSwitch = createSwitchNavigator(
    {
        Introduce:Introduce,
        Home:HomeDrawerStack
    }
)


const AppSwitchNavigator = createSwitchNavigator(
    {
        LoadingPage:Loading,
        Auth:AuthSwitch
    }

)


export default createAppContainer(AppSwitchNavigator)