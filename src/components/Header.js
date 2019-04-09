import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity } from 'react-native'
import {ThemeContext} from './ThemeContext'

import Ionicon from 'react-native-vector-icons/Ionicons'
export default class Header extends Component {


  ButtonAction=()=>{
    const { navigation } = this.props
    if(this.props.buttonAction === "back"){
      navigation.goBack()
    }else{
    navigation.openDrawer()
    }
  }
  render() {
    let theme = this.context
    return (
      <View style={styles.container} >
        <View style={[styles.headerWrapper,{borderBottomColor:theme.foreground}]}>
          <TouchableOpacity style={styles.menuListButton} onPress={this.ButtonAction.bind(this)}>
            <Ionicon size={35} name={this.props.headerIconName} color={theme.icons}/>
          </TouchableOpacity>
          <View style={styles.headerTextWrapper}>
            <Text style={[styles.headerText,{color:this.context.fontcolor}]} >{this.props.headerTitle}</Text>
          </View>
        </View>
      </View>
    )
  }
}


Header.contextType = ThemeContext



const styles = StyleSheet.create({


    container:{

        // flex:1,    
    // justifyContent: 'center',
    backgroundColor:'transparent',
    height:200
    },
    headerWrapper: {
      flex:1,
      backgroundColor: 'transparent',
      borderBottomWidth:3,
      borderBottomColor:'rgba(33, 114, 224,0.65)',
  
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    },
    menuListButton: {
      position: 'absolute',
      top: 0,
      left: 0,
      marginLeft: 16,
      marginTop: 20,
      width:30,
      height:30,
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth:1
    },
    headerTextWrapper: {
      // borderWidth:3,
      borderColor: '#fff',
      marginLeft: 20,
      marginBottom:10
    },
   headerText: {
      fontSize: 35,
      color: '#222',
      fontWeight: '600',
    },
})
