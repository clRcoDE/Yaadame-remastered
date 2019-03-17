import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, FlatList, TextInput, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { addList } from '../services/todo//actions'



/*******************************************  assets   ***************************************** */


import IonIcons from 'react-native-vector-icons/Ionicons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'






class Lists extends Component {


  constructor(props) {
    super(props)
    this.state = {
      isShowButtons: false,
      textInput: null
    }
  }
  /******************************  input methods : hide/show/clear/setListName  ******************************* */
  hideButtons = () => {
    this.setState({ isShowButtons: false })
  }
  showButtons = () => {
    this.setState({ isShowButtons: true })
  }
  clearInput = () => {
    this.setState({ textInput: null })
  }
  setListName = (text) => {
    this.setState({ textInput: text })
  }


  /**************************************  open drawer button   ************************************ */


  drawer = () => {
    const { navigation } = this.props
    navigation.openDrawer()
  }

  /***********************************  add  new list method ( action caller )   ************************************* */

  addNewList = () => {
    const userId = this.props.userReducer.user.id

    onSuccess = () => {
      this.clearInput()
    }

    Keyboard.dismiss()

    this.props.addList(userId, this.state.textInput, onSuccess)
  }
  /****************************************     navigate to list    ******************************************* */


  navToTodo = ({ title, id }) => {
    const { navigation } = this.props
    const userId = this.props.userReducer.user.id
    navigation.navigate('ItemScreen', { title: `${title}`, listId: `${id}`, userId: `${userId}` })

  }

  /*****************************************   render   ******************************************* */


  render() {
    return (
      <View style={styles.container} >
        <View style={styles.headerWrapper}>
          <TouchableOpacity style={styles.menuListButton} onPress={this.drawer.bind(this)}>
            <IonIcons size={50} color={'#eee'} name={'ios-list'} />
          </TouchableOpacity>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText} >Lists</Text>
          </View>
        </View>
        <View style={styles.listsWrapper}>
          <FlatList
          ListEmptyComponent={()=>(<View style={styles.emptyComponent} ><Text>add list there</Text></View>)}
            data={this.props.listsReducer.lists}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => { this.navToTodo(item) }} style={styles.listElement}>

                <View style={styles.elementWrapper}>
                  <View style={styles.elementIcon}>
                    <EntypoIcon name={"circle"} size={25} color={"#1fe062"} />
                  </View>
                  <View style={styles.elementText}>
                    <Text>{item.title}</Text></View>
                  <View style={styles.elementDetails}></View>
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
                  <Text>Add</Text>
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
              onChangeText={(text) => this.setListName(text)}
              multiline={true}
              maxLength={36}
              style={styles.inputStyles}
              onBlur={this.hideButtons.bind(this)}
              onFocus={this.showButtons.bind(this)}
              placeholder={'Add New List Here +'} 
              onSubmitEditing={this.addNewList.bind(this)}
              
              >
            </TextInput>
            {this.state.isShowButtons &&
              <TouchableOpacity
                underlayColor={'rgba(150,150,150,0.65)'}
                onPress={() => { }}
                style={styles.colorSelector} >
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
    backgroundColor: '#336',

    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  listsWrapper: {
    flex: 8,
    backgroundColor: '#eee'

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
    fontStyle: 'italic',
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
  emptyComponent:{


    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#333',
    borderWidth:3,
    borderRadius:20,
    margin:20,
    height:300
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
    listsReducer: state.todoReducer,
    userReducer: state.userReducer
  }
}
export default connect(mapStateToProps, { addList })(Lists)