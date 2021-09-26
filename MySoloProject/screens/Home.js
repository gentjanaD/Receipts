import React from 'react';
import {View, Text,TouchableOpacity, SafeAreaView, ImageBackground, StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
const Home = ({navigation}) => {
  return (
    <View style = {styles.container}>

    <ImageBackground source = {require('../assets/home.png')} style={styles.image}> 

    <View style = {styles.subContainer}>
      <Text style = {styles.Text}>WELCOME</Text>

      <Text style = {styles.Text}>How do you feel today?</Text>
      <View style = {styles.buttonStyleContainer}>
      <TouchableOpacity style = {styles.button} onPress={()=>{navigation.navigate('FormScreen')}}>
        <Text style = {[styles.buttonText]}>Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.button} onPress={()=>{navigation.navigate('FormScreen')}}>
        <Text style = {styles.buttonText}>Down</Text>
      </TouchableOpacity>
    </View>
      <TouchableOpacity style = {styles.memories} onPress={()=>{
        navigation.navigate('Memories')
      }}>
        <Text style = {styles.memories}>All Memories</Text>
      </TouchableOpacity>
    </View>
      </ImageBackground>
        </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyleContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 20
  },
  memories: {
    marginTop: 200,
    fontSize: 20,
    fontWeight: 'bold'
  },
  button:{
    height: 60,
    width: 90,
    backgroundColor: '#463D7B',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 190,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 10
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  Text:{
    color: 'black',
    fontSize: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
    fontWeight: 'bold',
    marginBottom: 20
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})
export default Home; 