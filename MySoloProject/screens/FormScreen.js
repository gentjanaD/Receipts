import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PositiveForm from '../components/forms/PositiveForm';
// import { NavigationContainer } from "@react-navigation/native";


const FormScreen = ({navigation}) => {
  return (
    <View>
    <TouchableOpacity onPress = {()=>{
        navigation.navigate('Summary') //if submitting
        //otherwise navigate back to home if press cancel
      }}>
        <Text>SUBMIT FORM </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        navigation.navigate('Home')
      }}>
        <Text>CANCEL</Text>
      </TouchableOpacity>
      <PositiveForm/>
    </View>
  )
}
export default FormScreen; 