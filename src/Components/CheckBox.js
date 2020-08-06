import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const CheckBox = (props) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity
       
        onPress={props.onPress}
        style={{
          width: 18,
          height: 18,
          borderWidth: 1.5,
          borderColor: 'gray',
          marginLeft: width / 20,
          borderRadius: 2,
        }}>
        {props.status && (
          <View
            style={{
              width: 15,
              height: 15,
              backgroundColor: 'gray',
              borderRadius: 3,
            }}
          />
        )}
      </TouchableOpacity>

      <Text style={{color: '#a6a6a6', fontSize: 14, marginLeft: 5}}>
        {props.text}
      </Text>
    </View>
  );
};

export {CheckBox};
