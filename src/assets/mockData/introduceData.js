import AntIcon from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'

import React , {Component} from 'react'




export const introduce = [

    {
        icon:<SimpleLineIcons  color={'#4286f4'} size={125} name={'check'} />,
        text:"Welcome to Yaadame! , Yaadame is everything you need from a Todo App : Simple . Capable . Performant ",
        button:"next",
        id:"1"
    },
    {
        icon:<AntIcon color={'#4286f4'} size={150} name={'cloudo'} />,
        text:"Completely cloud connected , you never miss a shot ;)",
        button:"next",
        id:"2"
    },
    {
        icon:<EntypoIcon  color={'#4286f4'} size={150} name={'add-to-list'} />,
        text:"you can categorize your Todos easily with lists",
        button:"next",
        id:"3"
    },{
            icon:<AntIcon color={'#4286f4'} size={150} name={'arrowdown'}/>,
            text:"First Enter Your Name",
            button:"I'm Done ",
            id:"4"
    },{
        icon:<AntIcon color={'#4286f4'} size={150} name={'exclamationcircleo'} />,
        text:"Let's Dive Into Yaadame !",
        button:"start",
        id:"5"
    }
]