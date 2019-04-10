import React, { Component, PureComponent  } from 'react'
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Platform,
  TouchableOpacity,
  Animated,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  Activity,
  StatusBar
} from 'react-native'

import { introduce } from '../assets/mockData/introduceData'
import { createUser } from '../services/user/actions'

import { connect } from 'react-redux'

const dim = Dimensions.get('window')
class Introduce extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      textInput: null,
      scrollX: new Animated.Value(0),
      IntScrollX: 0,
      inputError:null,
      fader: new Animated.Value(0)


    }
  }



  setText = (text) => {
    this.setState({ textInput: text })
  }



  toNext = (id, i) => {
    let numId = parseInt(id)
    const { navigation } = this.props


    if (numId === 4) {

if(!this.state.textInput){
  this.setState({inputError:'please fill in username field'})
  return
}
      onSuccess =()=>{
        navigation.navigate('Home')
      }
      this.props.createUser(this.state.textInput, onSuccess)
      

    }
    else {

      this.flatlist.scrollToIndex({ index: i + 1 })

    }

  }
  startIntroducer(){
    Animated.timing(this.state.fader,{
      toValue:1,
      timing:50,
      delay:300,
      useNativeDriver:true
    }).start()
  }

  componentWillMount(){
    this.startIntroducer()
  }



  render() {
    let position = Animated.divide(this.state.scrollX, dim.width * (80 / 100));

    let IntPosition = Math.round(this.state.IntScrollX / dim.width * 1.25)


    return (
      <KeyboardAvoidingView style={styles.container} enabled   >
      <StatusBar backgroundColor="#2060ff" barStyle="light-content" />
        <Animated.View style={[styles.introduceListWrapper,{opacity:this.state.fader}]}>
          <FlatList
            data={introduce}
            keyboardShouldPersistTaps={'handled'}
            keyExtractor={(item) => item.id}
            horizontal={true}
            pagingEnabled={true}
            ref={ref => this.flatlist = ref}
            onScroll={({ nativeEvent }) => { this.setState({ scrollX: nativeEvent.contentOffset.x, IntScrollX: nativeEvent.contentOffset.x }) }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View style={styles.introducePage} >
                <View style={styles.iconWrapper}>{item.icon}</View>
                <View style={styles.textWrapper}><Text style={styles.introduceText} >{item.text}</Text></View>
                {item.id === "4" &&
                  <View style={styles.inputWrapper}>
                  {!!this.state.inputError && <View style={styles.errorMessage} ><Text style={styles.errorMessageText} >{this.state.inputError}</Text></View>}
                    <TextInput    style={styles.textInputStyle}  onChangeText={text => this.setText(text)} placeholder={'your name here'}  />

                  </View>}
                <View style={styles.nextWrapper}>
                  <TouchableOpacity style={styles.TouchableStyles} onPress={() => { this.toNext(item.id, IntPosition) }} >
                    <Text style={styles.buttonText} >{item.button}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.pagingdotsWrapper}>
                  {introduce.map((dots, i) => {
                    let opacity = position.interpolate({
                      inputRange: [i - 1, i, i + 1],
                      outputRange: [0.4, 1, 0.4],
                      extrapolate: 'clamp'
                    });
                    return (<Animated.View key={i} style={[{ opacity }, styles.dotsStyle]} />)
                  })}

                </View>

              </View>)
            }
          />
        </Animated.View>

      </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2060ff'
  },
  introduceListWrapper: {
    flex: 1,
    margin: dim.width * (10 / 100),
    borderRadius: 8,
    // borderWidth:1,
    // borderColor:'blue',

    // paddingVertical: 50,
  },
  introducePage: {
    // borderWidth:1,
    borderColor: 'red',
    width: dim.width * (80 / 100),
    backgroundColor: '#eee',
    // borderRadius:8

    // marginHorizontal: 50,
  },
  iconWrapper: {
    flex: 6.5,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:2
  },
  textWrapper: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:2,
    paddingHorizontal: 35
  },
  introduceText: {
    fontWeight: '400',
    fontFamily: Platform.OS === 'ios' ? 'San Fransico' : 'Roboto',
    textAlign: 'center',
    fontSize:17,
    color:'#454545',
    lineHeight:26
  },
  errorMessage:{
paddingVertical:2,
paddingHorizontal:8,
borderRadius:5,
backgroundColor:'#ff2634'
  },
  errorMessageText:{
    color:'#f5f5f5',
    fontWeight:'800',
    fontSize:16
  },
  nextWrapper: {
    flex: 2,
    // borderWidth:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagingdotsWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  TouchableStyles: {
    backgroundColor: 'rgba(66, 134, 255,1.0)',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12
  },
  buttonText: {
    color: '#eee',
    fontWeight: '600'
  },
  dotsStyle: {
    width: 7,
    height: 7,
    marginHorizontal: 2.5,
    borderRadius: 100,
    backgroundColor: "#2556d1"

  },
  inputWrapper: {
    flex: 3,
    // backgroundColor:'#333',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:3,
    // borderColor:'red'
  },
  textInputStyle:{
    height:35
  }
})


const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { createUser })(Introduce)