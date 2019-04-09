import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'




const welcomeInLanguages = {
  FA:"خوش اومدی",
  EN:"Welcome",
  FR:"Bienvenue",
  JA:"ようこそ"

}

 class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}  >
      <Text style={styles.welcomeHeader} >{this.props.welcome}</Text>
        <Text  style={styles.user} >{this.props.user}!</Text>
      </View>
    )
  }
}
const withUser = WrappedComponent =>{
  return class extends Component {
    render(){
      if(this.props.user )
       {
         switch(this.props.language){
           case "FA" :
           return <WrappedComponent {...this.props} welcome={welcomeInLanguages.FA}   />
          case "EN":
          return <WrappedComponent {...this.props} welcome={welcomeInLanguages.EN}   />

          case "FR":
          return <WrappedComponent {...this.props} welcome={welcomeInLanguages.FR}   />
          case "JA":
          return <WrappedComponent {...this.props} welcome={welcomeInLanguages.JA}  />

           default :  
           return <WrappedComponent {...this.props} welcome={welcomeInLanguages.EN}   />
         }
       }
      
      return<WrappedComponent {...this.props}  user={"Guest"} welcome={welcomeInLanguages.EN}   /> 
    }
  }
}



const styles = StyleSheet.create({


  container:{
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  user:{
    color:"royalblue",
    fontWeight: '600',
    fontSize:16,
  },
  
  welcomeHeader: {
    fontSize: 25,
    color:'#333',
    textAlign: 'center',
    fontWeight: '600',
  }
})


export default withUser(Welcome)