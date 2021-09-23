import 'react-native-gesture-handler';
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// const Stack = createStackNavigator();
const Memories = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.Text}>ALL MEMORIES</Text>
      <TouchableOpacity onPress = {()=> {
        navigation.navigate('People')
      }}>
      <Text>All The People</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {()=> {
        navigation.navigate('Locations')
      }}>
      <Text>All Locations</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {()=> {
        navigation.navigate('Lessons')
      }}>
      <Text>All Lessons</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  Text:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  }
})

export default Memories;