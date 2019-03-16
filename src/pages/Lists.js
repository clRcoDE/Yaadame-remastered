import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity , FlatList , TextInput, Keyboard} from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import {connect} from 'react-redux'
import {addList} from '../services/todo//actions'
 class Lists extends Component {


   constructor(props){
     super(props)
     this.state={
       isShowButtons:false,
       textInput:null
     }
   }

   hideButtons=()=>{
     this.setState({isShowButtons:false})
   }
   showButtons=()=>{
     this.setState({isShowButtons:true})
   }
   clearInput=()=>{
     this.setState({textInput:null})
   }
   setName=(text)=>{
this.setState({textInput:text})
   }
   addNewList=()=>{
    // const  {navigation} = this.props
    //  const userId =  navigation.getParam('userId',null)

Keyboard.dismiss()
    onSuccess=()=>{
this.clearInput()
    }
    const userId = this.props.user.user.id
this.props.addList(userId,this.state.textInput,onSuccess)
   }
   
  drawer =()=>{
    const  {navigation} = this.props


    
   navigation.openDrawer()
  }
  navToTodo=({title,id})=>{
    const  {navigation} = this.props
navigation.navigate('ItemScreen',{title:`${title}`,id:`${id}`})
const a = 1
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
        <FlatList 
        data={this.props.lists.lists}
        keyExtractor={item=>item.title}
        renderItem={({item})=>(<TouchableOpacity  onPress={()=>{this.navToTodo(item)}} style={styles.listElement}>
        
        <View style={styles.elementWrapper}>
        <View style={styles.elementIcon}><EntypoIcon name={"circle"} size={25} color={"#1fe062"}   /></View>
        <View style={styles.elementText}><Text>{item.title}</Text></View>
        <View style={styles.elementDetails}><Text></Text></View>
        </View>
        </TouchableOpacity  >)}
        
        
        />
        
        </View>
        <View style={styles.footerWrapper}>
        <View style={styles.inputNewList}>
        <View style={styles.addButtonWrapper}>
        {this.state.isShowButtons && 
           <TouchableOpacity 
           underlayColor={'rgba(33, 86, 158,0.7)'} 
           style={styles.addButton} 
           onPress={this.addNewList.bind(this)} >
           <Text>اضافه کن</Text>
           </TouchableOpacity>}
        </View>
        {this.state.isShowButtons && 
        <TouchableOpacity
         underlayColor={'rgba(255,255,255,0.9)'}
         onPress={this.clearInput.bind(this)}
         style={styles.clearButton}>
        <EvilIcon name={'close'} size={18} color='#222'  />
        </TouchableOpacity>}
       
          <TextInput 
          underlayColor={'rgba(255,255,255,0.65)'}  
          value={this.state.textInput} 
          onChangeText={(text)=>this.setName(text)}  
          multiline={true} 
          maxLength={36} 
          style={styles.inputStyles}
           onBlur={this.hideButtons.bind(this)}
           onFocus={this.showButtons.bind(this)}
          placeholder={'لیست جدید اضافه کن'} >
          </TextInput>
          {this.state.isShowButtons && <TouchableOpacity   underlayColor={'rgba(150,150,150,0.65)'} onPress={()=>{}} style={styles.colorSelector} >
          <EntypoIcon name={"circle"} size={25} color={"#1fe062"}   />
          </TouchableOpacity>}
        </View>
        </View>

        
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
    height:150,
    backgroundColor:'blue',
    
    justifyContent: 'flex-end',
    alignItems:'flex-start',
  },
  listsWrapper:{
    flex:8,
    backgroundColor:'red'

  },
  footerWrapper:{
    // flex:2,
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
    // borderWidth:3,
    borderColor: '#fff',
    marginLeft:20,
  },
  headerText:{
    fontSize:35,
    color:'#eee',
    fontWeight: '600',
  },
  inputStyles: {
    // textAlign: 'center',
    flex:1,
    fontSize:20,
    // borderWidth:2,
    // borderColor:'gold',
    padding:16,
    marginBottom:2
  },
  inputNewList: {
    backgroundColor: '#fff',
    minHeight: 65,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // paddingRight:25,
    position: "relative",
    zIndex: 2,
    borderWidth:1,
    borderRadius:3,
    borderColor:'#666',
    // flexWrap:"wrap-reverse",
    flexDirection: 'row',
  },
  addButtonWrapper:{
marginBottom:12,
margin:6
  },
  addButton:{
backgroundColor:'#2172e0',
borderRadius: 3,
padding:8
  },
  
  clearButton:{
   marginBottom:22,
   marginRight:6
  },
  colorSelector:{
    marginBottom:15,
    marginHorizontal:6,
    borderRadius:100
  },
  listElement:{

    height:50,
    borderBottomWidth: 1,
    justifyContent: 'center',


  },

  elementWrapper:{
    flexDirection: 'row',
    flex:1,
    // justifyContent: 'center',
    alignItems: 'center',
  }
})
const mapStateToProps = (state) => {
  return {
 lists:state.todoReducer,
 user:state.userReducer
  }
}
export default connect(mapStateToProps,{addList})(Lists)