import React, { Component } from 'react'
import { Text, StyleSheet, View , Dimensions , FlatList , TouchableOpacity } from 'react-native'
import drawerData from '../assets/mockData/drawerData'
import {connect} from 'react-redux'

const dim = Dimensions.get('window')
 class CustomeDrawer extends Component {




navigator=({path})=>{
 const {navigation} = this.props

navigation.navigate(path)


}
  render() {
    return (
      <View style={styles.container} >
      <View style={styles.profileWrapper}>
      <Text  style={styles.userIdText} >{this.props.profile.user.id}</Text></View>
        <View style={styles.listWrapper}>
        <FlatList 
        data={drawerData}
        keyExtractor={item=>item.id}
        renderItem={({item})=>(<View style={styles.navigationElement} >
<TouchableOpacity style={styles.touchableStyles}  onPress={()=>this.navigator(item)}  >


    <View style={styles.touchableWrapper}>
    
    {item.icon}
    <Text style={styles.elementText} >{item.title}</Text>
    </View>


</TouchableOpacity>
        </View>)}
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

    container:{
    //    width:dim.width*(50/100),
    //    height:dim.height*(50/100)
    flex:1
    },
    
    listWrapper:{
        flexDirection: 'row',
        // backgroundColor:'red',
        // borderWidth:2,
        // borderColor:'gold',
        flex:1
    },
    profileWrapper:{
        height:125,
        // backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center',
        margin:20,
        borderBottomColor:'#aaa',
        borderBottomWidth:2
    },
    userIdText:{
        fontFamily:'sans-serif',
        color:'#888',
        fontSize:26,
        fontWeight: '100',
    },
    navigationElement:{
        flexDirection: 'row',
        // width:dim.width*(50/100)
        // borderWidth:2,
    // paddingLeft:20
    },
    touchableStyles:{
        // borderWidth:3,
        width:dim.width*(70/100),
        paddingHorizontal: 20,
        // borderColor:'blue',
        // flexDirection: 'row',
    },
    touchableWrapper:{
        flexDirection: 'row',
        // borderColor:'green',
        // borderWidth:2,
        height:75,
        
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    elementText:{
        paddingLeft:16
    }
    
})

const mapStateToProps=(state)=>{
    return {
        profile:state.userReducer
    }
}
export default  connect(mapStateToProps)(CustomeDrawer)
