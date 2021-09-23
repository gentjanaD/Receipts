import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import FormScreen from './screens/FormScreen';
import Summary from './screens/Summary';
import EventOverview from './screens/EventOverview';
import Category from './screens/Category';
import Memories from './screens/Memories';
import People from './screens/People';
import Locations from './screens/Locations';
import Lessons from './screens/Lessons';

const Stack = createStackNavigator(); 
const  App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {Home} />
        <Stack.Screen name = "FormScreen" component = {FormScreen} />
        <Stack.Screen name = "Summary" component = {Summary} />
        <Stack.Screen name = "EventOverview" component = {EventOverview} />
        <Stack.Screen name = "Category" component = {Category} />
        <Stack.Screen name = "Memories" component = {Memories} />
        <Stack.Screen name = "People" component = {People} />
        <Stack.Screen name = "Locations" component = {Locations} />
        <Stack.Screen name = "Lessons" component = {Lessons} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
