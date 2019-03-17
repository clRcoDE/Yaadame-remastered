
import React from 'react'
import AntIcons from 'react-native-vector-icons/AntDesign'
import OctIcons from 'react-native-vector-icons/Octicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
export default drawerData = [
    {
        icon: <OctIcons name={'tasklist'} size={25}  color={'#333'}   />,
        title: 'Lists',
        path: 'Lists',
        id:'1'

    },
    {
        icon: <AntIcons name={'setting'} size={25}  color={'#333'} />,
        title: 'Setting',
        path: 'Settings',
        id:'2'

    },
    {
        icon: <EvilIcons name={'exclamation'}  size={25}  color={'#333'} />  ,
        title: 'About us',
        path: 'About',
        id:'3'

    },

]