import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';

const EventOverview = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress = {()=>{
        navigation.navigate('Category')
      }}>
      <Text>Category Overview</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress = {()=>{
        navigation.navigate('Memories')
      }}>
      <Text>Memories</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        navigation.navigate('Home')
      }}>
        <Text>New Event</Text>
      </TouchableOpacity>
      
    </View>
  );
};
export default EventOverview; 