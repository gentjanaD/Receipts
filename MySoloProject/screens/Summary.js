import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import PositiveForm from '../components/forms/PositiveForm';
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
      <PositiveForm/>
    </View>
  )
}
export default Summary; 