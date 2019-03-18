import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity } from 'react-native'
import {ThemeContext} from './ThemeContext'
export default class Header extends Component {
  render() {
    let theme = this.context
    return (
      <View style={styles.container} >
        <View style={[styles.headerWrapper,{borderBottomColor:theme.foreground}]}>
          <TouchableOpacity style={styles.menuListButton} onPress={()=>{}}>
            {this.props.icon}
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

        flex:1,    
    // justifyContent: 'center',
    backgroundColor:'transparent'
    },
    headerWrapper: {
      // flex:5,
      height: 150,
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
