import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import PositiveForm from '../components/forms/PositiveForm';
import SummaryComp from '../components/forms/SummaryComp';
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


//post all saved data from positive form to summary in a flatlist 