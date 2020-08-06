import React from 'react';
import {Text, View, TextInput, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Input = (props) => (
  <TextInput
    placeholder={props.placeholder}
    placeholderTextColor="#717171"
    secureTextEntry={props.secureTextEntry}
    keyboardType={props.keyboardType}
    //value={props.value}

    style={[
      {
        color: '#717171',
        height: height * 0.08,
        backgroundColor: '#333333',
        borderWidth: 0.5,
        borderRadius: 6,
        paddingLeft: 17,
        marginLeft: width / 20,
        marginRight: width / 20,
        fontSize: 15,
      },
      props.style,
    ]}
  />
);

export {Input};
