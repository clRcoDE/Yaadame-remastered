import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, FlatList, TextInput, Keyboard, Dimensions , PanResponder } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AntIcon from 'react-native-vector-icons/AntDesign'

import Header from '../components/Header'

import { connect } from 'react-redux'
import { addItem, getExistingItems, toggleItem } from '../services/todo//actions'
import {ThemeContext} from '../components/ThemeContext'

import {themes} from '../components/ThemeContext'
const dim = Dimensions.get('window')
const filters = {
  all:"all",
  active:"active",
  done:"done"
}
class Items extends Component {


  constructor(props) {
    super(props)
    
    this.state = {
      isShowButtons: false,
      textInput: null,
      filter:filters.all


    }
    this.listId = this.props.navigation.getParam('listId', null)
    // this.listIndex1 = this.props.getListIndex(this.listId)
    this.listIndex = this.props.todo.lists.findIndex(({ id }) => id == this.listId)

  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'null')
    }
  }
  /**************************************************  input functions  ****************************************************/
  hideButtons = () => {
    this.setState({ isShowButtons: false })
  }
  showButtons = () => {
    this.setState({ isShowButtons: true })
  }
  clearInput = () => {
    this.setState({ textInput: null })
  }
  setItemName = (text) => {
    this.setState({ textInput: text })
  }

  /******************************************************   add new Item   ****************************************************/

  addNewItem = () => {
    const { navigation } = this.props
    const userId = this.props.user.user.id

    Keyboard.dismiss()
    onSuccess = () => {
      this.clearInput()
    }
    this.props.addItem(userId, this.listId, this.state.textInput, onSuccess)

  }

  /***********************************************   change item  activity    *********************************************** */


  changeActivity = ({ id, isCompleted }) => {
    // console.log(userId , listId , id , isCompleted)

    onSuccess = () => {
      return true
    }

    this.props.toggleItem(id, isCompleted, onSuccess)



  }




  navigator = () => {
    const { navigation } = this.props

    navigation.goBack()
  }

  handlefilters=(newfilter)=>{
    this.setState({filter:newfilter})
  }


  listEmptyComponent = (props) => (<View style={[styles.emptyLists,{borderColor:this.context.highlight}]}>
    <Text style={styles.emptyListsText}> Create New Item <AntIcon name={'down'} color={this.context.highlight} size={25} /></Text>
  </View>)

listHeaderComponent =  (props) =>{ return this.props.todo.lists[this.listIndex].items.length ? <View style={styles.listHeader} >
<View style={styles.listfiltersWrapper} >
<TouchableOpacity  onPress={this.handlefilters.bind(this , filters.all)}  style={[styles.filtersButton,{borderColor:this.state.filter === filters.all ? this.context.foreground : this.context.highlight}]}  ><Text style={[styles.filtersText,{color:this.state.filter === "all" ? this.context.foreground :this.context.fontcolor}]} >All</Text></TouchableOpacity>
<TouchableOpacity  onPress={this.handlefilters.bind(this , filters.active)}  style={[styles.filtersButton,{borderColor:this.state.filter == filters.active? this.context.foreground : this.context.highlight}]}  ><Text style={[styles.filtersText,{color:this.state.filter === "active" ? this.context.foreground :this.context.fontcolor}]} >Active</Text></TouchableOpacity>
<TouchableOpacity  onPress={this.handlefilters.bind(this , filters.done)}  style={[styles.filtersButton,{borderColor:this.state.filter == filters.done? this.context.foreground : this.context.highlight}]}  ><Text style={[styles.filtersText,{color:this.state.filter === "done" ? this.context.foreground :this.context.fontcolor}]} >Done</Text></TouchableOpacity>
</View>
</View> : null}

  render() {
    let theme = this.context
    return (
      <View style={[styles.container,{backgroundColor:theme.background}]} >


        {/* <View style={styles.headerWrapper}>

          <TouchableOpacity style={styles.menuListButton} onPress={this.navigator.bind(this)}>
            <IonIcons size={30} color={'#222'} name={'ios-arrow-back'} />
          </TouchableOpacity>

          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText} >{this.props.navigation.getParam('title', 'null')}</Text>
          </View>

        </View> */}
        <Header headerTitle={this.props.navigation.getParam('title', 'null')}  headerIconName={'ios-arrow-back'} navigation={this.props.navigation} buttonAction={"back"} />


        <View style={[styles.listsWrapper,{backgroundColor:theme.background}]}>


          <FlatList
            ListEmptyComponent={this.listEmptyComponent}
            ListHeaderComponent={this.listHeaderComponent}
            data={this.props.todo.lists[this.listIndex].items}
            extraData={this.state.filter}
            keyExtractor={item => `${item.id} `}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.changeActivity(item)} style={[styles.listElements,{borderBottomColor:theme.highlight}]}>
                <View style={styles.elementWrapper}>
                  <View style={styles.activityWrapper}>
                    {item.isCompleted && <AntIcon name={"checkcircleo"} size={20} color={"#1fe062"} />}
                    {!item.isCompleted && <EntypoIcon name={"circle"} size={20} color={theme.fontcolor} />}


                  </View>
                  <View style={styles.detailsWrapper}>
                    <Text style={[styles.todoItemText, { color:theme.fontcolor,textDecorationLine: item.isCompleted ? 'line-through' : 'none' }]} >{item.title}</Text>
                  </View>
                  <View style={styles.optionsWrapper}></View>
                </View>
              </TouchableOpacity>    )  }
          />




        </View>
        <View style={styles.footerWrapper}>
          <View style={[styles.inputNewList,{borderTopColor:theme.foreground}]}>

            {this.state.isShowButtons &&
              <TouchableOpacity underlayColor={'rgba(150,150,150,0.65)'} onPress={() => { }} style={styles.colorSelector} >
                <EntypoIcon name={"circle"} size={20} color={theme.foreground} />
              </TouchableOpacity>}


            <TextInput
              underlayColor={'rgba(255,255,255,0.65)'}
              value={this.state.textInput}
              onChangeText={(text) => this.setItemName(text)}
              multiline={true}
              maxLength={36}
              style={[styles.inputStyles,{color:theme.fontcolor}]}
              onBlur={this.hideButtons.bind(this)}
              onFocus={this.showButtons.bind(this)}
              placeholder={' What you Want To do ? '} 
              placeholderTextColor={theme.highlight}
              >
            </TextInput>


            {this.state.isShowButtons &&
              <TouchableOpacity
                underlayColor={'rgba(255,255,255,0.9)'}
                onPress={this.clearInput.bind(this)}
                style={styles.clearButton}>
                <EvilIcon name={'close'} size={24} color={theme.highlight} />
              </TouchableOpacity>}

            <View style={styles.addButtonWrapper}>
              {this.state.isShowButtons &&
                <TouchableOpacity
                  underlayColor={'rgba(33, 86, 158,0.7)'}
                  style={[styles.addButton,{backgroundColor:theme.foreground}]}
                  onPress={this.addNewItem.bind(this)} >
                  <Text style={[styles.AddButtonStyles,{color:theme.background}]}>Add</Text>
                </TouchableOpacity>}
            </View>



          </View>
        </View>


      </View>
    )
  }
}



Items.contextType = ThemeContext 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    // backgroundColor: '#f5f5f5'
  },
  headerWrapper: {
    // flex:5,
    height: 150,
    backgroundColor: 'transparent',
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(33, 114, 224,0.55)',

    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  listsWrapper: {
    flex: 8,
    backgroundColor: 'transparent'

  },

  emptyLists: {
    height: dim.height-(342),
    borderWidth: 3,
    borderRadius: 15,
    borderColor: 'rgba(200,200,200,0.7)',
    justifyContent: 'center',
    alignItems: 'center',

    padding: 30,
    margin: 25
  },
  emptyListsText: {
    fontWeight: '200',
    textAlign: 'center',
    color: '#bbb',
    fontSize: 35,
    fontStyle: 'normal',
    lineHeight: 60
  },
  listElements: {

    height: 60,
    // margin:10,
    marginHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'center',
    borderBottomWidth: 3,
    

  },
  elementWrapper: {
    flexDirection: 'row',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  activityWrapper: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },
  detailsWrapper: {
    flex: 1,
    padding: 5
  },
  optionsWrapper: {
    width: 50

  },
  footerWrapper: {
    // flex:2,
    backgroundColor: 'transparent'
  },
  menuListButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginLeft: 20,
    marginTop: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1
  },
  headerTextWrapper: {
    // borderWidth:3,
    borderColor: '#fff',
    marginLeft: 20,
    marginBottom: 10
  },
  headerText: {
    fontSize: 35,
    color: '#222',
    fontWeight: '600',
  },
  inputStyles: {
    // textAlign: 'center',
    flex: 1,
    fontSize: 20,
    // borderWidth:2,
    // borderColor:'gold',
    padding: 16,
    marginBottom: 2,
    fontStyle: 'italic'
  },
  inputNewList: {
    backgroundColor: 'transparent',
    minHeight: 65,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // paddingRight:25,
    position: "relative",
    zIndex: 2,
    // borderWidth: 1,
    borderTopWidth: 2,
    borderTopColor: 'rgba(33, 114, 224,0.65)',
    borderRadius: 3,
    borderColor: '#666',
    // flexWrap:"wrap-reverse",
    flexDirection: 'row',
  },
  addButtonWrapper: {
    marginBottom: 12,
    margin: 6
  },
  addButton: {
    backgroundColor: '#2172e0',
    borderRadius: 3,
    padding: 8
  },

  clearButton: {
    marginBottom: 22,
    marginRight: 6
  },
  colorSelector: {
    // marginBottom: 15,
    // marginHorizontal: 6,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    // borderWidth:3
  },
  AddButtonStyles: {
    color: '#f5f5f5'
  },
  listHeader:{
    height:60,
    // backgroundColor:'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listfiltersWrapper:{
    marginHorizontal:50,
    // backgroundColor:"purple",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },filtersButton:{
    paddingHorizontal: 10,
    paddingVertical:2,
    borderRadius:6,
    borderWidth:3,
    marginHorizontal:6
  }

})
const mapStateToProps = (state) => {
  return {
    todo: state.todoReducer,
    user: state.userReducer,
  }
}
export default connect(mapStateToProps, { addItem, getExistingItems, toggleItem })(Items)