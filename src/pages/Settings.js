import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Animated, Easing } from 'react-native'
import { connect } from 'react-redux'

import { changeTheme } from '../services/setting/actions'

import Header from '../components/Header'
import { ThemeContext } from '../components/ThemeContext'



import IonIcons from 'react-native-vector-icons/Ionicons'
import FeatherIcons from 'react-native-vector-icons/Feather'
class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switchTranslate: new Animated.Value(2)
    }
  }

  themer = () => {
    this.props.changeTheme()
    this.animateSwitchCircle()
  }

  animateSwitchCircle = () => {
if(this.state.switchTranslate._value === 2 ){
    Animated.timing(this.state.switchTranslate, {
      toValue: 32,
      duration: 500,
      // easing: Easing.out()
    }).start()
  }else{
    Animated.timing(this.state.switchTranslate, {
      toValue: 2,
      duration: 500,
      // easing: Easing.out()
    }).start()
  }
  }
  render() {

    let theme = this.context
    let headerIcon = <IonIcons size={35} color={theme.icons} name={'ios-list'} />
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]} >
        <Header headerTitle={'Settings'} headerIcon={headerIcon} navigation={this.props.navigation} />
        <View style={styles.body}>
          <View style={styles.togglerBox}>
            <FeatherIcons size={30} color={theme.fontcolor} name={'moon'} />
            <TouchableOpacity style={[styles.switchBox, { backgroundColor:theme.fontcolor }]} onPress={this.themer.bind(this)} >
              <Animated.View style={[styles.movingCircle, {backgroundColor:theme.background ,transform: ([{ translateX: this.state.switchTranslate }]) }]} ></Animated.View>

            </TouchableOpacity>
            <FeatherIcons size={30} color={theme.fontcolor} name={'sun'} />
          </View>

        </View>
      </View>
    )
  }
}

Settings.contextType = ThemeContext


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    // borderWidth: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  body: {
    flex: 1,
    borderColor: 'green',
    // borderWidth: 2,
    justifyContent: 'center',
  },
  togglerBox: {
    height: 100,
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  switchBox: {
    width: 60,
    height: 30,
    borderRadius: 50,
    margin: 5,
    justifyContent: 'center',

  },
  movingCircle:{
    width:25,
    height:25,
    borderRadius:50,

  }
})


const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, { changeTheme })(Settings)