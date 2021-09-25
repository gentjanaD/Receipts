import 'react-native-gesture-handler';
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import {View, Text, StyleSheet, FlatList, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MemoriesComp from '../components/MemoriesComp';
// const Stack = createStackNavigator();
const Memories = ({navigation}) => {
  return (
    <View style = {styles.container}>
    <ImageBackground source = {require('../assets/main.png')} style= {styles.image}>

    <View style = {styles.subContainer}>

      <Text style = {styles.Text}>See More</Text>

      <TouchableOpacity onPress = {()=> {
        navigation.navigate('Home')
      }}>
      <Text style = {styles.people}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {()=> {
        navigation.navigate('People')
      }}>
      <Text style = {styles.people}>All The People</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {()=> {
        navigation.navigate('Locations')
      }}>
      <Text style = {styles.people}>All Locations</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {()=> {
        navigation.navigate('Lessons')
      }}>
      <Text style = {styles.people}>All Lessons</Text>
      </TouchableOpacity>
      <MemoriesComp />
    </View>
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  Text:{
    fontWeight: 'bold',
    marginTop: 600,
  },
  people: {
    fontSize: 18,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})

export default Memories;