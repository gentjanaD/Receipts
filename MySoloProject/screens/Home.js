import React from 'react';
import {View, Text,TouchableOpacity, SafeAreaView, ImageBackground, StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
const Home = ({navigation}) => {
  return (
    <View style = {styles.container}>

    <ImageBackground source = {require('../assets/home.png')} style={styles.image}> 

    <View style = {styles.subContainer}>
      <Text style = {styles.Text}>Receipts</Text>
      <Text style = {styles.subText}>How do you feel today?</Text>
      <View style = {styles.buttonStyleContainer}>
      <TouchableOpacity style = {styles.button} onPress={()=>{navigation.navigate('PositiveFormScreen')}}>
        <Text style = {[styles.buttonText]}>Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.button} onPress={()=>{navigation.navigate('NegativeFormScreen')}}>
        <Text style = {styles.buttonText}>Down</Text>
      </TouchableOpacity>
    </View>
      <TouchableOpacity style = {styles.memories} onPress={()=>{
        navigation.navigate('EventOverview')
      }}>
        <Text style = {styles.memories}>Your Memories</Text>
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
    // marginTop: 5,
    marginBottom: 20
  },
  memories: {
    marginTop: 140,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F9986A'
  },
  button:{
    height: 60,
    width: 90,
    backgroundColor: '#463D7B',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 90,
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
    color: '#F6D0CC',
    fontSize: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 70,
  },
  subText: {
    color: '#F9986A',
    fontSize: 26,
    marginTop: 90
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})
export default Home; 