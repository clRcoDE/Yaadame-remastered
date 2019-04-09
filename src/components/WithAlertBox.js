import React, { Component } from 'react'
import { Text, StyleSheet, View,Button , TouchableOpacity, Dimensions } from 'react-native'
import AlertBox from './AlertBox'


const dim = Dimensions.get('window')

const initialState = {
    isShow: false,
    payload: null,
    message:null,
    type:"INFO"
    
}


export default WithAlertBox = WrappedComponent => {
    return class Dialog extends Component {
        constructor(props){
            super(props)
            this.state={
                ...initialState
            }
        }
        hide (){
            this.setState({isShow:false})
        }
        show (){
            this.setState({isShow:true})
          
        }
        setMessage(message){
            this.setState({message:message})
  }
        setType(type){
            this.setState({type:type})
        }
        pushToAlert(message , type , options){
            this.setMessage(message)
            this.setType(type)
            this.show()
        }
       render(){
            const {isShow} = this.state
            
           
            return (
            <View  style={styles.container} >
                <WrappedComponent  {...this.props} show={this.show.bind(this)} hide={this.hide.bind(this)} pushToAlert={this.pushToAlert.bind(this)} />

                {isShow && 
                
                <AlertBox  {...this.props}  message={this.state.message}  hide={this.hide.bind(this)}  type={this.state.type} />
                }
               <View style={{height:100, flexDirection: 'row',}}>
               
               
               </View>
            </View>
                )
        }
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})