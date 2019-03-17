import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, FlatList, TextInput, Keyboard } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { connect } from 'react-redux'
import { addItem , getExistingItems } from '../services/todo//actions'
class Items extends Component {


  constructor(props) {
    super(props)
    this.state = {
      isShowButtons: false,
      textInput: null

    }
    this.listId = this.props.navigation.getParam('listId', null)
    this.listIndex = this.props.todo.lists.findIndex(({id})=> id == this.listId)

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

  addNewItem =   () => {
    const { navigation } = this.props
    const userId = this.props.user.user.id

    Keyboard.dismiss()
    onSuccess = () => {
      this.clearInput()
    }
    this.props.addItem(userId, this.listId, this.state.textInput, onSuccess)
    
  }

  drawer = () => {
    const { navigation } = this.props



    navigation.openDrawer()
  }
  

  componentDidMount() {
    


  //  this.data =  this.props.todo.lists[this.listIndex].items



    // this.props.getExistingItems(this.userId , this.listId )

  }
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.headerWrapper}>
          <TouchableOpacity style={styles.menuListButton} onPress={this.drawer.bind(this)}>
            <IonIcons size={50} color={'#eee'} name={'ios-list'} />
          </TouchableOpacity>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText} >{this.props.navigation.getParam('title', 'null')}</Text>
          </View>
        </View>
        <View style={styles.listsWrapper}>

          

          <FlatList
            ListEmptyComponent={() => <View style={styles.emptyLists} ><Text>empty list</Text></View>}
            data={ this.props.todo.lists[this.listIndex].items}
           
            renderItem={({ item }) => (<View style={styles.listStyle}><Text>{item.title}</Text></View>)}
          />


         

        </View>
        <View style={styles.footerWrapper}>
          <View style={styles.inputNewList}>
            <View style={styles.addButtonWrapper}>
              {this.state.isShowButtons &&
                <TouchableOpacity
                  underlayColor={'rgba(33, 86, 158,0.7)'}
                  style={styles.addButton}
                  onPress={this.addNewItem.bind(this)} >
                  <Text>اضافه کن</Text>
                </TouchableOpacity>}
            </View>
            {this.state.isShowButtons &&
              <TouchableOpacity
                underlayColor={'rgba(255,255,255,0.9)'}
                onPress={this.clearInput.bind(this)}
                style={styles.clearButton}>
                <EvilIcon name={'close'} size={18} color='#222' />
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
              placeholder={'add new item +'} >
            </TextInput>
            {this.state.isShowButtons &&
              <TouchableOpacity underlayColor={'rgba(150,150,150,0.65)'} onPress={() => { }} style={styles.colorSelector} >
                <EntypoIcon name={"circle"} size={25} color={"#1fe062"} />
              </TouchableOpacity>}
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
  },
  headerWrapper: {
    // flex:5,
    height: 150,
    backgroundColor: '#333',

    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  listsWrapper: {
    flex: 8,
    backgroundColor: '#eee'

  },
  emptyLists: {
    height: 300,
    borderWidth: 10,
    borderRadius: 12,
    borderColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listStyle: {
    height:50,
    marginVertical: 10,
    borderWidth:1,
    borderRadius: 8,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerWrapper: {
    // flex:2,
    backgroundColor: 'green'
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
  },
  headerText: {
    fontSize: 35,
    color: '#eee',
    fontWeight: '600',
  },
  inputStyles: {
    // textAlign: 'center',
    flex: 1,
    fontSize: 20,
    // borderWidth:2,
    // borderColor:'gold',
    padding: 16,
    marginBottom: 2
  },
  inputNewList: {
    backgroundColor: '#fff',
    minHeight: 65,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // paddingRight:25,
    position: "relative",
    zIndex: 2,
    borderWidth: 1,
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
    marginBottom: 15,
    marginHorizontal: 6,
    borderRadius: 100
  },
  listElement: {

    height: 50,
    borderBottomWidth: 1,
    justifyContent: 'center',


  },

  elementWrapper: {
    flexDirection: 'row',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  }
})
const mapStateToProps = (state) => {
  return {
    todo: state.todoReducer,
    user: state.userReducer,
    listIndex:state.todoReducer.listIndex
  }
}
export default connect(mapStateToProps, { addItem , getExistingItems })(Items)