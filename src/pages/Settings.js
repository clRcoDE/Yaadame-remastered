import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

import { changeTheme } from '../services/setting/actions'

import Header from '../components/Header'
import {ThemeContext} from '../components/ThemeContext'



 class Settings extends Component {



  themer=()=>{
this.props.changeTheme()
  }
  render() {
    let theme = this.context
    return (
      <View style={[styles.container,{backgroundColor:theme.background}]} >
        <Header headerTitle={'Settings'}  />
        <TouchableOpacity style={styles.themeTouchable}  onPress={this.themer.bind(this)}>
        <Text>change theme</Text>
        </TouchableOpacity>


      </View>
    )
  }
}

Settings.contextType = ThemeContext


const styles = StyleSheet.create({
  container:{
    flex:1
    // flex:1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  themeTouchable:{
    // height:50,
    // width:50,
    padding:25,
    borderRadius:50,
    backgroundColor:'red'
  }
})


const mapStateToProps =(state)=>{
return{
  state
}
}

export default connect(mapStateToProps,{changeTheme})(Settings)