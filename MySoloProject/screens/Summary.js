import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

const Summary = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress = {() =>{
        navigation.navigate('EventOverview')
      }} >
      <Text>Save This Memory</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        navigation.navigate('FormScreen');
      }}>
        <Text>REVISE</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Summary; 