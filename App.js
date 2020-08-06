import React, {Component, useState,props} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {Input, Button, CheckBox} from './src/Components';

//Width : 411
//Height : 683

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class App extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: true,
  };
  
  render() {
    const {username, password, isShowPassword} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          {/*Netflix Logo*/}
          <View style={{flex: 2.7, backgroundColor: 'black'}}>
            <Image
              style={styles.Netflixlogo}
              source={require('./src/images/netflix.png')}
            />
          </View>

          {/*Form*/}
          <View style={[{backgroundColor: 'black', flex: 8}]}>
            <View>
              <Text style={styles.text}>Sign In</Text>
            </View>

            <Input
              placeholder={'Email or phone number'}
              style={{marginTop: windowHeight / 32}}
              keyboardType = {'email-address'}
              value = {username}
              onChangeText={(username) => this.setState({username})}
              
            />

            <Input
              placeholder={'Password'}
              style={{marginTop: windowHeight / 50}}
              secureTextEntry={isShowPassword}
              onChangeText={password => this.setState({password})}
              value = {password}
            />

            <Button text={'Sign In'} />

            <View style={styles.separatedLine}>
              <CheckBox
                text="Hide  password"
                status={isShowPassword}
                onPress={() => this.setState({isShowPassword: !isShowPassword})}
              />

              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 14,
                    marginRight: windowWidth / 20,
                    color: '#a1a1a1',
                  }}>
                  Need help?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/*Bottom */}
          <View style={{backgroundColor: 'black', flex: 3}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: windowHeight / 16,
              }}>
              <Image
                source={require('./src/images/facebook.png')}
                style={styles.miniLogo}
              />
              <Text style={{fontSize: 15, color: '#727272', marginLeft: 6}}>
                Login with Facebook
              </Text>
            </View>

            <View style={{marginTop: 20, marginLeft: windowWidth / 20, flexDirection: 'row'}}>
              <Text style={{fontSize: 17, color: '#727272'}}>
                New to Netflix?
              </Text>
              <TouchableOpacity>
                <Text style={{fontSize: 17, color: 'white'}}> Sign up now.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = {
  miniLogo: {
    height: 21,
    width: 21,
    marginLeft: windowWidth / 20,
  },
  Netflixlogo: {
    height: 36,
    width: 125,
    marginLeft: windowWidth / 20,
    marginTop: windowHeight / 22,
  },
  separatedLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  container: {
    backgroundColor: '#4c69a5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 33,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: windowWidth / 20,
  },
};
