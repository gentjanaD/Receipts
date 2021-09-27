import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';
import EventOverviewComp from '../components/EventOverviewComp';
const EventOverview = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <ImageBackground source = {require('../assets/form.png')} style= {styles.image}>
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
      <EventOverviewComp/>
      </ImageBackground>
    </View>
  );
};
export default EventOverview; 

const styles = StyleSheet.create({
   container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})