import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import LessonsComp from '../components/LessonsComp';

// const Stack = createStackNavigator();

const Lessons = () => {
  return (
    <View style = {styles.container, {height: 750}}>
      <ImageBackground source = {require('../assets/home.png')} style={styles.image}>
        <View style = {styles.subContainer}>

      <Text style = {styles.textHeading}>All The Lessons</Text>
        <LessonsComp/>
        </View>
        </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // marginTop: 20
  },
  subContainer: {
    flex:1,
    backgroundColor: 'white',
    maxWidth: 350,
    maxHeight: 650,
    marginLeft: 33,
    borderRadius: 9,
    opacity: 0.3
  },
  textHeading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 26,
    marginLeft: 77,
    marginTop: 17,
    marginBottom:10
  }
})
export default Lessons;