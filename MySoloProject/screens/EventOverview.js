import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet, SafeAreaView} from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';
import EventOverviewComp from '../components/EventOverviewComp';
const EventOverview = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <ImageBackground source = {require('../assets/eventO.png')} style= {styles.image}>
        <View style = {styles.buttonStyleContainer}>
      
      <TouchableOpacity style = {styles.buttonRight} onPress={()=>{
        navigation.navigate('Home')
      }}>
        <Text style = {styles.buttonText}>New Event</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.buttonLeft} onPress={()=>{
        navigation.navigate('Lessons')
      }}>
        <Text style = {styles.buttonText}>Lessons</Text>
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
    // backgroundColor: '#4e334e'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  buttonStyleContainer: {
    // flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 80,
    marginBottom: 20
  },
  buttonRight: {
  height: 40,
    width: 120,
    backgroundColor: '#301934',
    borderColor: '#e3d5e3',
    borderWidth: 0.8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 23,
    // marginBottom: 2,
    opacity: 0.9,
},
buttonLeft: {
  height: 40,
    width: 110,
    backgroundColor: '#301934',
    borderColor: '#e3d5e3',
    borderWidth: 0.8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 122,
    marginBottom: 10,
    opacity: 0.9,
    marginRight: 20,
},
buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 1
  },
})