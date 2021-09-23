import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
const Home = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress = {()=>{
        navigation.navigate('FormScreen')
      }}>
      <Text>Select Button</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        navigation.navigate('Memories')
      }}>
        <Text>All Memories</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Home; 