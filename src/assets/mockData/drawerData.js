
import React from 'react'
import AntIcons from 'react-native-vector-icons/AntDesign'
import OctIcons from 'react-native-vector-icons/Octicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import {ThemeContext} from '../../components/ThemeContext'

export default drawerData = [
    {
        icon:<ThemeContext.Consumer>{(theme)=>(<OctIcons name={'tasklist'} size={25}  color={theme.fontcolor} />)}</ThemeContext.Consumer> ,
        title: 'Lists',
        path: 'Lists',
        id:'1'

    },
    {
        icon: <ThemeContext.Consumer>{(theme)=>(<AntIcons name={'setting'} size={25}  color={theme.fontcolor} />)}</ThemeContext.Consumer>,
        title: 'Setting',
        path: 'Setting',
        id:'2'

    },
    {
        icon: <ThemeContext.Consumer>{(theme)=>(<EvilIcons name={'exclamation'}  size={25}  color={theme.fontcolor} />)}</ThemeContext.Consumer>  ,
        title: 'About us',
        path: 'About',
        id:'3'

    },

]