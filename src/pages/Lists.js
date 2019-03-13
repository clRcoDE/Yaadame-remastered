import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity , FlatList} from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'

import {connect} from 'react-redux'
 class Lists extends Component {
  drawer =()=>{
    const  {navigation} = this.props

   navigation.openDrawer()
  }
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.headerWrapper}>
        <TouchableOpacity  style={styles.menuListButton} onPress={this.drawer.bind(this)}>
        <IonIcons size={50} color={'#eee'} name={'ios-list'}/>
        </TouchableOpacity>
        <View style={styles.headerTextWrapper}>
        <Text style={styles.headerText} >Lists</Text>
        </View>
        </View>
        <View style={styles.listsWrapper}>
        <FlatList />
        
        </View>
        <View style={styles.footerWrapper}></View>

        
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  },
  headerWrapper:{
    // flex:5,
    height:200,
    backgroundColor:'blue',
    
    justifyContent: 'flex-end',
    alignItems:'flex-start',
  },
  listsWrapper:{
    flex:8,
    backgroundColor:'red'

  },
  footerWrapper:{
    flex:2,
    backgroundColor:'green'
  },
  menuListButton:{
    position: 'absolute',
    top:0,
    left:0,
    marginLeft:20,
    marginTop:15
  },
  headerTextWrapper:{
    borderWidth:3,
    borderColor: '#fff',
    marginLeft:20,
  },
  headerText:{
    fontSize:35,
    color:'#eee',
    fontWeight: '600',
  }
})
const mapStateToProps = (state) => {
  return {
 lists:state.todoReducer
  }
}
export default connect(mapStateToProps,{})(Lists)