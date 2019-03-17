import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, FlatList, TextInput, Keyboard, Dimensions } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AntIcon from 'react-native-vector-icons/AntDesign'



import { connect } from 'react-redux'
import { addItem, getExistingItems, toggleItem } from '../services/todo//actions'


const dim = Dimensions.get('window')

class Items extends Component {


  constructor(props) {
    super(props)
    this.state = {
      isShowButtons: false,
      textInput: null,


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


  changeActivity = ({ userId , listId , id , isCompleted }) => {
  this.props.toggleItem( userId , listId , id , isCompleted , onSuccess )
  }




  navigator = () => {
    const { navigation } = this.props

    navigation.goBack()
  }



  emptyComponent = () => (<View style={styles.emptyLists}>
    <Text style={styles.emptyListsText}> Create New Item <AntIcon name={'down'} color={'#aaa'} size={25} /></Text>
  </View>)


  render() {
    return (
      <View style={styles.container} >
        <View style={styles.headerWrapper}>
          <TouchableOpacity style={styles.menuListButton} onPress={this.navigator.bind(this)}>
            <IonIcons size={30} color={'#222'} name={'ios-arrow-back'} />
          </TouchableOpacity>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText} >{this.props.navigation.getParam('title', 'null')}</Text>
          </View>
        </View>
        <View style={styles.listsWrapper}>


          <FlatList
            ListEmptyComponent={this.emptyComponent}
            data={this.props.todo.lists[this.listIndex].items}
            keyExtractor={item => `${item.id} `}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.changeActivity(item)} style={styles.listElements}>
                <View style={styles.elementWrapper}>
                  <View style={styles.activityWrapper}>
                    {item.isCompleted && <EntypoIcon name={"checkcircle"} size={20} color={"#1fe062"} />}
                    {!item.isCompleted && <EntypoIcon name={"circle"} size={20} color={"#444"} />}


                  </View>
                  <View style={styles.detailsWrapper}>
                    <Text>{item.title}</Text>
                  </View>
                  <View style={styles.optionsWrapper}></View>
                </View>
              </TouchableOpacity>)}
          />




        </View>
        <View style={styles.footerWrapper}>
          <View style={styles.inputNewList}>

            {this.state.isShowButtons &&
              <TouchableOpacity underlayColor={'rgba(150,150,150,0.65)'} onPress={() => { }} style={styles.colorSelector} >
                <EntypoIcon name={"circle"} size={20} color={"#2172e0"} />
              </TouchableOpacity>}


            <TextInput
              underlayColor={'rgba(255,255,255,0.65)'}
              value={this.state.textInput}
              onChangeText={(text) => this.setItemName(text)}
              multiline={true}
              maxLength={36}
              style={styles.inputStyles}
              onBlur={this.hideButtons.bind(this)}
              onFocus={this.showButtons.bind(this)}
              placeholder={' What you Want To do ? '} >
            </TextInput>


            {this.state.isShowButtons &&
              <TouchableOpacity
                underlayColor={'rgba(255,255,255,0.9)'}
                onPress={this.clearInput.bind(this)}
                style={styles.clearButton}>
                <EvilIcon name={'close'} size={18} color='#222' />
              </TouchableOpacity>}

            <View style={styles.addButtonWrapper}>
              {this.state.isShowButtons &&
                <TouchableOpacity
                  underlayColor={'rgba(33, 86, 158,0.7)'}
                  style={styles.addButton}
                  onPress={this.addNewItem.bind(this)} >
                  <Text style={styles.AddButtonStyles}  >Add</Text>
                </TouchableOpacity>}
            </View>



          </View>
        </View>


      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#f5f5f5'
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
    height: dim.height * (55 / 100),
    borderWidth: 2,
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
    borderBottomColor: 'rgba(220,220,220,0.7)'

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
    marginTop: 15
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
  }

})
const mapStateToProps = (state) => {
  return {
    todo: state.todoReducer,
    user: state.userReducer,
  }
}
export default connect(mapStateToProps, { addItem, getExistingItems, toggleItem })(Items)