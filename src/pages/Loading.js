import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator, AsyncStorage, Alert } from 'react-native'

export default class Loading extends Component {

  goto = async () => {
    const { navigation } = this.props
    try {
      const firstRun = await AsyncStorage.getItem('RUN')
      if (firstRun !== null) {
        navigation.navigate('Introduce')

      } else {
        navigation.navigate('Introduce')
      }
    } catch (error) {
      Alert.alert(` Async Storage Error : ${error}  `)
    }

  }
  componentDidMount() {
    setTimeout(() => this.goto() , 2000 )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper} >

          <View style={styles.introTextWrapper}>
            <Text style={styles.introText} >i remember it!</Text>
          </View>
          <View style={styles.loadingCircle}>
            <ActivityIndicator size={'large'} color={"#fff"} animating={true} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'grey'
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
