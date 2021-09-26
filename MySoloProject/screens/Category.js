import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Category = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress = {()=>{
        navigation.navigate('Memories')
      }}>
      <Text>All Memories</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {()=> {
        navigation.navigate('Home')
      }}>
        <Text>New Event</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Category;