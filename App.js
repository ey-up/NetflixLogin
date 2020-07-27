import React, { Component } from 'react'
import { 
  Text,
  Dimensions,
  View,
  SafeAreaView,
  Image, } from 'react-native'

  //Width : 411
  //Height : 683
var windowWidth = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;

if(1==1){
  console.log(windowHeight);
  console.log(windowWidth);
}
export default class App extends Component {
  
  render() {
    return (
      <SafeAreaView style={{flex :1}}>
            
           {/*Netflix Logo*/}
          <View style={{ flex:3,backgroundColor:'black',flexDirection:'row'}}>
            <Image 
              source={require('./src/image/netflix7.png')}
              style={styles.logo}
            />
            
             
          </View>


          <View style={{backgroundColor:'blue', flex: 8}}>

          </View>


          <View style = {{backgroundColor:'yellow', flex:3}}>

          </View>

      </SafeAreaView>

      
    )
  }
}
const styles = {
    logo :{height:(windowHeight / 6.7) ,width: (windowWidth / 3.2),marginLeft:(windowWidth / 25), marginTop:3 }
}
