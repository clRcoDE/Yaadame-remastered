import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Lists extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text> Lists </Text>

        
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  }
})

