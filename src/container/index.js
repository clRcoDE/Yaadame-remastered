import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AppContainer from '../routes/index'
import { ThemeContext ,themes } from '../components/ThemeContext'
import {connect } from 'react-redux'
import {store } from '../../App'
  class Container extends Component {
  render() {
    return (
      <ThemeContext.Provider value={this.props.themeConfigue.theme}>
      <AppContainer/>
      </ThemeContext.Provider>
          
      
    )
  }
}

// const styles = StyleSheet.create({


//     container:{
//         flex:1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// })

const mapStateToProps=(state)=>{
  return{
    themeConfigue:state.settingReducer
  }
}

export default connect(mapStateToProps)(Container)