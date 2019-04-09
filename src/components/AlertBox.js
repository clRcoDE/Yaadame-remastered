import React, { Component } from 'react'
import { Text, StyleSheet, View ,Animated ,Easing  , Dimensions,Button  , TouchableOpacity, Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const dim = Dimensions.get('window')

export const actionTypes = {
    error:{
        type:'ERROR',
        color:'#ed2a2a'
    },
    
    success:{
        type:"SUCCESS",
        color:'#09ea27'
    },
    
    warning:{
        type:"WARNING",
        color:'#ffc444'
    },
    
    info:{
        type:'INFO',
        color:'#6e88ad'
    },
    question:{
        type:"QUESTION",
        color:'#383838'
    },
    

    

}
export default  class AlertBox extends Component {
constructor(props){
    super(props)
   
    this.state={
        scaler: new Animated.Value(1),
        fader: new Animated.Value(0.25)
    }
    
}
getAlertType=()=>{

    switch (this.props.type) {
        case 'QUESTION':
        
        this.setState({color:actionTypes.question.color})
            break;
        case 'INFO':
        
        this.setState({color:actionTypes.info.color})
            break;
        case 'ERROR':
        
        this.setState({color:actionTypes.error.color})
            break;
        case 'WARNING':
        
        this.setState({color:actionTypes.warning.color})
            
            break;
        case 'SUCCESS':
        
        this.setState({color:actionTypes.success.color})

            break;

    }
}
componentDidMount(){
    this.startAnimation()
}

    componentWillMount(){
        this.getAlertType()
        
    }

    startAnimation=()=>{
       Animated.parallel([
           Animated.timing(this.state.fader,{
           toValue:1,
           timing:500,
           useNativeDriver:true
       }),
       Animated.timing(this.state.scaler,{
        
         toValue:1.4,
         timing:750,
         easing:Easing.bounce,
        useNativeDriver:true
    
    })]).start()

        
    }
  render() {
    return (
        <View style={styles.container} >
        <Animated.View style={[styles.box,{opacity:this.state.fader,transform:[{scale:this.state.scaler}]}]} >
        
        <Text  style={[styles.headerText,{color:this.state.color}]} >{this.props.message}</Text>
        
        <TouchableOpacity style={styles.closeButton} onPress={this.props.hide} >
       <Ionicons size={10} color={'#222'} name={'ios-close'} />
        </TouchableOpacity>
        <View style={styles.optionsArea}></View>
        </Animated.View>
        <TouchableOpacity style={styles.dismissArea} onPress={this.props.hide}  >
        </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({

    container:{
position: 'absolute',

width:dim.width,
height:dim.height,
justifyContent: 'center',
alignItems: 'center',
    },
    box:{
        // width:dim.heigh,
        minWidth:150,
        minHeight:150,
        maxWidth:250,
        padding:25,
        paddingBottom: 55,
        paddingTop:30,
        // height:100,
        position: 'absolute',
        zIndex:2,
        borderRadius: 12,
        backgroundColor:'#fff',
        elevation:5,
        justifyContent: 'center',
        alignItems: 'center',




    },
    headerText:{
        fontSize:18,
        fontWeight: '600',
    },
    closeButton:{
        position:'absolute',
        top:10,
        left:10

    },
    closeButtonImage:{
        width:10,
        height:10
    },
    dismissArea:{
        position: 'absolute',
        width:dim.width,
        height:dim.height,
        // flex:1,
        zIndex: 0,
        backgroundColor:'rgba(50,50,50,0.5)',
        justifyContent: 'center',
        alignItems:'center'
    },
    optionsArea:{
        position: 'absolute',
        bottom:0,
        left:0,
        right:0,
        height:40,
        backgroundColor:'#333',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,

    }
})






