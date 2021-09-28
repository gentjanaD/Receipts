import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import PositiveForm from '../components/forms/PositiveForm';
import SummaryComp from '../components/forms/SummaryComp';
const Summary = ({navigation}) => {
  return (
    <View style = {styles.container }>
      <ImageBackground source = {require('../assets/summary.png')} style= {styles.image}>
      {/* <View style = {styles.subContainer}> */}
        <View style = {styles.buttonStyleContainer}>
      <TouchableOpacity style = {styles.button} onPress = {() =>{
        navigation.navigate('Home')
      }} >
      <Text style = {styles.buttonText}> + New Event</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.buttonLeft} onPress={()=>{
        navigation.navigate('EventOverview');
      }}>
      <Text style = {styles.buttonText}>See All Events</Text>

      </TouchableOpacity>
        </View>
      {/* </View> */}
        <SummaryComp/>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 1
  },
button:{
    height: 40,
    width: 130,
    backgroundColor: '#301934',
    borderColor: '#e3d5e3',
    borderWidth: 0.8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 3,
    // marginBottom: 2,
    opacity: 0.9,
  },

  buttonLeft:{
    height: 40,
    width: 130,
    backgroundColor: '#301934',
    borderColor: '#e3d5e3',
    borderWidth: 0.8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 122,
    marginBottom: 10,
    opacity: 0.9,
  },
  input: {
    // color: 'white',
    borderColor:'#707070',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E6E4E4',
    opacity:0.4,
    marginBottom: 22,
    marginLeft: 10
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 5
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyleContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 50
  },
})

export default Summary; 


//post all saved data from positive form to summary in a flatlist 