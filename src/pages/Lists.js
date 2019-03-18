import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, FlatList, TextInput, Keyboard , Dimensions} from 'react-native'
import { connect } from 'react-redux'
import { addList } from '../services/todo//actions'



/*******************************************  assets   ***************************************** */




import IonIcons from 'react-native-vector-icons/Ionicons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntIcon from 'react-native-vector-icons/AntDesign'

const dim = Dimensions.get('window')


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


  emptyComponent=()=>(<View style={styles.emptyLists}>
    <Text style={styles.emptyListsText}> You can add New Lists from downside <AntIcon name={'down'} color={'#aaa'} size={25} /></Text>
    </View>)



  render() {
    return (
      <View style={styles.container} >
        <View style={styles.headerWrapper}>
          <TouchableOpacity style={styles.menuListButton} onPress={this.drawer.bind(this)}>
            <IonIcons size={35} color={'#2172e0'} name={'ios-list'} />
          </TouchableOpacity>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText} >Lists</Text>
          </View>
        </View>
        <View style={styles.listsWrapper}>
          <FlatList
          ListEmptyComponent={this.emptyComponent}
            data={this.props.listsReducer.lists}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => { this.navToTodo(item) }} style={styles.listElement}>

                <View style={styles.elementWrapper}>
                  <View style={styles.elementIcon}>
                    <EntypoIcon name={"circle"} size={20} color={"#2172e0"} />
                  </View>
                  <View style={styles.elementText}>
                    <Text>{item.title}</Text></View>
                  <View style={styles.elementDetails}>
                  <MaterialIcons name={'drag-handle'} size={25} color={'#222'}/>
                  </View>
                </View>
              </TouchableOpacity  >)}


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
              onChangeText={(text) => this.setListName(text)}
              multiline={true}
              maxLength={36}
              style={styles.inputStyles}
              onBlur={this.hideButtons.bind(this)}
              onFocus={this.showButtons.bind(this)}
              placeholder={' Type new List here '} >
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
                  onPress={this.addNewList.bind(this)} >
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
    backgroundColor:'#f5f5f5'
  },
  headerWrapper: {
    // flex:5,
    height: 150,
    backgroundColor: 'transparent',
    borderBottomWidth:3,
    borderBottomColor:'rgba(33, 114, 224,0.65)',

    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  listsWrapper: {
    flex: 8,
    backgroundColor: 'transparent'

  },
  footerWrapper: {
    // flex:2,
    backgroundColor: 'transparent'
  },
  inputNewList: {
    backgroundColor: 'transparent',
    minHeight: 65,
    // paddingRight:25,
    position: "relative",
    zIndex: 1,
    // borderWidth: 1,
    // flexWrap:"wrap-reverse",
    flexDirection: 'row',
  },
  menuListButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginLeft: 20,
    marginTop: 20,
    width:30,
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1
  },
  headerTextWrapper: {
    // borderWidth:3,
    borderColor: '#fff',
    marginLeft: 20,
    marginBottom:10
  },
  headerText: {
    fontSize: 35,
    color: '#222',
    fontWeight: '600',
  },
  footerWrapper: {
    // flex:2,
    backgroundColor: 'transparent'
  },
inputStyles: {
    // textAlign: 'center',
    flex: 1,
    fontSize: 20,
    // borderWidth:2,
    // borderColor:'gold',
    padding: 16,
    marginBottom: 2,
    fontStyle:'italic'
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
    borderTopWidth:2,
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
    height:60,
    justifyContent: 'center',
    alignItems: 'center',
    width:50,
    // borderWidth:3
  },
  
  emptyLists: {
    height: dim.height*(55/100),
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'rgba(200,200,200,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    
    padding:30,
    margin:25
  },
  emptyListsText:{
fontWeight:'200',
textAlign:'center',
color:'#bbb',
fontSize:35,
fontStyle:'normal',
lineHeight:60
  },
  listElement: {

    height:60,
    // margin:10,
    marginHorizontal:15,
    paddingVertical:15,
    justifyContent: 'center',
    borderBottomWidth:3,
    borderBottomColor:'rgba(220,220,220,0.7)',
    // borderWidth:2

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
  },
  elementIcon:{
    width:50,
    justifyContent: 'center',
    alignItems: 'center',

  },
  elementText:{
    flex:1,
    padding:10
  },
  elementDetails:{
    width:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonStyles:{
    color:'#f5f5f5',
    
  },
  AddButtonStyles:{
    color:'#f5f5f5'
  }
  
})
const mapStateToProps = (state) => {
  return {
    listsReducer: state.todoReducer,
    userReducer: state.userReducer
  }
}
export default connect(mapStateToProps, { addList })(Lists)