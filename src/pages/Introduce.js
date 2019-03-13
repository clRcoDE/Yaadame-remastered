import React, { Component , PureComponent} from 'react'
import { Text, StyleSheet, View , FlatList , Dimensions ,Platform , TouchableOpacity , Animated} from 'react-native'

import {introduce} from '../assets/mockData/introduce'


const dim = Dimensions.get('window')
export default class Introduce extends PureComponent {

constructor(props){
  super(props);
  this.state={
    scrollX: new Animated.Value(0)
  }
}

toNext=(id)=>{
  const {navigation} = this.props
// if(id === "4"){
navigation.navigate('Home')
// }
}
  render() {
    let position = Animated.divide(this.state.scrollX, dim.width*(80/100));

    
    return (
      <View style={styles.container} >
        <View style={styles.introduceListWrapper}>
        <FlatList 
        data={introduce}
        keyExtractor={(item)=>item.id}
        horizontal={true}
        pagingEnabled={true}
        onScroll={ ({ nativeEvent }) => { this.setState({ scrollX: nativeEvent.contentOffset.x }, )}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
        <View style={styles.introducePage} >
        <View style={styles.iconWrapper}>{item.icon}</View>
        <View style={styles.textWrapper}><Text style={styles.introduceText} >{item.text}</Text></View>
        <View style={styles.nextWrapper}><TouchableOpacity style={styles.TouchableStyles} onPress={()=>this.toNext(item.id)} ><Text style={styles.buttonText} >{item.button}</Text></TouchableOpacity></View>
        <View style={styles.pagingdotsWrapper}>
        {introduce.map((dots, i)=>{
      let opacity = position.interpolate({
      inputRange: [i-1, i, i+1],
      outputRange: [0.4 , 1, 0.4],
      extrapolate: 'clamp'
    });
     return(<Animated.View  key={i} style={[{ opacity},styles.dotsStyle]}/>)
        })}
        
        </View>
       
       </View>)
        }
        />
        </View>
        
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor:'#4286f4'
  },
  introduceListWrapper:{
    flex:1,
    margin:dim.width*(10/100),
    borderRadius:8,
    // borderWidth:1,
    // borderColor:'blue',
    
    // paddingVertical: 50,
  },
  introducePage:{
    // borderWidth:1,
    borderColor:'red',
    width:dim.width*(80/100),
    backgroundColor:'#eee',
    // borderRadius:8

    // marginHorizontal: 50,
  },
  iconWrapper:{
    flex:12,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:2
  },
  textWrapper:{
    flex:6,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:2,
    paddingHorizontal:25
  },
  introduceText:{
    fontWeight:'600',
    fontFamily: Platform.OS === 'ios' ? 'San Fransico' : 'Roboto',
    textAlign:'center'
  },
  nextWrapper:{
flex:2,
// borderWidth:2,
justifyContent: 'center',
alignItems: 'center',
  },
  pagingdotsWrapper:{
flex:1,
justifyContent: 'center',
alignItems: 'center',
flexDirection: 'row',
  },
  TouchableStyles:{
    backgroundColor:'rgba(66, 134, 255,1.0)',
    borderRadius:4,
    paddingVertical:8,
    paddingHorizontal:12
  },
  buttonText:{
color:'#eee',
fontWeight:'600'
  },
  dotsStyle:{
    width: 7,
    height: 7,
    marginHorizontal:2.5,
    borderRadius: 100,
    backgroundColor: "#2556d1"
    
  }
})
