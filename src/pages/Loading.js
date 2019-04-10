import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator, AsyncStorage, Alert , Animated } from 'react-native'

export default class Loading extends Component {


constructor(props){
  super(props)
  this.state={
    fader : new Animated.Value(1)
  }
}

  goto = async () => {
    const { navigation } = this.props
    // try {
      // const firstRun = await AsyncStorage.getItem('RUN')
      // if (firstRun !== null) {
        // navigation.navigate('Home')

      // } else {
        navigation.navigate('Introduce')
      // }
      
    // } catch (error) {
    //   Alert.alert(` Async Storage Error : ${error}  `)
    // }

  }

  startLogo(){
    Animated.timing(this.state.fader,{
      toValue:0,
      timing:400,
      useNativeDriver:true,
      delay:400
    }).start()
  }
  componentDidMount() {
    setTimeout(() => this.goto() , 800 )
    this.startLogo()
    // this.props.navigation.navigate('Lists')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper} >

          <View style={styles.introTextWrapper}>
            <Animated.Text style={[styles.introText,{opacity:this.state.fader}]} >Yaadame!</Animated.Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#2060ff'
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 75
  },
  introText: {
    color: '#fff',
    fontSize: 35,
    fontWeight: '600',
    letterSpacing: 1,
    fontFamily:'cursive'
  }
})
